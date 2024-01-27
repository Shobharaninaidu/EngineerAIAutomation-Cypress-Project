
//windows tests

/// <reference types="cypress"/>


 
//test cases 
it.only("Verify login with correct credentials",()=>{
    cy.visit('https://the-internet.herokuapp.com/iframe')
    cy.switchToIframe('#mce_0_ifr').clear().type("this is a iframe example")
    
 })

 it("Verify windows",()=>{
    cy.visit('https://the-internet.herokuapp.com/iframe')
    cy.xpath("//a[contains(@href,'github')]").invoke('removeAttr','target').click({force:true})
    
 })

 it("Verify navigation and cross origin",()=>{
    cy.visit('https://the-internet.herokuapp.com/iframe')
    cy.visit('https://staging.engineer.ai')
    //cy.go('back')
    cy.origin('https://staging.engineer.ai',()=>{
       cy.get('.builderNowCta').click()

    })
 })

 it("Verify responsive tests",()=>{
    cy.viewport('iphone-xr')
     cy.visit('https://staging.engineer.ai')
     cy.get('.builderNowCta').click()

  })


 
 
