
describe('', ()=>{

    it('', ()=>{
        cy.visit('https://www.lambdatest.com/selenium-playground/');
        cy.contains('iFrame Demo').should('exist').click();
        cy.get('#iFrame1').should('be.visible').its('0.contentDocument.body').then($element=>{
            cy.wrap($element).find().clear().type('demo test');


            // Accessing cross origin iframe elements like youtube - for iframe content to be accessed the contentwindowsreadystate must be complete and the iframe must he be fully loaded.
            cy.get().should('be.visible');
        })


    })



})