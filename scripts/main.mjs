import fs from 'fs';
import lighthouse from 'lighthouse';
import puppeteer from 'puppeteer';

const browser = await puppeteer.launch();
const page = await browser.newPage();

await page.goto('https://chriskgbc.github.io/desn3035-e5/');
await page.setViewport({width: 1920, height: 1080});
await page.waitForNetworkIdle();
await page.screenshot({
    path: "auto_screenshot.png"
});

const options = {
    output: 'html'
};
const runnerResult = await lighthouse('https://chriskgbc.github.io/desn3035-e5/', options, undefined, page);
const reportHtml = runnerResult.report;
fs.writeFileSync('auto_report.html', reportHtml);
await browser.close();