/// <reference types="cypress"/>
import LoginPage from "../page_objects/LoginPage"
import TemplatePage from "../page_objects/TemplatePage"

describe('Project test suite', () => {
    let jsonData
   before(()=>{
    cy.fixture('data').then(function (data){
        cy.log(data.username)
        jsonData=data
        cy.log(jsonData.username)
    })
   }) 
    beforeEach(()=>{
       
      cy.visit(Cypress.env('appUrl'))
    })


    //test cases 
it("Verify login with correct credentials",()=>{

    const loginPage=new LoginPage()

    loginPage.goToLoginForm()
    loginPage.login(jsonData.username,jsonData.password)
   
})

it("Go To Template Page",()=>{

    const tempPage=new TemplatePage()

    tempPage.goToTemplate()
    
   })

})