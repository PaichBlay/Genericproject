import "cypress-fill-command"

Cypress.Commands.add('login', (email, password) => {

})

Cypress.Commands.add('typeIn', (element,text) => {
    
})

Cypress.Commands.add('clickAnyElement', (element) => {
    
})

Cypress.Commands.add('chkIframeLoaded', { prevSubject: 'element'}, (iframe) => {
    const win = iframe.prop('contentWindow');
    return new Promise (resolve=>{
        if(win && win.document.readystate ==='complete'){
            resolve(win.documment.body)
        }

        else{
             iframe.on('load', ()=>{
                resolve(win.document.body)
             })   
        }
    })
})


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })