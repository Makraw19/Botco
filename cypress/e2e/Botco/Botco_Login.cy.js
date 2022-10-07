import LoginPage from "./object_repository/login"

const login = new LoginPage()


describe("Login", function(){

    beforeEach(function() {
        cy.fixture('testdata').then(function(data){
            this.test_data = data

        })

      })

    it("User is logged in successfully with valid username and valid password", function(){
        
        cy.visit("https://uat.botco.ai")
        login.username().type(this.test_data.valemail)
        login.password().type(this.test_data.valpassword)
        login.login_btn().click()
        cy.wait(2000)
        cy.url().should('eq', 'https://uat.botco.ai/conversations');

    })

    it("User is not able to log in with invalid username and invalid password", function(){
        
        cy.visit("https://uat.botco.ai")
        login.username().type(this.test_data.invemail)
        login.password().type(this.test_data.invpassword)
        login.login_btn()
        cy.wait(2000)
        cy.url().should('eq', 'https://uat.botco.ai/');

    })

    it("User is not able to log in with valid username and invalid password", function(){
        
        cy.visit("https://uat.botco.ai")
        login.username().type(this.test_data.valemail)
        login.password().type(this.test_data.invpassword)
        login.login_btn()
        cy.wait(2000)
        cy.url().should('eq', 'https://uat.botco.ai/');

    })

    it("User is not able to log in winth invalid username and valid password", function(){
        
        cy.visit("https://uat.botco.ai")
        login.username().type(this.test_data.invemail)
        login.password().type(this.test_data.valpassword)
        login.login_btn()
        cy.wait(2000)
        cy.url().should('eq', 'https://uat.botco.ai/');

    })


})
