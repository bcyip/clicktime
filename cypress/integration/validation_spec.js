describe('TV Show Game', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('cannot load game if only username set', () => {
    cy.get('.input_input__SUO-5').type('user1');
    cy.get('button').contains('button', 'Load Game').should('be.disabled')
  })

  it('cannot load game if only category selected', () => {
    cy.get('.select_select__2eNun').select('TV Shows')
    cy.get('button').contains('button', 'Load Game').should('be.disabled')
  })
})
