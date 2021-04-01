describe("Test for Signature's titles", () => {
  it("should visit Signature's home page", () => {
    cy.visit("https://www.fiducial.fr/Notariat/Signature");
  });

  it("should have title", () => {
    cy.contains(`Logiciel de rédaction d'actes pour Notaire`).should(
      "to.have.length",
      1
    );
  });

  it("should change to users page", () => {
    cy.contains(`Témoignages clients`).click();
  });

  it("should found video title", () => {
    cy.contains("Témoignage de Maître Christophe RAYMOND").should(
      "to.have.length",
      1
    );
  });
});
