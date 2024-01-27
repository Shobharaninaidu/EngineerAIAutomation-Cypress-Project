class TemplatePage {

    //locators
    
    //firsttemp=':nth-child(1) > .templateCard'
    chooseTemplate='.morebtn.active'
    footerbloc=':nth-child(1) > .templateCard > .footer > .title'
    buildNowBtn="//div[@class='getStart']"
   /* customizeCost="//span[normalize-space()='Customisation cost']"
    customizeCostVal="//strong[contains(text(),'₹1,96,910.77')]"
    fixedCost='.tooltipInfoBox'
    fixedCostVal="//strong[contains(text(),'₹6,78,597.00')]"
    totalCost="//span[normalize-space()='Total Cost']"
    totalCostVal="//strong[contains(text(),'₹8,75,508.00')]"
    indicativeDuration="//span[normalize-space()='Indicative Duration']"
    indicativeDurationVal="//strong[normalize-space()='16 weeks']"
    planBtn="//button[normalize-space()='Plan Delivery']"*/

   
    //steps
    goToTemplate() {
        cy.get('body')
        //cy.get(this.firsttemp).should("contains",'9GAG')  
        cy.viewport(1280,720)
        cy.wait(5000)      
        cy.get(this.chooseTemplate).click()
        //cy.wait(5000)
        cy.get(this.footerbloc).should("have.text"," ₹ 646k")
        cy.get(this.buildNowBtn).click()
        
    }
     
}

export default TemplatePage
