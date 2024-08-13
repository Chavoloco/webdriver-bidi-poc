import Page from './page.js';

class ElementPage extends Page {

    private nameTextBoxOutput = '#output #name'
    private emailTextBoxOutput = '#output #email'
    private currentAddressTextBoxOutput = '#output #currentAddress'
    private permanetAddressTextBoxOutput = '#output #permanentAddress'

    private async getElement(selector: string) {
        return await $(selector);
    }

    public open() {
        return super.open();
    }

    private async selectElement(elementName: string) {
        switch (elementName.toLowerCase()) {
            case "output name":
                return await this.getElement(this.nameTextBoxOutput);
            case "output email":
                return await this.getElement(this.emailTextBoxOutput);
            case "output current address":
                return await this.getElement(this.currentAddressTextBoxOutput);
            case "output permanent address":
                return await this.getElement(this.permanetAddressTextBoxOutput);
            default:
                throw new Error(`Element "${elementName}" not found`);
        }
    }

    public async verifyElement(elementName: string) {
        const element = await this.selectElement(elementName);
        expect(element).toBeDisplayed();
    }

    // export function getElementsPageElementThatContains(elementName) {
    //     return cy.contains(elementName);
    //   }
      
    //   export function fillInputWith(input, textToType) {
    //     cy.get(input).type(textToType);
    //   }
      
    //   export function verifyTextBoxOutput(expectedName, expectedEmail, expectedCurrentAddress, expectedPermanentAddress) {
    //     cy.get('#output #name').should('contain', expectedName);
    //     cy.get('#output #email').should('contain', expectedEmail);
    //     cy.get('#output #currentAddress').should('contain', expectedCurrentAddress);
    //     cy.get('#output #permanentAddress').should('contain', expectedPermanentAddress);
    //   }
      
    //   export function checkCheckBox(label) {
    //     if (label == 'Home') {
    //       cy.get('[for="tree-node-home"] span.rct-checkbox', {force: true}).click();
    //     }
        
    //   }
      
    //   export function verifyCheckBoxOutput(expectedOutput) {
    //     cy.get('#result').should('contain', expectedOutput);
    //   }
      
    //   export function selectRadioButton(label) {
    //     if (label == 'Yes') {
    //       cy.get('[for="yesRadio"]').click();
    //     }if (label == 'Impressive') {
    //       cy.get('[for="impressiveRadio"]').click();
    //     }else {
    //       cy.get('radio does not exist')
    //     }
    //   }
      
    //   export function verifyRadioButtonOutput(expectedOutput) {
    //     cy.get('.mt-3').should('contain', expectedOutput);
    //   }
      
}

export default new ElementPage()