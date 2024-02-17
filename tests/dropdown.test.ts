import { chromium, test } from "@playwright/test";

test("handling dropdown", async () => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    /*await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("#select-demo", {
        //label: "Tuesday"
        //value: "Friday"
        index: 4
    })*/

    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    await page.click("#country+span");
    await page.locator("ul#select2-country-results")
        .locator("li", {
            hasText: "India"
        }).click();

    await page.waitForTimeout(3000);
});