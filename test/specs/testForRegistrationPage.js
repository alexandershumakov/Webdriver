import { expect } from "chai";
import expected from './../../data/expected.json';
import selectors from './../../data/selectors.json';
import testData from './../../data/testData.json';


describe('User registers into the system', () => {
    before(() => {
        browser.maximizeWindow();
        browser.url('/');
    });
    it('User checks the title', async () => {
        await $(selectors.registerLink).click();
        await browser.getTitle().to.equal(expected.titleName);
    });
    it('User fills all fields and completes form', async () => {
        await $(selectors.userName).setValue(testData.userName)
        await $(selectors.password).setValue(testData.password)
        await $(selectors.passwordReType).setValue(testData.passwordReType);
        await $(selectors.firstQuestionDropdown).selectByVisibleText(testData.firstQuestionDropdown);
        await $(selectors.yourAnswerField).setValue(testData.yourAnswerField);
        await $(selectors.retypeAnswerField).setValue(testData.retypeAnswerField);
        await $(selectors.secondQuestionDropdown).selectByVisibleText(testData.secondQuestionDropdown);
        await $(selectors.yourAnswerField2).setValue(testData.yourAnswerField2);
        await $(selectors.retypeAnswerField2).setValue(testData.retypeAnswerField2);
        await $(selectors.account1RadioButton).click();
        await $(selectors.title).selectByVisibleText(testData.title);
        await $(selectors.firstName).setValue(testData.firstName);

        await browser.pause(3000);
    });
});

//
// it('Should verify that login input field accept valid data', () => {
//     const element = "//input[@id='user-name']";
//     const loginName = 'standard_user';
//     expect($(element).setValue(loginName));
// })
//
// it('Should verify that login input field accept valid data', () => {
//     const elementPassword = "//input[@id='password']";
//     const password = 'secret_sauce';
//     expect($(elementPassword).setValue(password));
// })
//
// it('Should verify that login input field accept valid data', () => {
//     const singInButton = "//input[@id='login-button']";
//     $(singInButton).click();
// })
//
// it('Should verify that login input field accept valid data', async () => {
//     await browser.setTimeout({ 'implicit': 5000 })
//     const products = await $("//span[contains(text(),'Products')]");
//     await expect($(products).getText()).to.equal("Products");
// })