import {faker} from '@faker-js/faker';
import homePage from '../../support/pages/'

describe('Signup Scenarios', () => {

    it.only('Successful signup having filled all mandatory fields', () => {
        cy.fixture('selectors').then((data)=>{
    cy.get(data.homePageSignupButton).click();
      cy.get(data.fullNameField).should('be.visible').fill('Samuel Blay');
      cy.get(data.businessNameField).fill('Robert and Sons');
      cy.get(data.businessNameEmail).fill(faker.internet.email({provider:'paich.com'}));
      cy.get(data.phoneField).fill(faker.phone.number('+4474########'));
      cy.get('input#businessRegNum').fill('WASFH02');
      cy.get('.Login_rightside__nhkW7 div:nth-child(6) button').click();
      cy.get('input#website').fill('yolo.com').invoke('val').should('match',/.com/);
      cy.get('input#instagramHandle').fill('@Blay').invoke('val') .should('match',/@/) // Assert that it contains the "@" symbol
      cy.get('input#twitterHandle').fill('@paichBlay').invoke('val') .should('match',/@/) // Assert that it contains the "@" symbol
      cy.get('div[placeholder]').click();
      cy.get("#scrollableDiv input[placeholder='Search list']").fill('Instagram');
      cy.contains('.MimaDropdown_select__options__xLi7K', 'Instagram').click() // Select the "Instagram" option from the dropdown
      cy.get('input#password').fill('Qawedrf@33123');
      cy.pause()
      cy.get(".Login_rightside__nhkW7 button[type='submit']").click();
    })
      
    })


    it('Unsuccessful signup having filled all mandatory fields', () => {

    })
    

    
  })