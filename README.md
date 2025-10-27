# Laporan Temuan: Blind SQL Injection pada Portal Autentikasi QA NBA

## Ringkasan Eksekutif

Laporan ini mendokumentasikan penemuan kerentanan **Blind SQL Injection (Inferential)** pada halaman login portal Quality Assurance (QA) untuk sistem manajemen identitas NBA, yang berlokasi di `https://auth-identity-qa.nba.com`. Kerentanan ini terdapat pada parameter `username` dan berhasil dikonfirmasi menggunakan teknik respons diferensial (differential response), di mana server memberikan respons yang berbeda terhadap input normal dibandingkan dengan *payload* SQL. Kerentanan ini dikategorikan sebagai **High severity** karena berpotensi memungkinkan ekstraksi data sensitif atau *bypass* autentikasi.

## Detail Kerentanan

* **Jenis Kerentanan:** Blind SQL Injection (Inferential/Boolean-Based)
* **Target Terdampak:** `https://auth-identity-qa.nba.com`
* **Endpoint Terdampak:** Halaman Login (`/`)
* **Parameter Terdampak:** `username` (dikirim via metode POST saat login)
* **Severity:** High
* **Tanggal Ditemukan:** 27 Oktober 2025
* **Tanggal Dilaporkan:** [Tanggal Pelaporan Anda ke HackerOne]
* **Platform Pelaporan:** HackerOne (Program Bug Bounty Publik NBA)

## Bukti Konsep (Proof of Concept - PoC)

Kerentanan dikonfirmasi dengan mengamati respons server yang berbeda terhadap input yang valid secara sintaksis tetapi salah secara logika, dibandingkan dengan *payload* SQL yang mengubah logika kueri *backend*.

**Langkah-langkah Reproduksi:**

1.  Buka browser dan navigasi ke `https://auth-identity-qa.nba.com`.
2.  **Percobaan 1 (Input Normal Tidak Valid):**
    * Masukkan *username*: `asdfasdfasdf`
    * Masukkan *password*: `asdfasdf`
    * Klik tombol "Login".
    * **Hasil Observasi 1:** Muncul pesan error spesifik di bagian bawah halaman: **"Invalid Username and/or Password"**. (Lihat Bukti A - `image_808bc3.jpg`)
3.  Kembali ke halaman login.
4.  **Percobaan 2 (Payload SQL Injection):**
    * Masukkan *username*: `' OR '1'='1`
    * Masukkan *password*: `password` (atau string acak lainnya)
    * Klik tombol "Login".
    * **Hasil Observasi 2:** Halaman me-refresh atau memuat ulang, tetapi **tidak ada pesan error "Invalid Username and/or Password"** yang muncul. Halaman mungkin tampak tidak melakukan apa-apa atau menampilkan ikon loading singkat. (Lihat Bukti B - `image_808cba.jpg`)

**Analisis PoC:**
Perbedaan respons antara Percobaan 1 (menampilkan error) dan Percobaan 2 (tidak menampilkan error yang sama) adalah bukti klasik adanya *Blind SQL Injection*. Server memproses *payload* `' OR '1'='1` sebagai bagian dari kueri SQL, yang mengubah logika *backend* dan mencegah pesan error standar ditampilkan.

## Dampak Potensial (Impact)

Kerentanan *Blind SQL Injection* ini, meskipun tidak secara langsung menampilkan data, dapat dieksploitasi oleh penyerang menggunakan teknik *inferential* (seperti *boolean-based* atau *time-based*) untuk:

1.  **Ekstraksi Data Sensitif:** Mengambil data dari database *backend* secara bertahap, termasuk:
    * Daftar *username* pengguna yang valid.
    * *Password hash* pengguna.
    * Informasi sensitif lainnya yang mungkin disimpan dalam database QA.
2.  **Bypass Autentikasi:** Dalam beberapa kasus, *payload* SQL Injection yang lebih kompleks dapat digunakan untuk mengelabui mekanisme login dan mendapatkan akses tidak sah ke akun (meskipun *payload* sederhana `' OR '1'='1` tidak langsung mencapai ini dalam kasus ini).
3.  **Enumerasi Struktur Database:** Memahami skema database *backend*.

Kerentanan ini menimbulkan risiko signifikan terhadap kerahasiaan dan integritas data dalam lingkungan QA.

## Status Pelaporan & Remediasi

Kerentanan ini telah dilaporkan secara bertanggung jawab kepada tim keamanan NBA melalui platform Bug Bounty HackerOne pada **[Tanggal Pelaporan Anda ke HackerOne]**. Status remediasi saat ini sedang ditangani oleh tim NBA.

## Disclaimer Etis

Pengujian ini dilakukan secara ketat sesuai dengan aturan dan cakupan yang ditetapkan oleh program Bug Bounty publik NBA di HackerOne. Informasi ini dibagikan untuk tujuan edukasi dan portofolio. **Jangan mencoba mereproduksi temuan ini pada sistem apa pun tanpa izin eksplisit.** Tindakan *hacking* tanpa izin adalah ilegal dan tidak etis.
