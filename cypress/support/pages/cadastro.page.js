class CadastroPage {
  visitarUrl() {
    cy.visit('cadastrarusuarios');
  }

  campoNome(nome) {
    cy.get('[data-testid="nome"]').clear().type('jessica gomes');
  }

  campoEmail(email) {
    cy.get('[data-testid="email"]').clear().type(email);
  }

  campoPassword(password) {
    cy.get('[data-testid="password"]').clear().type('123456');
  }

  checkAdmin() {
    cy.get('[data-testid="checkbox"]').check();
  }

  btnCadastrar() {
    cy.get('[data-testid="cadastrar"]').click();
  }

  CadastroUsuarioAdmin(nome, email, password) {
    this.campoNome(nome);
    this.campoEmail(email);
    this.campoPassword(password);
    this.checkAdmin();
    this.btnCadastrar();
  }

  CadastroUsuarioComum(nome, email, password) {
    this.campoNome(nome);
    this.campoEmail(email);
    this.campoPassword(password);
    this.btnCadastrar();
  }
}
export default new CadastroPage();
