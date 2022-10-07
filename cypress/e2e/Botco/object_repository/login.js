export class LoginPage{

    username()
    {
        return cy.get('#email')
    }
    password()
    {
        return cy.get('#password')

    }
    login_btn()
    {
        return cy.get('.botco-red-outline-button')
    }
    
}

export default LoginPage