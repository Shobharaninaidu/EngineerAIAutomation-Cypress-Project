/// <reference types="cypress"/>
import TemplatePage from "../page_objects/TemplatePage"

describe('Template Page test suite', () => {
/*   let jsonData
   before(()=>{
    cy.fixture('data').then(function (data){
        cy.log(data.username)
        jsonData=data
        cy.log(jsonData.username)
    })
   }) */
    beforeEach(()=>{
       
      cy.visit(Cypress.env('appUrl'))
    })

    //test cases 

it.only("Go To Template Page",()=>{

    const tempPage=new TemplatePage()

    tempPage.goToTemplate()
    
   
})

})