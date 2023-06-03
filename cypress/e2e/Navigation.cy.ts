describe("Navigation", () => {
  describe("Static pages", () => {
    it("should navigate to the about page", () => {
      // Start from the index page
      cy.visit("/");

      // Navigate to /custom-request
      cy.findByRole("link", { name: "Custom Request" }).click();
      cy.url().should("include", "/custom-request");
      cy.findAllByText("White-Glove VIP service", { exact: false }).should(
        "have.length",
        3
      );
    });

    it("should take screenshot of the homepage", () => {
      cy.visit("/");
      cy.findByRole("link", { name: "Custom Request" });
      cy.percySnapshot("Homepage");
    });
  });
});
