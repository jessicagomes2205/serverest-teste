/// <reference types="cypress" />

describe('Funcionalidade: Login', () => {
  //  before(() => {});

  beforeEach(() => {
    cy.visit('login');
  });

  // after(() => {});

  afterEach(() => {
    cy.screenshot();
  });

  it('Deve fazer login com sucesso', () => {
    cy.get('[data-testid="email"]').clear().type('jessica@gmail.com');
    cy.get('[data-testid="senha"]').clear().type('123456');
    cy.get('[data-testid="entrar"]').click();
    cy.get('h1').should('contain', 'Bem Vindo');
  });

  it('Deve validar mensagem de usuário inválido', () => {
    cy.get('[data-testid="email"]').clear().type('jessica1234@gmail.com');
    cy.get('[data-testid="senha"]').clear().type('123456');
    cy.get('[data-testid="entrar"]').click();
    cy.get('.alert').should('contain', 'Email e/ou senha inválidos');
  });

  it('Deve validar mensagem de senha inválida', () => {
    cy.get('[data-testid="email"]').clear().type('jessica@gmail.com');
    cy.get('[data-testid="senha"]').clear().type('123456789');
    cy.get('[data-testid="entrar"]').click();
    cy.get('.alert').should('contain', 'Email e/ou senha inválidos');
  });
});
