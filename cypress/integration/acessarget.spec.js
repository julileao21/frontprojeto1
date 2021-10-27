/// <reference types='cypress' />


describe('pagina santander', () => {
    it ('deve acessar menu ajuda e acompanhar a entrega da minha superget', () => {
      
        cy.visit('site.getnet.com.br')
        cy.get('#u-depth1__item-15214').invoke('show').click();
        cy.get('#u-depth3__item-15218 > a').should('be.visible')
        cy.get('#u-depth3__item-15218 > a').click();
        cy.wait(1000)
        cy.get(':nth-child(2) > .row > :nth-child(1) > .c-all-faq__content > .c-all-faq__see-more').click();
        cy.wait(1000)
        cy.get('.c-more-answers__content > [data-modal="6367"]').click();
        cy.wait(1000)
        cy.get('.is-modal-open > .o-modal__content > .o-modal__close').click();
    })
});




        


