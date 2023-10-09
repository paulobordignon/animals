describe("Navigation", () => {
  it("should navigate to the blank search page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // Click on search button
    cy.get('[data-cy="search-button"]').click();

    // The new url should include "/search"
    cy.url().should("include", "/search");

    // The new page should contain the text "try looking for"
    cy.get('[data-cy="try-looking-text"]').contains("Try looking for:");
  });

  it("should return no results", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // Input an invalid animal name
    cy.get('[data-cy="search-input"]').type("Testing a invalid animal");

    // Click on search button
    cy.get('[data-cy="search-button"]').click();

    // The new url should include "/search"
    cy.url().should("include", "/search");

    // The new page should contain the text "no results found" and "try looking for"
    cy.get('[data-cy="try-looking-text"]').contains("Try looking for:");
    cy.get('[data-cy="no-results-text"]').contains("No results found");
  });

  it("should return valid results", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // Input a valid animal name
    cy.get('[data-cy="search-input"]').type("dog");

    // Click on search button
    cy.get('[data-cy="search-button"]').click();

    // The new url should include "/search/dog"
    cy.url().should("include", "/search/dog");

    // The search page should list the results
    cy.get('[data-cy="result-card"]').should("exist");
    cy.get('[data-cy="try-looking-text"]').should("not.exist");
    cy.get('[data-cy="no-results-text"]').should("not.exist");
  });
});
