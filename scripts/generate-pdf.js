import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const templateHtmlPath = path.resolve(__dirname, 'pdf-template.html');
const publicPdfPath = path.resolve(rootDir, 'public', 'Setiawan_Muhammad_Portfolio.pdf');
const userPribadiPdfPath = path.resolve('D:\\pribadi', 'Setiawan_Muhammad_Portfolio.pdf');

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

console.log(`[PDF Generator] Using browser binary: ${browserExe}`);
console.log(`[PDF Generator] Source HTML: ${templateHtmlPath}`);

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

console.log('[PDF Generator] Spawning headless printing process...');

const child = spawn(browserExe, args, { stdio: 'inherit' });

child.on('close', (code) => {
  if (code !== 0) {
    console.error(`[PDF Generator] Failed with exit code ${code}`);
    process.exit(code);
  }

  if (fs.existsSync(publicPdfPath)) {
    const stats = fs.statSync(publicPdfPath);
    console.log(`[PDF Generator] Successfully generated: ${publicPdfPath} (${(stats.size / 1024).toFixed(1)} KB)`);

    // Copy to D:\pribadi as requested
    try {
      fs.copyFileSync(publicPdfPath, userPribadiPdfPath);
      console.log(`[PDF Generator] Copied directly to personal directory: ${userPribadiPdfPath}`);
    } catch (err) {
      console.warn(`[PDF Generator] Note: Could not copy to ${userPribadiPdfPath}: ${err.message}`);
    }
  } else {
    console.error('[PDF Generator] Output PDF was not created.');
    process.exit(1);
  }
});
