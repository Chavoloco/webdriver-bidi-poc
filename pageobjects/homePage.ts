import Page from './page.js';

class Homepage extends Page {

    private elementCard = '//*[@class="card-body"]/h5[text()="Elements"]/../../..';
    private formsCard = '//*[@class="card-body"]/h5[text()="Forms"]/../../..';
    private alertsCard = '//*[@class="card-body"]/h5[text()="Alerts, Frame & Windows"]/../../..';
    private widgetsCard = '//*[@class="card-body"]/h5[text()="Widgets"]/../../..';
    private interactionsCard = '//*[@class="card-body"]/h5[text()="Interactions"]/../../..';
    private bookStoreCard = '//*[@class="card-body"]/h5[text()="Book Store Application"]/../../..';

    private async getElement(selector: string) {
        return await $(selector);
    }

    public open() {
        return super.open();
    }

    private async selectElement(elementName: string) {
        switch (elementName.toLowerCase()) {
            case "elements page":
                return await this.getElement(this.elementCard);
            case "forms page":
                return await this.getElement(this.formsCard);
            case "alerts page":
                return await this.getElement(this.alertsCard);
            case "widgets page":
                return await this.getElement(this.widgetsCard);
            case "interactions page":
                return await this.getElement(this.interactionsCard);
            case "book store page":
                return await this.getElement(this.bookStoreCard);
            
            default:
                throw new Error(`Element "${elementName}" not found`);
        }
    }

    public async verifyElement(elementName: string) {
        const element = await this.selectElement(elementName);
        expect(element).toBeDisplayed();
    }

    public async goToSelectedPage(pageName: string) {
        const element = await this.selectElement(pageName);

        await element.waitForClickable({
            timeout: 5000,
            timeoutMsg: 'Element was not clickable'
        });

        await element.click();
        
        await browser.waitUntil(
            async () => (await browser.execute(() => document.readyState)) === 'complete',
            {
                timeout: 5000, 
                timeoutMsg: 'Page did not load completely'
            }
        );
    }
}

export default new Homepage();
