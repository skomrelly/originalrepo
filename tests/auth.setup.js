import {test as setup, expect} from '@playwright/test'

const standardAuthFile = './.auth/standarduser.json'
const userAuthFile = './.auth/visualuser.json'

setup('standard user authentication', async ({page}) => {
    await page.goto('https://www.saucedemo.com/')
    await expect(page).toHaveURL(/saucedemo/)
    await expect(page.getByPlaceholder("Username")).toBeVisible({timeout: 4000})
    
    await page.getByPlaceholder("Username").fill("standard_user")
    await page.getByPlaceholder("Password").fill("secret_sauce")
    await page.locator("#login-button").click()
    await expect(page).toHaveURL(/inventory/)
    await page.context().storageState({path: standardAuthFile})    
})

setup('visual user authentication', async({page}) => {
    await page.goto('https://www.saucedemo.com/')
    await expect(page).toHaveURL(/saucedemo/)
    await expect(page.getByPlaceholder("Username")).toBeVisible({timeout: 4000})
    await page.getByPlaceholder("Username").fill("visual_user")
    await page.getByPlaceholder("Password").fill("secret_sauce")
    await page.locator("#login-button").click()
    await expect(page).toHaveURL(/inventory/)
    await page.context().storageState({path: userAuthFile})   
})