import { expect } from "chai";
import expected from './../../data/expected.json'

describe('QA Project', () => {
    before(() => {
        browser.maximizeWindow();
        browser.url('/');
    })
    it('Should verify', async () => {
        expect(await browser.getTitle()).to.equal(expected.titleName)
    })
})