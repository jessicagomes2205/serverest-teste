/// <reference types="cypress" />
import dados from '../../fixtures/usuarios-api.json';
const urlBase = 'https://serverest.dev/';

describe('API - Produtos', () => {
  beforeEach(() => {
    cy.token(dados.email, dados.password).as('token');
  });

  it('Deverá listar produtos com sucesso', () => {
    cy.request({
      method: 'GET',
      url: urlBase + 'produtos',
    }).then((response) => {
      expect(response.status).to.equal(200);
      // expect(response.duration).to.be.lessThan(301);
      expect(response.body).to.have.property('produtos');
      expect(response.body).to.have.property('quantidade');
    });
  });

  it('Deverá cadastrar produto com sucesso', function () {
    var produto = `Produto de Teste ${Date.now()}`;
    cy.request({
      method: 'POST',
      url: urlBase + 'produtos',
      body: {
        nome: produto,
        preco: 54732,
        descricao: 'Produto de Teste',
        quantidade: 381,
      },
      headers: {
        authorization: this.token,
      },
    }).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body.message).to.equal('Cadastro realizado com sucesso');
    });
  });

  it('Deverá alterar dados do produto com sucesso', function () {
    var produtoAlterado = `Produto teste ${Date.now()}`;
    cy.cadastrarProduto(this.token).then((response) => {
      cy.log(response.body._id);
      var id = response.body._id;
      cy.request({
        method: 'PUT',
        url: urlBase + 'produtos/' + id,
        body: {
          nome: produtoAlterado,
          preco: 100,
          descricao: 'Nova Descrição',
          quantidade: 100,
        },
        headers: {
          authorization: this.token,
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.message).to.equal('Registro alterado com sucesso');
      });
    });
  });

  it('Deverá excluir produto com sucesso', function () {
    cy.cadastrarProduto(this.token).then((response) => {
      cy.log(response.body._id);
      var id = response.body._id;
      cy.request({
        method: 'DELETE',
        url: urlBase + 'produtos/' + id,
        headers: {
          authorization: this.token,
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.message).to.equal('Registro excluído com sucesso');
      });
    });
  });
});
