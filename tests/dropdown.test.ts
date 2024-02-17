import { chromium, test } from "@playwright/test";

test("handling dropdown", async () => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("#select-demo", {
        //label: "Tuesday"
        //value: "Friday"
        index: 5
    })
    await page.waitForTimeout(3000);
});