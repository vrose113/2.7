import { Builder, By, Capabilities, ChromiumWebDriver, until, WebDriver, WebElement } from "selenium-webdriver";

export class EmployeeManagerPO {
    driver: WebDriver;
    url: string = 'https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html'
    nameDisplay: By = By.id("employeeTitle");
    nameInput: By = By.name("nameEntry");
    phoneInput: By = By.name("phoneEntry");
    titleInput: By = By.name("titleEntry");
    saveButton: By = By.id("saveBtn");
    newEmployee: By = By.name("employee11")
    addEmployee: By = By.name("addEmployee")
    header: By = By.name("titleText")
    constructor(driver: WebDriver){
        this.driver = driver
    }
    async navigate() {
        await this.driver.get(this.url)
        await this.driver.wait(until.elementLocated(this.header))
    }
    async getElement(elementBy: By): Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy))
        let element = await this.driver.findElement(elementBy)
        await this.driver.wait(until.elementIsVisible(element))
        return element
    }
    async setInput(elementBy: By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy)
        await input.clear()
        return input.sendKeys(keys);
    }
    async sendKeys(elementBy: By, keys) {
        await this.driver.wait(until.elementLocated(elementBy))
        return this.driver.findElement(elementBy).sendKeys(keys)
    }
    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy))
        return this.driver.findElement(elementBy).click()
    }
    async addNewEmployee () {
        await this.click(this.addEmployee);
        await this.click(this.newEmployee);
    }
    async editEmployee (name:string, phoneNumber:string, title:string) {
        await this.setInput(this.nameInput, name)
        await this.setInput(this.phoneInput, phoneNumber);
        await this.setInput(this.titleInput, title);
    }
    async save() {
        await this.click(this.saveButton);
    }
}