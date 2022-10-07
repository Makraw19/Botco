import LoginPage from "./object_repository/login"
import bot from "./object_repository/create_bot";

const login = new LoginPage()
const botobj = new bot()

const uniqueSeed = Date.now().toString();
const getUniqueId = () => Cypress._.uniqueId(uniqueSeed)

describe ("Create bot",function(){

    beforeEach(function() {
        cy.fixture('testdata').then(function(data){
            this.test_data = data

        })

      })
    
    // it("click CREATE NEW button and Create Conversation! pops up", function(){
        
    //     cy.visit("https://uat.botco.ai")
    //     login.username().type(this.test_data.valemail)
    //     login.password().type(this.test_data.valpassword)
    //     login.login_btn().click()
    //     cy.wait(2000)
    //     cy.url().should('eq', 'https://uat.botco.ai/conversations');
    //     cy.wait(3000)
    //     botobj.create_new_bot_btn().click()
    //     botobj.conversation_title().should('have.text', 'Create Conversation!')

    // })

    // it("click CANCEL button and Create Conversation! pop up disappears", function(){
        
    //     cy.visit("https://uat.botco.ai")
    //     login.username().type(this.test_data.valemail)
    //     login.password().type(this.test_data.valpassword)
    //     login.login_btn().click()
    //     cy.wait(2000)
    //     cy.url().should('eq', 'https://uat.botco.ai/conversations')
    //     cy.wait(4000)
    //     botobj.create_new_bot_btn().click()
    //     botobj.conversation_title().should('have.text', 'Create Conversation!')
    //     cy.wait(2000)
    //     botobj.conversation_popup_cancel_btn().click()
    //     botobj.conversation_title().should('not.exist')
    // })

    // it("create conversation successfully with the Conversation Title", function(){
        
    //     cy.visit("https://uat.botco.ai")
    //     login.username().type(this.test_data.valemail)
    //     login.password().type(this.test_data.valpassword)
    //     login.login_btn().click()
    //     cy.wait(2000)
    //     cy.url().should('eq', 'https://uat.botco.ai/conversations');
    //     cy.wait(3000)
    //     botobj.create_new_bot_btn().click()
    //     botobj.conversation_title().should('have.text', 'Create Conversation!')
    //     const uniqueId = getUniqueId();
    //     botobj.conversation_title_txt_box().type("Automate"+uniqueId);
    //     botobj.coversation_save_btn().click()
    //     cy.wait(4000)
    //     botobj.conversation_title_btn().should('have.text',"Automate"+uniqueId)

    // })

    // it("Verify user is not able to create multiple bot with the same name", function(){
        
    //     cy.visit("https://uat.botco.ai")
    //     login.username().type(this.test_data.valemail)
    //     login.password().type(this.test_data.valpassword)
    //     login.login_btn().click()
    //     cy.wait(2000)
    //     cy.url().should('eq', 'https://uat.botco.ai/conversations');
    //     cy.wait(3000)
    //     botobj.create_new_bot_btn().click()
    //     botobj.conversation_title().should('have.text', 'Create Conversation!')
    //     botobj.conversation_title_txt_box().type("AutomationBot1")
    //     botobj.coversation_save_btn().click()
    //     botobj.toaster_popup().should('have.text','Duplicate conversation title')

    // })

    // it("Verify user is able to create conversation and delete it", function(){
        
    //     cy.visit("https://uat.botco.ai")
    //     login.username().type(this.test_data.valemail)
    //     login.password().type(this.test_data.valpassword)
    //     login.login_btn().click()
    //     cy.wait(2000)
    //     cy.url().should('eq', 'https://uat.botco.ai/conversations');
    //     cy.wait(3000)
    //     botobj.create_new_bot_btn().click()
    //     botobj.conversation_title().should('have.text', 'Create Conversation!')
    //     const uniqueId = getUniqueId();
    //     botobj.conversation_title_txt_box().type("Automate"+uniqueId);
    //     botobj.coversation_save_btn().click()
    //     cy.wait(4000)
    //     botobj.conversation_title_btn().should('have.text',"Automate"+uniqueId)
    //     botobj.conversation_title_btn().click()
    //     cy.wait(2000)
    //     botobj.conversation_menu().click()
    //     cy.wait(2000)
    //     botobj.conversation_delete().click()
    //     cy.wait(2000)
    //     botobj.conversation_delete_yes().click()
    // })

    // it("Verify user is able to search the existing bot", function(){
        
    //     cy.visit("https://uat.botco.ai")
    //     login.username().type(this.test_data.valemail)
    //     login.password().type(this.test_data.valpassword)
    //     login.login_btn().click()
    //     cy.wait(2000)
    //     cy.url().should('eq', 'https://uat.botco.ai/conversations');
    //     cy.wait(3000)
    //     botobj.convesation_search_box().clear().type('AutomationBot1')
    //     cy.wait(1000)
    //     botobj.conversarion_title().should('have.text','AutomationBot1')

    // })

    // it("Verfiy user is able to create conversation and update the welcome message", function(){
        
    //     cy.visit("https://uat.botco.ai")
    //     login.username().type(this.test_data.valemail)
    //     login.password().type(this.test_data.valpassword)
    //     login.login_btn().click()
    //     cy.wait(2000)
    //     cy.url().should('eq', 'https://uat.botco.ai/conversations');
    //     cy.wait(3000)
    //     botobj.create_new_bot_btn().click()
    //     botobj.conversation_title().should('have.text', 'Create Conversation!')
    //     const uniqueId = getUniqueId();
    //     botobj.conversation_title_txt_box().type("Automate"+uniqueId);
    //     botobj.coversation_save_btn().click()
    //     cy.wait(4000)
    //     botobj.conversation_title_btn().should('have.text',"Automate"+uniqueId)
    //     cy.wait(1000)
    //     botobj.conversation_welcome_txt().clear().type('Hi I am bot automated by SHEIKH. Here in your service for the automation')
    //     cy.wait(1000)
    //     botobj.conversation_header_save_btn().click()
    //     cy.wait(1000)
    //     botobj.toaster_popup().should('have.text', 'Cards saved successfully')
    //     botobj.chatbot_btn().click()
    //     cy.wait(2000)
    //     botobj.conversation_menu().click()
    //     cy.wait(2000)
    //     botobj.conversation_delete().click()
    //     cy.wait(2000)
    //     botobj.conversation_delete_yes().click()

    // })

    //     it("Verify user is able to click More to open Add Cards popup", function(){
        
    //     cy.visit("https://uat.botco.ai")
    //     login.username().type(this.test_data.valemail)
    //     login.password().type(this.test_data.valpassword)
    //     login.login_btn().click()
    //     cy.wait(2000)
    //     cy.url().should('eq', 'https://uat.botco.ai/conversations');
    //     cy.wait(3000)
    //     botobj.convesation_search_box().clear().type('AutomationBot1')
    //     cy.wait(1000)
    //     botobj.conversarion_title().should('have.text','AutomationBot1')
    //     botobj.select_bot().click()
    //     cy.wait(1000)
    //     botobj.more_card().click()
    //     cy.wait(1000)
    //     cy.get('.jss242 > .MuiTypography-root').should('have.text','Add Cards')

    // })
    
    // it("Verify user is able to minimize Add Cards popup by clicking X icon", function(){
        
    //     cy.visit("https://uat.botco.ai")
    //     login.username().type(this.test_data.valemail)
    //     login.password().type(this.test_data.valpassword)
    //     login.login_btn().click()
    //     cy.wait(2000)
    //     cy.url().should('eq', 'https://uat.botco.ai/conversations');
    //     cy.wait(3000)
    //     botobj.convesation_search_box().clear().type('AutomationBot1')
    //     cy.wait(1000)
    //     botobj.conversarion_title().should('have.text','AutomationBot1')
    //     botobj.select_bot().click()
    //     cy.wait(1000)
    //     botobj.more_card().click()
    //     cy.wait(1000)
    //     botobj.add_cards_title().should('have.text','Add Cards')
    //     botobj.more_add_card_X().click()
    //     botobj.more_add_card_X().should('not.exist')

    // })

    // it("Verify user is able to Add and Delete Text Card", function(){
    //     cy.visit("https://uat.botco.ai")
    //     login.username().type(this.test_data.valemail)
    //     login.password().type(this.test_data.valpassword)
    //     login.login_btn().click()
    //     cy.wait(2000)
    //     cy.url().should('eq', 'https://uat.botco.ai/conversations');
    //     cy.wait(3000)
    //     botobj.convesation_search_box().clear().type('AutomationBot1')
    //     cy.wait(1000)
    //     botobj.conversarion_title().should('have.text','AutomationBot1')
    //     botobj.select_bot().click()
    //     cy.wait(3000)
    //     botobj.text_card().click()
    //     cy.wait(1000)
    //     botobj.text_area_card().should('exist')
    //     botobj.text_card_delete().click()
    //     cy.wait(1000)
    //     botobj.delete_popup().should('have.text','Are you sure?')
    //     cy.wait(1000)
    //     botobj.delete_yes().click()
    //     cy.wait(1000)
    //      botobj.text_area_card().should('not.exist')

    // })

    // it("Verify user is able to Add and Delete Quick Reply Card", function(){
    //     cy.visit("https://uat.botco.ai")
    //     login.username().type(this.test_data.valemail)
    //     login.password().type(this.test_data.valpassword)
    //     login.login_btn().click()
    //     cy.wait(2000)
    //     cy.url().should('eq', 'https://uat.botco.ai/conversations');
    //     cy.wait(3000)
    //     botobj.convesation_search_box().clear().type('AutomationBot1')
    //     cy.wait(1000)
    //     botobj.conversarion_title().should('have.text','AutomationBot1')
    //     botobj.select_bot().click()
    //     cy.wait(3000)
    //     botobj.quick_reply().click()
    //     cy.wait(1000)
    //     botobj.card_text_area().should('exist')
    //     botobj.card_three_dot_action().click()
    //     cy.wait(1000)
    //     botobj.card_delete().click()
    //     cy.wait(1000)
    //     botobj.delete_popup().should('have.text','Are you sure?')
    //     cy.wait(1000)
    //     botobj.delete_yes().click()
    //     cy.wait(1000)
    //     botobj.card_text_area().should('not.exist')
    // })

    // it("Verify user is able to Add and Delete Image Card", function(){
    //     cy.visit("https://uat.botco.ai")
    //     login.username().type(this.test_data.valemail)
    //     login.password().type(this.test_data.valpassword)
    //     login.login_btn().click()
    //     cy.wait(2000)
    //     cy.url().should('eq', 'https://uat.botco.ai/conversations');
    //     cy.wait(3000)
    //     botobj.convesation_search_box().clear().type('AutomationBot1')
    //     cy.wait(1000)
    //     botobj.conversarion_title().should('have.text','AutomationBot1')
    //     botobj.select_bot().click()
    //     cy.wait(3000)
    //     botobj.image_card().click()
    //     cy.wait(1000)
    //     botobj.image_card_txt().should('exist')
    //     cy.wait(1000)
    //     botobj.img_card_three_dot_action().click()
    //     cy.wait(1000)
    //     botobj.card_delete().click()
    //     cy.wait(1000)
    //     botobj.delete_popup().should('have.text','Are you sure?')
    //     cy.wait(1000)
    //     botobj.delete_yes().click()
    //     cy.wait(1000)
    //     botobj.image_card_txt().should('not.exist')
    // })

    // it("Verify upload Image pops up when user clicks Image Card", function(){
    //     cy.visit("https://uat.botco.ai")
    //     login.username().type(this.test_data.valemail)
    //     login.password().type(this.test_data.valpassword)
    //     login.login_btn().click()
    //     cy.wait(2000)
    //     cy.url().should('eq', 'https://uat.botco.ai/conversations');
    //     cy.wait(3000)
    //     botobj.convesation_search_box().clear().type('AutomationBot1')
    //     cy.wait(1000)
    //     botobj.conversarion_title().should('have.text','AutomationBot1')
    //     botobj.select_bot().click()
    //     cy.wait(3000)
    //     botobj.image_card().click()
    //     cy.wait(1000)
    //     botobj.upload_image_card().click()
    //     cy.wait(1000)
    //     botobj.img_modal_title().should('have.text','Upload Image')  
    // })

    // it("Verify upload Image pop up vanishes when user clicks Cancel button", function(){
    //     cy.visit("https://uat.botco.ai")
    //     login.username().type(this.test_data.valemail)
    //     login.password().type(this.test_data.valpassword)
    //     login.login_btn().click()
    //     cy.wait(2000)
    //     cy.url().should('eq', 'https://uat.botco.ai/conversations');
    //     cy.wait(3000)
    //     botobj.convesation_search_box().clear().type('AutomationBot1')
    //     cy.wait(1000)
    //     botobj.conversarion_title().should('have.text','AutomationBot1')
    //     botobj.select_bot().click()
    //     cy.wait(3000)
    //     botobj.image_card().click()
    //     cy.wait(1000)
    //     botobj.upload_image_card().click()
    //     cy.wait(1000)
    //     botobj.img_modal_title().should('have.text','Upload Image') 
    //     cy.wait(1000)
    //     botobj.upload_img_popup_cancel().click()
    //     botobj.img_modal_title().should('not.exist')
    // })

    //     it("Verify user is able to Add and Delete Video Card", function(){
    //     cy.visit("https://uat.botco.ai")
    //     login.username().type(this.test_data.valemail)
    //     login.password().type(this.test_data.valpassword)
    //     login.login_btn().click()  
    //     cy.wait(2000)
    //     cy.url().should('eq', 'https://uat.botco.ai/conversations');
    //     cy.wait(3000)
    //     botobj.convesation_search_box().clear().type('AutomationBot1')
    //     cy.wait(1000)
    //     botobj.conversarion_title().should('have.text','AutomationBot1')
    //     botobj.select_bot().click()
    //     cy.wait(3000)
    //     botobj.video_card().click()
    //     cy.wait(1000)
    //     botobj.image_card_txt().should('exist')
    //     cy.wait(1000)
    //     botobj.img_card_three_dot_action().click()
    //     cy.wait(1000)
    //     botobj.card_delete().click()
    //     cy.wait(1000)
    //     botobj.delete_popup().should('have.text','Are you sure?')
    //     cy.wait(1000)
    //     botobj.delete_yes().click()
    //     cy.wait(1000)
    //     botobj.image_card_txt().should('not.exist')
    // })

    //  it("Verify upload Video pops up when user clicks Video Card", function(){
    //     cy.visit("https://uat.botco.ai")
    //     login.username().type(this.test_data.valemail)
    //     login.password().type(this.test_data.valpassword)
    //     login.login_btn().click()  
    //     cy.wait(2000)
    //     cy.url().should('eq', 'https://uat.botco.ai/conversations');
    //     cy.wait(3000)
    //     botobj.convesation_search_box().clear().type('AutomationBot1')
    //     cy.wait(1000)
    //     botobj.conversarion_title().should('have.text','AutomationBot1')
    //     botobj.select_bot().click()
    //     cy.wait(3000)
    //     botobj.video_card().click()
    //     cy.wait(1000)
    //     botobj.image_card_txt().should('exist')
    //     cy.wait(1000)
    //     cy.get('.uploadImageText > span').click()
    //     cy.wait(1000)
    //     botobj.img_modal_title().should('have.text','Upload Video')

    // })

    // it("Verify Upload Video pop up vanishes when user clicks Cancel button", function(){
    //     cy.visit("https://uat.botco.ai")
    //     login.username().type(this.test_data.valemail)
    //     login.password().type(this.test_data.valpassword)
    //     login.login_btn().click()  
    //     cy.wait(2000)
    //     cy.url().should('eq', 'https://uat.botco.ai/conversations');
    //     cy.wait(3000)
    //     botobj.convesation_search_box().clear().type('AutomationBot1')
    //     cy.wait(1000)
    //     botobj.conversarion_title().should('have.text','AutomationBot1')
    //     botobj.select_bot().click()
    //     cy.wait(3000)
    //     botobj.video_card().click()
    //     cy.wait(1000)
    //     botobj.image_card_txt().should('exist')
    //     cy.wait(1000)
    //     cy.get('.uploadImageText > span').click()
    //     cy.wait(1000)
    //     botobj.img_modal_title().should('have.text','Upload Video')
    //     cy.wait(1000)
    //     botobj.upload_img_popup_cancel().click()
    //     cy.wait(1000)
    //     botobj.img_modal_title().should('not.exist')
    // })
    
//         it("Verify user is able to Add and Delete Carousel Card", function(){
//         cy.visit("https://uat.botco.ai")
//         login.username().type(this.test_data.valemail)
//         login.password().type(this.test_data.valpassword)
//         login.login_btn().click()  
//         cy.wait(2000)
//         cy.url().should('eq', 'https://uat.botco.ai/conversations');
//         cy.wait(3000)
//         botobj.convesation_search_box().clear().type('AutomationBot1')
//         cy.wait(1000)
//         botobj.conversarion_title().should('have.text','AutomationBot1')
//         botobj.select_bot().click()
//         cy.wait(3000)
//         botobj.carousel_card().click()
//         cy.wait(1000)
//         botobj.image_card_txt().should('exist')
//         cy.wait(1000)
//         botobj.img_card_three_dot_action().click()
//         cy.wait(1000)
//         botobj.card_delete().click()
//         cy.wait(1000)
//         botobj.delete_popup().should('have.text','Are you sure?')
//         cy.wait(1000)
//         botobj.delete_yes().click()
//         cy.wait(1000)
//         cy.wait(1000)
//         botobj.image_card_txt().should('not.exist')

//     })

//     it("Verify Carousel Card  has Heading, Sub-Heading and URL field", function(){
//         cy.visit("https://uat.botco.ai")
//         login.username().type(this.test_data.valemail)
//         login.password().type(this.test_data.valpassword)
//         login.login_btn().click()  
//         cy.wait(2000)
//         cy.url().should('eq', 'https://uat.botco.ai/conversations');
//         cy.wait(3000)
//         botobj.convesation_search_box().clear().type('AutomationBot1')
//         cy.wait(1000)
//         botobj.conversarion_title().should('have.text','AutomationBot1')
//         botobj.select_bot().click()
//         cy.wait(3000)
//         botobj.carousel_card().click()
//         cy.wait(1000)
//         botobj.image_card_txt().should('exist')
//         cy.wait(1000)
//         botobj.carousel_heading().should('have.attr','placeholder','Heading')
//         botobj.carousel_subheading().should('have.attr','placeholder','Sub-Heading ')
//         botobj.carousel_url().should('have.attr','placeholder','http://')
//         cy.wait(1000)
//         botobj.img_card_three_dot_action().click()
//         cy.wait(1000)
//         botobj.card_delete().click()
//         cy.wait(1000)
//         botobj.delete_popup().should('have.text','Are you sure?')
//         cy.wait(1000)
//         botobj.delete_yes().click()
//         cy.wait(1000)
//         botobj.image_card_txt().should('not.exist')
//    })
    
    // it("Verify user is able to add multiple Carousel Card by clicking + icon", function(){
    //     cy.visit("https://uat.botco.ai")
    //     login.username().type(this.test_data.valemail)
    //     login.password().type(this.test_data.valpassword)
    //     login.login_btn().click()  
    //     cy.wait(2000)
    //     cy.url().should('eq', 'https://uat.botco.ai/conversations');
    //     cy.wait(3000)
    //     botobj.convesation_search_box().clear().type('AutomationBot1')
    //     cy.wait(1000)
    //     botobj.conversarion_title().should('have.text','AutomationBot1')
    //     botobj.select_bot().click()
    //     cy.wait(3000)
    //     botobj.carousel_card().click()
    //     cy.wait(1000)
    //     botobj.image_card_txt().should('exist')
    //     cy.wait(1000)
    //     botobj.carousel_heading().should('have.attr','placeholder','Heading')
    //     botobj.carousel_subheading().should('have.attr','placeholder','Sub-Heading ')
    //     botobj.carousel_url().should('have.attr','placeholder','http://')
    //     cy.wait(1000)
    //     botobj.carousel_card_add_icon().click()
    //     cy.wait(1000)
    //     botobj.carousel_second_card().should('exist')
    //     botobj.img_card_three_dot_action().click()
    //     cy.wait(1000)
    //     botobj.card_delete().click()
    //     cy.wait(1000)
    //     botobj.delete_popup().should('have.text','Are you sure?')
    //     cy.wait(1000)
    //     botobj.delete_yes().click()
    //     cy.wait(1000)
    //     botobj.image_card_txt().should('not.exist') 
    // })

    // it("Verify user is able to slide carousel card", function(){
    //     cy.visit("https://uat.botco.ai")
    //     login.username().type(this.test_data.valemail)
    //     login.password().type(this.test_data.valpassword)
    //     login.login_btn().click()  
    //     cy.wait(2000)
    //     cy.url().should('eq', 'https://uat.botco.ai/conversations');
    //     cy.wait(3000)
    //     botobj.convesation_search_box().clear().type('AutomationBot1')
    //     cy.wait(1000)
    //     botobj.conversarion_title().should('have.text','AutomationBot1')
    //     botobj.select_bot().click()
    //     cy.wait(3000)
    //     botobj.carousel_card().click()
    //     cy.wait(1000)
    //     botobj.image_card_txt().should('exist')
    //     cy.wait(1000)
    //     botobj.carousel_heading().should('have.attr','placeholder','Heading')
    //     botobj.carousel_subheading().should('have.attr','placeholder','Sub-Heading ')
    //     botobj.carousel_url().should('have.attr','placeholder','http://')
    //     cy.wait(1000)
    //     botobj.carousel_card_add_icon().click()
    //     cy.wait(1000)
    //     botobj.carousel_second_card().should('exist')
    //     botobj.carousel_previsous_icon().click()
    //     cy.wait(1000)
    //     botobj.carousel_first_card().should('exist')
    //     botobj.carousel_next_icon().click()
    //     cy.wait(1000)
    //     botobj.carousel_second_card().should('exist')
    //     botobj.carousel_previsous_icon().should('exist')
    // })

    // it("Verify user is able to Convert conversation into skill", function(){
        
    //     cy.visit("https://uat.botco.ai")
    //     login.username().type(this.test_data.valemail)
    //     login.password().type(this.test_data.valpassword)
    //     login.login_btn().click()
    //     cy.wait(2000)
    //     cy.url().should('eq', 'https://uat.botco.ai/conversations');
    //     cy.wait(3000)
    //     botobj.create_new_bot_btn().click()
    //     botobj.conversation_title().should('have.text', 'Create Conversation!')
    //     const uniqueId = getUniqueId();
    //     botobj.conversation_title_txt_box().type("Automate"+uniqueId);
    //     botobj.coversation_save_btn().click()
    //     cy.wait(4000)
    //     botobj.conversation_title_btn().should('have.text',"Automate"+uniqueId)
    //     botobj.conversation_title_btn().click()
    //     cy.wait(2000)
    //     botobj.conversation_menu().click()
    //     cy.wait(2000)
    //     botobj.convert_skill().click()
    //     botobj.skill_screen().click()
    //     cy.wait(2000)
    //     botobj.convesation_search_box().clear().type("Automate"+uniqueId)
    //     cy.wait(1000)
    //     botobj.private_skill_bot_title().should('have.text',"Automate"+uniqueId)
    // })

    // it("Verify user is able to Convert conversation into skill and delete it", function(){
        
    //     cy.visit("https://uat.botco.ai")
    //     login.username().type(this.test_data.valemail)
    //     login.password().type(this.test_data.valpassword)
    //     login.login_btn().click()
    //     cy.wait(2000)
    //     cy.url().should('eq', 'https://uat.botco.ai/conversations');
    //     cy.wait(3000)
    //     botobj.create_new_bot_btn().click()
    //     botobj.conversation_title().should('have.text', 'Create Conversation!')
    //     const uniqueId = getUniqueId();
    //     botobj.conversation_title_txt_box().type("Automate"+uniqueId);
    //     botobj.coversation_save_btn().click()
    //     cy.wait(4000)
    //     botobj.conversation_title_btn().should('have.text',"Automate"+uniqueId)
    //     botobj.conversation_title_btn().click()
    //     cy.wait(2000)
    //     botobj.conversation_menu().click()
    //     cy.wait(2000)
    //     botobj.convert_skill().click()
    //     botobj.skill_screen().click()
    //     cy.wait(2000)
    //     botobj.convesation_search_box().clear().type("Automate"+uniqueId)
    //     cy.wait(1000)
    //     botobj.private_skill_bot_title().should('have.text',"Automate"+uniqueId)
    //     cy.wait(1000)
    //     botobj.skill_conversation_menu().click()
    //     cy.wait(2000)
    //     botobj.skill_conversation_delete().click()
    //     cy.wait(2000)
    //     botobj.conversation_delete_yes().click()
    //     cy.wait(2000)
    //     botobj.skill_screen().click()
    //     cy.wait(2000)
    //     botobj.convesation_search_box().clear().type("Automate"+uniqueId)
    //     cy.wait(1000)
    //     botobj.private_skill_bot_title().should('not.exist')
    // })

    //     it("Verify user is able to add button in TextCard and link it to URL and visible in preview section", function(){
        
    //     cy.visit("https://uat.botco.ai")
    //     login.username().type(this.test_data.valemail)
    //     login.password().type(this.test_data.valpassword)
    //     login.login_btn().click()
    //     cy.wait(2000)
    //     cy.url().should('eq', 'https://uat.botco.ai/conversations');
    //     cy.wait(3000)
    //     botobj.create_new_bot_btn().click()
    //     botobj.conversation_title().should('have.text', 'Create Conversation!')
    //     const uniqueId = getUniqueId();
    //     botobj.conversation_title_txt_box().type("Automate"+uniqueId);
    //     botobj.coversation_save_btn().click()
    //     cy.wait(4000)
    //     botobj.conversation_title_btn().should('have.text',"Automate"+uniqueId)
    //     botobj.text_card_add_btn().click()
    //     botobj.text_card_btn_name().type("URL")
    //     botobj.text_card_linkto_dropdown().select('1')
    //     botobj.text_card_url().type('https://uat.botco.ai/')
    //     botobj.text_on_card_add_btn().click()
    //     cy.wait(2000)
    //     botobj.peview_btn().click()
    //     botobj.url_link().should('have.attr','href')

    // })

    // it("Verify user is able to add button in TextCard and link it to Phone and visible in preview section", function(){
        
    //     cy.visit("https://uat.botco.ai")
    //     login.username().type(this.test_data.valemail)
    //     login.password().type(this.test_data.valpassword)
    //     login.login_btn().click()
    //     cy.wait(2000)
    //     cy.url().should('eq', 'https://uat.botco.ai/conversations');
    //     cy.wait(3000)
    //     botobj.create_new_bot_btn().click()
    //     botobj.conversation_title().should('have.text', 'Create Conversation!')
    //     const uniqueId = getUniqueId();
    //     botobj.conversation_title_txt_box().type("Automate"+uniqueId);
    //     botobj.coversation_save_btn().click()
    //     cy.wait(4000)
    //     botobj.conversation_title_btn().should('have.text',"Automate"+uniqueId)
    //     botobj.text_card_add_btn().click()
    //     botobj.text_card_btn_name().type("Phone")
    //     botobj.text_card_linkto_dropdown().select('5')
    //     botobj.text_card_url().type('+1313314991')
    //     botobj.text_on_card_add_btn().click()
    //     cy.wait(2000)
    //     botobj.peview_btn().click()
    //     botobj.phone_link().should('have.text','Phone')

    // })

        it("Verify user is not ble to Add more than 10 Carousel Card", function(){
        cy.visit("https://uat.botco.ai")
        login.username().type(this.test_data.valemail)
        login.password().type(this.test_data.valpassword)
        login.login_btn().click()  
        cy.wait(2000)
        cy.url().should('eq', 'https://uat.botco.ai/conversations');
        cy.wait(3000)
        botobj.convesation_search_box().clear().type('AutomationBot1')
        cy.wait(1000)
        botobj.conversarion_title().should('have.text','AutomationBot1')
        botobj.select_bot().click()
        cy.wait(3000)
        botobj.carousel_card().click()
        var i;
 
        for (i = 0; i < 10; i++)
        {
            botobj.carousel_card_add_icon().click()
        }
        cy.wait(1000)
        cy.get('[data-testid="carousel-card-plus-icon"]').should('not.exist')

    })





    //end
})
