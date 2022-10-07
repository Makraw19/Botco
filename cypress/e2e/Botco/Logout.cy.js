import LoginPage from "./object_repository/login"

const login = new LoginPage()

describe("Logout", function(){

    beforeEach(function() {
        cy.fixture('testdata').then(function(data){
            this.test_data = data

        })

      })

    
    it('User is able to logout successfully', function(){
        cy.visit("https://uat.botco.ai")
        login.username().type(this.test_data.valemail)
        login.password().type(this.test_data.valpassword)
        login.login_btn().click()
        cy.wait(2000)
        cy.url().should('eq', 'https://uat.botco.ai/conversations')
        cy.wait(1000)
        cy.get('[data-testid="side-nav-logout"]').click()
        cy.wait(1000)
        cy.url().should('eq', 'https://uat.botco.ai/')

    })


})