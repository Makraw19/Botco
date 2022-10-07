export class bot{
    create_new_bot_btn(){
        return cy.get('.create-btn')
    }
    conversation_title()
    {
        return cy.get('.title')
    }
    conversation_popup_cancel_btn()
    {
        return cy.get('.botco-outline-button')
    }
    conversation_title_txt_box()
    {
        return cy.get('.form_inputs')
    }
    coversation_save_btn()
    {
        return cy.get('.botco-red-outline-button')
    }
    conversation_title_btn()
    {
        return cy.get('#selected-chatbot-button')
    }
    toaster_popup()
    {
        return cy.get('.Toastify__toast-body')
    }
    conversation_menu()
    {
        return cy.xpath('(//*[@class="MuiSvgIcon-root"])[3]')
    }
    skill_conversation_menu()
    {
        return cy.xpath('(//*[@class="MuiSvgIcon-root"])[2]')
    }
    conversation_delete()
    {
        return cy.xpath('(//*[@role="menuitem"])[3]')
    }
    skill_conversation_delete()
    {
        return cy.xpath('(//*[@role="menuitem"])[2]')
    }
    convert_skill()
    {
        return cy.xpath('(//*[@role="menuitem"])[2]')
    }
    conversation_delete_yes()
    {
        return cy.get('[data-testid="confirm-dialog-button-yes"]')
    }
    convesation_search_box()
    {
        return cy.get('[data-testid="chatbot-list-search-input"]')
    }
    conversarion_title()
    {
        return cy.get('.jss51')
    }
    conversation_welcome_txt()
    {
        return cy.xpath('//*[@name="param1"]')
    }
    conversation_header_save_btn()
    {
        return cy.get('#conversation-header-save-button')
    }
    chatbot_btn()
    {
        return cy.get('#selected-chatbot-button')
    }
    select_bot()
    {
        return cy.get('.jss49')
    }
    more_card()
    {
        return cy.get('[data-testid="cardholder-more-card"]')
    }
    add_cards_title()
    {
        return cy.xpath('//*[@class="MuiTypography-root MuiTypography-h3"]')
    }
    more_add_card_X()
    {
        return cy.get('.jss233 > .MuiSvgIcon-root')
    }
    text_card()
    {
        return cy.get('[data-testid="cardholder-text-card"]')
    }
    text_card_delete()
    {
        return cy.xpath('(//*[@class="MuiIconButton-label"])[3]')
    }
    quick_reply()
    {
        return cy.get('[data-testid="cardholder-quick-reply-card"]')
    }
    card_text_area()
    {
        return cy.get('[data-testid="quick-reply-textarea"]')
    }
    text_area_card()
    {
        return cy.xpath('(//*[@name="param1"])[2]')
    }
    card_three_dot_action()
    {
        return cy.get('.svg-inline--fa')
    }
    card_delete()
    {
        return cy.get('[data-testid="menu-item"]')
    }
    delete_popup()
    {
        return cy.get('.MuiPaper-root > .MuiDialogTitle-root')
    }
    delete_yes()
    {
        return cy.get('[data-testid="confirm-dialog-button-yes"]')
    }
    image_card()
    {
        return cy.get('[data-testid="cardholder-image-card"]')
    }
    image_card_txt()
    {
        return cy.get('.uploadImageText')
    }
    img_card_three_dot_action()
    {
        return cy.xpath('(//*[@class="MuiIconButton-label"])[3]')
    }
    img_modal_title()
    {
        return cy.get('.modalTitle')
    }
    upload_image_card()
    {
        return cy.xpath('//*[@class="col-md-12 uploadImageText"]')
    }
    upload_img_popup_cancel()
    {
        return cy.xpath('//*[@class="botco-outline-button"]')
    }
    video_card()
    {
        return cy.get('[data-testid="cardholder-video-card"]')
    }
    carousel_card()
    {
        return cy.get('[data-testid="cardholder-carousel-card"]')
    }
    carousel_heading()
    {
        return cy.get('#heading')
    }
    carousel_subheading()
    {
        return cy.get('#subheading')
    }
    carousel_url()
    {
        return cy.get('#url')
    }
    carousel_card_add_icon()
    {
        return cy.get('[data-testid="carousel-card-plus-icon"]')
    }
    carousel_second_card()
    {
        return cy.xpath('(//*[@class="column-slide"])[2]')
    }
    carousel_first_card()
    {
        return cy.xpath('(//*[@class="column-slide"])[1]')
    }
    carousel_previsous_icon()
    {
        return cy.get('[data-testid="carousel-card-previous-icon"]')
    }
    carousel_next_icon()
    {
        return cy.get('[data-testid="carousel-card-next-icon"]')
    }
    skill_screen()
    {
        return cy.get('.templatesNav')
    }
    private_skill_bot_title()
    {
        return cy.xpath('/html/body/div[9]/div[3]/div/div/div[4]/div/div/div[2]/span[1]')
    }
    text_card_add_btn()
    {
        return cy.get('#text-card-add-button')
    }
    text_card_btn_name()
    {
        return cy.get('#btn_name')
    }
    text_card_dropdown()
    {
        return cy.get('[data-testid="block"]')
    }
    text_card_linkto_dropdown()
    {
        return cy.get('select.form-control')
    }
    text_card_url()
    {
        return cy.get('[name="action_data"]')
    }
    text_on_card_add_btn()
    {
        return cy.xpath('//*[@class="botco-red-outline-button"]')
    }
    peview_btn()
    {
        return cy.xpath('(//*[@class="MuiTab-wrapper"])[2]')
    }
    preview_link()
    {
        return cy.xpath('//*[@class="MuiButton-label"]')
    }
    url_link()
    {
        return cy.xpath('//*[@href="https://uat.botco.ai/"]')
    }
    phone_link()
    {
        return cy.xpath('//*[@class="MuiButton-label"]')
    }

}

export default bot