Cypress.Commands.add('login', (email, password) => {
  cy.visit('login');
  cy.get('[data-testid="email"]').clear().type(email);
  cy.get('[data-testid="senha"]').clear().type(password);
  cy.get('[data-testid="entrar"]').click();
});

Cypress.Commands.add('cadastroUsuarioAdmin', (nome, email, password) => {
  cy.visit('cadastrarusuarios');
  cy.get('[data-testid="nome"]').clear().type(nome);
  cy.get('[data-testid="email"]').clear().type(email);
  cy.get('[data-testid="password"]').clear().type(password);
  cy.get('[data-testid="checkbox"]').check();
  cy.get('[data-testid="cadastrar"]').click();
});

Cypress.Commands.add('cadastroUsuarioComum', (nome, email, password) => {
  cy.visit('cadastrarusuarios');
  cy.get('[data-testid="nome"]').clear().type(nome);
  cy.get('[data-testid="email"]').clear().type(email);
  cy.get('[data-testid="password"]').clear().type(password);
  cy.get('[data-testid="cadastrar"]').click();
});

Cypress.Commands.add('token', (email, password) => {
  cy.request({
    method: 'POST',
    url: 'https://serverest.dev/login',
    body: {
      email: email,
      password: password,
    },
  }).then((response) => {
    expect(response.status).equal(200);
    return response.body.authorization;
  });
});

Cypress.Commands.add('cadastrarProduto', (tkn) => {
  var produto = `Produto de Teste ${Date.now()}`;
  cy.request({
    method: 'POST',
    url: 'https://serverest.dev/produtos',
    body: {
      nome: produto,
      preco: 2514,
      descricao: 'Produto de Teste',
      quantidade: 50,
    },
    headers: {
      authorization: tkn,
    },
  });
});
