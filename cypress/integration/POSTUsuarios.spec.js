
describe('Given the Users api', () => {
  context('When I send POST /usuarios', () => {
    it('Then it should create a new user', () => {
      cy.request({
        method: 'POST',
        url: '/usuarios',
        body: {
            nome: "john doe1",
            email: "dumb.jof@qa.com.br",
            password: "test",
            administrador: "true"
          }
      })
        .should((response) => {
          expect(response.status).eq(201)
          expect(response.body.message).eq("Cadastro realizado com sucesso")
        });
    });
  });
});