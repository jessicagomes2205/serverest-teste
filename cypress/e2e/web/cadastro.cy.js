/// <reference types="cypress" />

describe('Funcionalidade: Cadastro', () => {
  beforeEach(() => {
    cy.visit('cadastrarusuarios');
  });

  it('Deve fazer o cadastro com sucesso', () => {
    cy.get('[data-testid="nome"]').clear().type('jessica gomes');
    cy.get('[data-testid="email"]').clear().type('jessica1234@gmail.com');
    cy.get('[data-testid="password"]').clear().type('123456');
    cy.get('[data-testid="checkbox"]').check();
    cy.get('[data-testid="cadastrar"]').click();
    cy.get('.alert').should('contain', 'Cadastro realizado com sucesso');
    cy.get('h1').should('contain', 'Bem Vindo');
  });
});
