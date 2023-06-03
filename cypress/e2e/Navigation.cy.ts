describe("Navigation", () => {
  describe("Static pages", () => {
    it("should navigate to the about page", () => {
      // Start from the index page
      cy.visit("/");
      cy.findByRole("heading", {
        name: "You dream it",
      });

      // Navigate to /custom-request
      cy.findByRole("link", { name: "Custom Request" }).click();
      cy.url().should("include", "/custom-request");
      cy.findAllByText("White-Glove VIP Service", { exact: false }).should(
        "have.length",
        2
      );
    });

    it("should take screenshot of the homepage", () => {
      cy.visit("/");
      cy.findByRole("heading", {
        name: "You dream it",
      });
      cy.percySnapshot("Homepage");
    });
  });
});
