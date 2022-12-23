import { expect } from "chai";
import expected from './../../data/expected.json';

describe('User registers into the system', () => {
    before(() => {
        browser.maximizeWindow();
        browser.url('/');
    });
    it('Check title', async () => {
        const registerLink = await $("//ul//a[@tabindex ='9']");
        await registerLink.click();
        expect(await browser.getTitle()).to.equal(expected.titleName);
    });
    it('Fill all fields and finish', async () => {
        const languageDropdown = await $("//input[@id='tuserName']");
        const password = await $("//input[@id='tPassword']");
        const passwordReType = await $("//input[@id='tPasswordRetype']");
        const firstQuestionDropdown = await $("//select[@id='ssec1']");
        const yourAnswerField = await $("//input[@id='tsecAnswer1']");
        const retypeAnswerField = await $("//input[@id='tsecAnswer1Match']");
        const secondQuestionDropdown = await $("//select[@id='ssec2']");
        const yourAnswerField2 = await $("//input[@id='tsecAnswer2']");
        const retypeAnswerField2 = await $("//input[@id='tsecAnswer2Match']");
        const account1RadioButton = await $("//label[@id='for-rAccount1']");
        const title = await $("//select[@id='stitle']");
        const firstName = await $("//input[@id='tfName']");

        await languageDropdown.setValue("shumm4ik");
        await password.setValue("Qw12345@");
        await passwordReType.setValue("Qw12345@");
        await firstQuestionDropdown.selectByVisibleText("What is the name of your pet?");
        await yourAnswerField.setValue("test1");
        await retypeAnswerField.setValue("test1");
        await secondQuestionDropdown.selectByVisibleText("In what city were you born?");
        await yourAnswerField2.setValue("test2");
        await retypeAnswerField2.setValue("test2");
        await account1RadioButton.click();
        await title.selectByVisibleText("Mr");
        await firstName.setValue("Odin");

        await browser.pause(3000);
    });
})