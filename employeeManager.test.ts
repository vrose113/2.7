import { EmployeeManagerPO } from "./employeeManagerPO";
const chromedriver = require("chromedriver")
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";

const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build()

const page = new EmployeeManagerPO(driver)

describe("Employee Manager Edit", () => {
    test("add a new employee and edit it", async () => {
        page.navigate();
        page.addNewEmployee();
        page.editEmployee("Squidward Tentacles", "0987654321", "Cashier");
        page.save();
        expect((await page.getElement(page.nameDisplay)).getText()).toBe("Squidward Tentacles")
    })
})