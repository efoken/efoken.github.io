/* eslint-disable no-console, import/no-extraneous-dependencies */
import puppeteer from 'puppeteer';

export default async function main() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000', {
    waitUntil: 'networkidle2',
  });
  await page.emulateMediaType('print');
  await page.pdf({
    format: 'A4',
    path: 'resume.pdf',
    printBackground: false,
    displayHeaderFooter: false,
    scale: 0.8,
    preferCSSPageSize: true,
  });
  await browser.close();
}

if (require.main === module) {
  // Run main function if called via CLI
  main().catch(console.error);
}
