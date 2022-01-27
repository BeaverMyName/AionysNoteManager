describe('App E2E', () => {
    it('should enter to the site', () => {
        cy.visit('/');
    });

    it('should add a note', () => {
        cy.get('.note-card').should('have.length', 5);
        cy.get('.add-note-button').click();
        cy.get('.note-card').should('have.length', 6);
    });

    it('should delete a note', () => {
        cy.get('.note-card').should('have.length', 6);
        cy.get('.delete-note-button').first().click();
        cy.get('.note-card').should('have.length', 5);
    });

    it('should save title', () => {
        cy.get('.edit-or-save-note-button').first().click();
        cy.get('.note-card input').first().clear();
        cy.get('.note-card input').first().type('Something interesting');
        cy.get('.edit-or-save-note-button').first().click();
        cy.reload();
        cy.get('.note-card input').first().should('have.value', 'Something interesting');
    });

    it('should save title', () => {
        cy.get('.edit-or-save-note-button').first().click();
        cy.get('.note-text').first().clear();
        cy.get('.note-text').first().type('Something interesting');
        cy.get('.edit-or-save-note-button').first().click();
        cy.reload();
        cy.get('.note-text').first().should('have.value', 'Something interesting');
    });

    it('should toggle language', () => {
        cy.get('.delete-note-button').first().contains('Delete');
        cy.get('.language-toggle-button').click();
        cy.get('.delete-note-button').first().contains('Удалить');
    })
})