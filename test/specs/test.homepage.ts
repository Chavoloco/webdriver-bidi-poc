import homePage from '../../pageobjects/homePage.js'

describe('GSM Homepage', () => {

    beforeEach(async () => {
        await homePage.open()
      });

    it('should display the Elements page', async () => {
        await homePage.verifyElement('Elements page');
    });

    it('should display the Forms page', async () => {
        await homePage.verifyElement('Forms page');
    });

    it('should display the Alerts page', async () => {
        await homePage.verifyElement('Alerts page');
    });

    it('should display the Widgets page', async () => {
        await homePage.verifyElement('Widgets page');
    });

    it('should display the Interactions page', async () => {
        await homePage.verifyElement('Interactions page');
    });

    it('should display the Book store page', async () => {
        await homePage.verifyElement('Book store page');
    });

    it('should go to the Elements page', async () => {
        await homePage.goToSelectedPage('Elements page');
        expect(await browser.getUrl()).toContain('elements');
    });

    it('should go to the Forms page', async () => {
        await homePage.goToSelectedPage('Forms page');
        expect(await browser.getUrl()).toContain('forms');
    });

    it('should go to the Alerts page', async () => {
        await homePage.goToSelectedPage('Alerts page');
        expect(await browser.getUrl()).toContain('alertsWindows');
    });

    it('should go to the Widgets page', async () => {
        await homePage.goToSelectedPage('Widgets page');
        expect(await browser.getUrl()).toContain('widgets');

    });

    it('should go to the Interactions page', async () => {
        await homePage.goToSelectedPage('Interactions page');
        expect(await browser.getUrl()).toContain('interaction');
    });

    it('should go to the Book store page', async () => {
        await homePage.goToSelectedPage('Book store page');
        expect(await browser.getUrl()).toContain('books');
    });

})

