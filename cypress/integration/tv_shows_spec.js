describe('TV Show Game', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('.input_input__SUO-5').type('user1');
    cy.get('.select_select__2eNun').select('TV Shows')
    cy.get('.text_button-primary__1bhgI').contains('Load Game').click();
  })

  it('should TV Show game game with the proper name', () =>{
    cy.get('p.text_header__1XvnO').should('have.text', 'Welcome to WordGame user1!');
    cy.get('p.text_standard__1U0DF').should('have.text', 'You\'ve currently chosen the TV Shows category.You have missed 0 guess(es), \n\t\t\t\t\t\t\t\t\tyou have 6 attempt(s) left.');
  })

  it('Win Message Displayed', () =>{
    cy.keyboardClick('F');
    cy.keyboardClick('R');
    cy.keyboardClick('I');
    cy.keyboardClick('E');
    cy.keyboardClick('N');
    cy.keyboardClick('D');
    cy.keyboardClick('S');
    cy.get('p.text_header__1XvnO').should('have.text', 'Welcome to WordGame user1!Congratulations you just won');
  })

  xit('Lose game', () =>{
    cy.keyboardClick('Z');
    cy.keyboardClick('Y');
    cy.keyboardClick('X');
    cy.keyboardClick('W');
    cy.keyboardClick('V');
    cy.keyboardClick('U');
    cy.keyboardClick('S');
    // TODO:
    // verify all letters disabled
    // verify correct answer displayed
  })

  context('Attempt Calculations', () => {
    it('Select 1 correct letters', () => {
      let charSelection = 'F';
      cy.keyboardClick(charSelection);
      cy.get('.wordgame_word__2FQuy').should('have.text', charSelection);
      cy.get('p.text_standard__1U0DF').should('have.text', 'You\'ve currently chosen the TV Shows category.You have missed 0 guess(es), \n\t\t\t\t\t\t\t\t\tyou have 6 attempt(s) left.');
    })

    it('Select all correct letters', () => {
      cy.keyboardClick('F');
      cy.keyboardClick('R');
      cy.keyboardClick('I');
      cy.keyboardClick('E');
      cy.keyboardClick('N');
      cy.keyboardClick('D');
      cy.keyboardClick('S');
      cy.get('.wordgame_word__2FQuy').should('have.text', 'FRIENDS');
      cy.get('p.text_standard__1U0DF').should('have.text', 'You\'ve currently chosen the TV Shows category.You have missed 0 guess(es), \n\t\t\t\t\t\t\t\t\tyou have 6 attempt(s) left.');
    })

    it('Select 1 incorrect letter', () =>{
      let charSelection = 'Z'
      cy.keyboardClick(charSelection);
      cy.get('p.text_standard__1U0DF').should('have.text', 'You\'ve currently chosen the TV Shows category.You have missed 1 guess(es), \n\t\t\t\t\t\t\t\t\tyou have 5 attempt(s) left.');
    })

    it('Select 1 incorrect letter 1 correct letter', () =>{
      cy.keyboardClick('Z');
      cy.keyboardClick('D');
      cy.get('p.text_standard__1U0DF').should('have.text', 'You\'ve currently chosen the TV Shows category.You have missed 1 guess(es), \n\t\t\t\t\t\t\t\t\tyou have 5 attempt(s) left.');
    })

    it('Select 6 incorrect letters 1 correct letter', () =>{
      cy.keyboardClick('Z');
      cy.keyboardClick('O');
      cy.keyboardClick('U');
      cy.keyboardClick('Q');
      cy.keyboardClick('G');
      cy.keyboardClick('H');
      cy.keyboardClick('E');
      cy.get('p.text_standard__1U0DF').should('have.text', 'You\'ve currently chosen the TV Shows category.You have missed 6 guess(es), \n\t\t\t\t\t\t\t\t\tyou have 0 attempt(s) left.');
    })

  })

  context('Alpha Selection', () =>{
    it('Clicking keyboard disables key when correct letter', () => {
      let charSelection = 'F'
      cy.keyboardClick(charSelection);
      cy.get('button').contains('button', charSelection).should('be.disabled')
    })

    it('Clicking keyboard disables key when incorrect letter', () => {
      let charSelection = 'A'
      cy.keyboardClick(charSelection);
      cy.get('button').contains('button', charSelection).should('be.disabled')
    })

    it('Click incorrect letter twice', () => {
      let charSelection = 'A'
      cy.keyboardClick(charSelection);
      cy.keyboardClick(charSelection);
      cy.get('p.text_standard__1U0DF').should('have.text', 'You\'ve currently chosen the TV Shows category.You have missed 1 guess(es), \n\t\t\t\t\t\t\t\t\tyou have 5 attempt(s) left.');
    })

    it('Click correct letter twice', () => {
      let charSelection = 'E'
      cy.keyboardClick(charSelection);
      cy.keyboardClick(charSelection);
      cy.get('p.text_standard__1U0DF').should('have.text', 'You\'ve currently chosen the TV Shows category.You have missed 0 guess(es), \n\t\t\t\t\t\t\t\t\tyou have 6 attempt(s) left.');
    })
  })
})