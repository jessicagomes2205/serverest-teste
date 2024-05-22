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

  it.skip('Deve fazer login com sucesso', () => {
    cy.get('[data-testid="email"]').clear().type('jessica14@gmail.com');
    cy.get('[data-testid="password"]').clear().type('123456');
    cy.get('[data-testid="entrar"]').click();
    cy.get('h1').should('contain', 'Bem Vindo');
  });

  it.skip('Deve validar mensagem de usuário inválido', () => {
    cy.get('[data-testid="email"]').clear().type('jessica1234@gmail.com');
    cy.get('[data-testid="password"]').clear().type('123456');
    cy.get('[data-testid="entrar"]').click();
    cy.get('.alert').should('contain', 'Email e/ou senha inválidos');
  });

  it.skip('Deve validar mensagem de senha inválida', () => {
    cy.get('[data-testid="email"]').clear().type('jessica@gmail.com');
    cy.get('[data-testid="password"]').clear().type('123456789');
    cy.get('[data-testid="entrar"]').click();
    cy.get('.alert').should('contain', 'Email e/ou senha inválidos');
  });

  it('Deve fazer login com sucesso usando fixture', () => {
    cy.fixture('login').then((dadosLogin) => {
      cy.login(dadosLogin.email, dadosLogin.password);
    });
  });
});
