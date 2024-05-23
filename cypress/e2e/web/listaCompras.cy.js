/// <reference types="cypress" />

describe('Funcionalidade: Lista de Compras', () => {
  // beforeEach(() => {
  //    cy.visit('login');
  //    cy.get('[data-testid="email"]').clear().type('jessica14@gmail.com');
  //    cy.get('[data-testid="senha"]').clear().type('123456');
  //    cy.get('[data-testid="entrar"]').click();
  //  });

  beforeEach(() => {
    cy.login('Harry_Turcotte@gmail.com', '123456');
  });

  it('Deverá validar entrada na Lista de Compras e adicionar Produto no carrinho', () => {
    cy.get('h1').should('contain', 'Serverest Store');
    cy.get(
      ':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]'
    ).click();
    cy.visit('minhaListaDeProdutos');
    cy.get('h1').should('contain', 'Lista de Compras');
    cy.get('[data-testid="adicionar carrinho"]').click();
  });

  it('Deverá limpar a Lista de Compras', () => {
    cy.get('h1').should('contain', 'Serverest Store');
    cy.get(
      ':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]'
    ).click();
    cy.visit('minhaListaDeProdutos');
    cy.get('h1').should('contain', 'Lista de Compras');
    cy.get('[data-testid="lista-de-compras"]').click();
    cy.get('[data-testid="limparLista"]').click();
  });
});
