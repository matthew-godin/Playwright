import { chromium, test } from "@playwright/test";

test("handling download and upload", async () => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    /*await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");
    await page.type("#textbox", "Like, Share, Subscribe");
    await page.click("id=create");
    const download = await Promise.all([
        page.waitForEvent("download"),
        page.click("id=link-to-download")
    ]);
    const fileName = await download[0].suggestedFilename();
    await download[0].saveAs(fileName);
    //const path = await download[0].path();
    console.log(fileName);*/
    
    await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
    //await page.setInputFiles("input[type='file']", ["Lambdainfo.png"]);
    const [uploadFiles] = await Promise.all([
        page.waitForEvent("filechooser"),
        page.click("input[type='file']")
    ]);
    const isMultiple = await uploadFiles.isMultiple();
    console.log(isMultiple);
    uploadFiles.setFiles(["Lambdainfo.png"]);
    await page.waitForTimeout(3000);
});