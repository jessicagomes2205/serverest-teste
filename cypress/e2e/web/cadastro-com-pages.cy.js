/// <reference types="cypress" />
import CadastroPage from '../../support/pages/cadastro.page';

describe('Funcionalidade: Cadastro - usando Pages Object', () => {
  beforeEach(() => {
    CadastroPage.visitarUrl();
  });

  it('Deverá fazer o cadastro de Usuário Admin com sucesso', () => {
    var email = `jessica${Date.now()}@teste.com`;
    CadastroPage.CadastroUsuarioAdmin('Jéssica Gomes', email, 'teste123');
    cy.get('.alert').should('contain', 'Cadastro realizado com sucesso');
    cy.get('h1').should('contain', 'Bem Vindo');
  });

  it('Deverá fazer o cadastro de Usuário Comum com sucesso', () => {
    var email = `jessica${Date.now()}@teste.com`;
    CadastroPage.CadastroUsuarioComum('Jéssica Gomes', email, 'teste123');
    cy.get('.alert').should('contain', 'Cadastro realizado com sucesso');
    cy.get('h1').should('contain', 'Serverest Store');
  });
});
