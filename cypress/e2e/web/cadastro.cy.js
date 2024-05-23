/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import dadosUsuarios from '../../fixtures/usuarios.json';

describe('Funcionalidade: Cadastro', () => {
  beforeEach(() => {
    cy.visit('cadastrarusuarios');
  });

  it.skip('Deverá fazer o cadastro de Usuário Admin com sucesso, usando Date Now', () => {
    var email = 'jessica' + Date.now() + '@gmail.com';
    cy.get('[data-testid="nome"]').clear().type('jessica gomes');
    cy.get('[data-testid="email"]').clear().type(email);
    cy.get('[data-testid="password"]').clear().type('123456');
    cy.get('[data-testid="checkbox"]').check();
    cy.get('[data-testid="cadastrar"]').click();
    cy.get('.alert').should('contain', 'Cadastro realizado com sucesso');
    cy.get('h1').should('contain', 'Bem Vindo');
  });

  it.skip('Deverá validar mensagem de campo (Nome) obrigatório', () => {
    var email = 'jessica' + Date.now() + '@gmail.com';
    cy.get('[data-testid="nome"]').clear();
    cy.get('[data-testid="email"]').clear().type(email);
    cy.get('[data-testid="password"]').clear().type('123456');
    cy.get('[data-testid="checkbox"]').check();
    cy.get('[data-testid="cadastrar"]').click();
    cy.get('.alert').should('contain', 'Nome é obrigatório');
  });

  it.skip('Deverá fazer o cadastro de Usuário Comum com sucesso, usando Faker', () => {
    cy.get('[data-testid="nome"]').clear().type(faker.person.fullName());
    cy.get('[data-testid="email"]').clear().type(faker.internet.email());
    cy.get('[data-testid="password"]').clear().type('123456');
    cy.get('[data-testid="cadastrar"]').click();
    cy.get('.alert').should('contain', 'Cadastro realizado com sucesso');
    cy.get('h1').should('contain', 'Serverest Store');
  });

  it.skip('Deverá fazer o cadastro de Usuário Comum com sucesso, usando comando customizado', () => {
    cy.cadastroUsuarioComum('Jessica Teste', faker.internet.email(), '123456');
    cy.get('.alert').should('contain', 'Cadastro realizado com sucesso');
    cy.get('h1').should('contain', 'Serverest Store');
  });

  it.skip('Deverá fazer o cadastro de Usuário Admin com sucesso, usando comando customizado', () => {
    cy.cadastroUsuarioAdmin('Jessica Teste', faker.internet.email(), '123456');
    cy.get('.alert').should('contain', 'Cadastro realizado com sucesso');
    cy.get('h1').should('contain', 'Bem Vindo');
  });

  it('Deverá fazer o cadastro de Usuário Comum com sucesso, usando importação de dados', () => {
    cy.cadastroUsuarioComum(
      dadosUsuarios[0].nome,
      dadosUsuarios[0].email,
      dadosUsuarios[0].password
    );
    cy.get('.alert').should('contain', 'Cadastro realizado com sucesso');
    cy.get('h1').should('contain', 'Serverest Store');
  });
});
