import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const templateHtmlPath = path.resolve(__dirname, 'cv-general-template.html');
const publicPdfPath = path.resolve(rootDir, 'public', 'SetiawanMuhammad_CV.pdf');
const userCvPath = path.resolve('D:\\pribadi', 'SetiawanMuhammad_CV.pdf');

// Candidate browser executables
const browserCandidates = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
];

const browserExe = browserCandidates.find((p) => fs.existsSync(p));

if (!browserExe) {
  console.error('Error: No supported Chromium/Edge browser found for PDF generation.');
  process.exit(1);
}

console.log(`[CV Generator] Using browser binary: ${browserExe}`);
console.log(`[CV Generator] Source HTML: ${templateHtmlPath}`);

// Ensure public directory exists
const publicDir = path.dirname(publicPdfPath);
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Convert HTML file path to file URL
const fileUrl = 'file:///' + templateHtmlPath.replace(/\\/g, '/');

const args = [
  '--headless=new',
  '--disable-gpu',
  '--no-pdf-header-footer',
  '--run-all-compositor-stages-before-draw',
  `--print-to-pdf=${publicPdfPath}`,
  fileUrl,
];

console.log('[CV Generator] Spawning headless printing process...');

const child = spawn(browserExe, args, { stdio: 'inherit' });

child.on('close', (code) => {
  if (code !== 0) {
    console.error(`[CV Generator] Failed with exit code ${code}`);
    process.exit(code);
  }

  if (fs.existsSync(publicPdfPath)) {
    const stats = fs.statSync(publicPdfPath);
    console.log(`[CV Generator] Successfully generated: ${publicPdfPath} (${(stats.size / 1024).toFixed(1)} KB)`);

    // Copy to D:\pribadi\SetiawanMuhammad_CV.pdf as requested
    try {
      fs.copyFileSync(publicPdfPath, userCvPath);
      console.log(`[CV Generator] Overwritten target CV file: ${userCvPath}`);
    } catch (err) {
      console.warn(`[CV Generator] Note: Could not copy to ${userCvPath}: ${err.message}`);
    }
  } else {
    console.error('[CV Generator] Output PDF was not created.');
    process.exit(1);
  }
});
