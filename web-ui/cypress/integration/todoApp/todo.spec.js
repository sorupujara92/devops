//signup
var value="";
beforeEach(() => {
    localStorage.setItem("accessToken", value);
    console.log("value: ", value);
  });
describe('signup page link should be visible in the login page',() => {
    it('signup link should be present in login page',() =>{
        cy.wait(5000)
        cy.visit('http://localhost:3000/login') ;
        cy.contains("Sign up");
    });
});

describe('signup page should be verified',() => {
    it('signup link should be clickable',() =>{
        cy.get("#signupLink").click();
    });
    it('signup text should be present',() =>{
        cy.contains("Sign up");
    });
    it('signup form fields should be checked',() =>{
        cy.contains("Email");
        cy.get('input[placeholder="Enter email"]').should("exist");
    });
    it('signup button should be checked',() =>{
        cy.get('button[type="button"]').should("be.visible");
    });
});

describe('on signup with email button click verify navigate to final signup page',() => {
    it('enter the email for signup process',() =>{
         cy.wait(1000);
        cy.get('input[placeholder="Enter email"]').type("vishwas@gmail.com");
        cy.wait(1000);
    });
    it('signup button should be clickable',() =>{
        cy.get('button[type="button"]').click();
    });

});

describe('verifying the final signup page',() => {
    it('signup email should be present',() =>{
        cy.contains("vishwas@gmail.com");
    });
    it('username field should be present',() =>{
        cy.contains("Enter name");
        cy.get('input[placeholder="Your name"]').should("exist");
    });
    it('password field should be present',() =>{
        cy.contains("Password");
        cy.get('input[placeholder="Enter Password"]').should("exist");
    });
    it('signup button should be verified',() =>{
        cy.get('button[type="button"]').should("be.visible");
    });
    it('terms of service and privacy policy should be present',() =>{
        cy.contains("Terms of Service");
        cy.contains("Privacy Policy");
    });
    it('login link should be present',() =>{
        cy.contains("Go to login");
    });
});

describe('verifying the signup page successfully redirects to login',() => {
    it('enter the name ',() =>{
        cy.get('input[placeholder="Your name"]').type('Vishwas Rao');
        cy.wait(1000);
    });
    it('enter the password ',() =>{
        cy.get('input[type="password"]').type('zemoso123');
        cy.wait(1000);
    });
    it('checks the terms and conditions checkbox is checked',() =>{
        cy.get('#checkbox').check();
        cy.wait(1000);
    });

    it('signup button should be clicked',() =>{
        cy.get('[id="signupButton"]').dblclick();
        cy.get('[id="signupButton"]').click();
        cy.wait(4000);

    });
});


//Login
describe("Login page should be visible with username and password", () => {
  it("Navigate to Login Page", () => {
    cy.visit("http://localhost:3000/login");
    cy.contains("Log in");
    cy.contains("Remember everything that matters");
  });

  it("Search for Login form fields", () => {
    cy.contains("Email");
    cy.contains("Password");
    cy.wait(2000);
    cy.get('input[placeholder="Enter email"]').should("exist");
    cy.wait(2000);
    cy.get('input[type="password"]').should("exist");
  });

  it("Search for the Sign in button", () => {
    cy.contains("Sign In");
    cy.wait(2000);
    cy.get('button[type="button"]').should("be.visible");
  });
});

describe("Login to application", () => {
   it("Visit the login page", () => {
     cy.visit("http://localhost:3000/login");
     cy.location("protocol").should("eq", "http:");
   });
  it("Type credentials into the form fields", () => {
    cy.wait(2000);
    cy.get('input[placeholder="Enter email"]', { timeout: 5000 }).type(
      "vishwas@gmail.com"
    );
    cy.wait(2000);
    cy.get('input[type="password"]').type("zemoso123");
  });
  it("Click sign in button to log in", () => {
    cy.wait(2000);
    cy.get('button[type="button"]')
      .contains("Sign In")
      .should("be.visible")
      .click();
      cy.wait(5000)
       cy.window().then((window) => {
              value=window.localStorage.getItem('accessToken');
              console.log("accessToken : ", value);
    cy.contains("Inbox").should("be.visible");
  });
});
})
describe("Verifying Landing Page app bar contents", () => {
  it("Verifying the URL", () => {
    cy.location("pathname").should("eq", "/tasks");
  });
  it("Should have search bar", () => {
    cy.get('input[placeholder="Search"]').should("be.disabled");
  });
  it("Should have bell icon", () => {
    cy.get('button[tabindex="-1"]').should("be.disabled");
  });
  it("Should have avatar", () => {
    cy.wait(1000);
    cy.get(".MuiAvatar-img").should("be.visible");
  });
});

describe("Verifying the inbox page", () => {
  it("should have add task button", () => {
    cy.get("#add-task").should("exist");
  });
  it("clicks on addTask ", () => {
    cy.get("#add-task").click();
    cy.wait(1000);
  });
  it("Add Task box is visible", () => {
    cy.get("#addTask-box").should("be.visible");
  });
  it("save button is disabled", () => {
    cy.get('button[data-testid="save-button"').should("be.disabled");
  });
  it("cancel button is clicked", () => {
    cy.get('button[data-testid="cancel-button"').click();
  });
  it("Check the inbox image", () => {
    cy.get('img[alt="Inbox background image"]').should("be.visible");
  });
});

describe("Adding task to the empty Inbox Page", () => {
  it("see's  add task button", () => {
    cy.get("#add-task").should("exist");
  });
  it("clicks on addTask ", () => {
    cy.get("#add-task").click();
  });
  it("Add Task box is visible", () => {
    cy.get("#addTask-box").should("be.visible");
  });

  it("save button is disabled", () => {
    cy.get('button[data-testid="save-button"').should("be.disabled");
  });

  it("Adds first task", () => {
    cy.get("#inputField").type("Book an appointment at the embassy");
    cy.wait(1000);
    cy.get('svg[data-testid="access-icon"]').click();
    cy.wait(1000);
    cy.get(
      ":nth-child(4) > :nth-child(4) > .MuiButtonBase-root > .MuiIconButton-label > .MuiTypography-root"
    ).click({ force: true });
    cy.get('input[id="time-picker"')
      .click({ force: true })
      .clear()
      .type("12:30 P");
    cy.get('button[data-testid="save-button"').click();
    cy.wait(2000);
  });
  it("Adds Second task", () => {
    cy.get("#add-task").click();

    cy.get("#inputField").type("Call the plumber");
    cy.wait(1000);
    cy.get('svg[data-testid="access-icon"]').click();
    cy.wait(1000);
    cy.get(
      ":nth-child(4) > :nth-child(2) > .MuiButtonBase-root > .MuiIconButton-label > .MuiTypography-root"
    ).click({ force: true });
    cy.get('input[id="time-picker"')
      .click({ force: true })
      .clear()
      .type("03:00 P");
    cy.get('button[data-testid="save-button"').click();
    cy.wait(2000);
  });

  it("Adds Third task", () => {
    cy.get("#add-task").click();

    cy.get("#inputField").type("Book a table for dinner tonight");
    cy.wait(1000);
    cy.get('svg[data-testid="access-icon"]').click();
    cy.wait(1000);
    cy.get(
      ":nth-child(3) > :nth-child(7) > .MuiButtonBase-root > .MuiIconButton-label > .MuiTypography-root"
    ).click({ force: true });
    cy.get('input[id="time-picker"')
      .click({ force: true })
      .clear()
      .type("07:00 P");
    cy.get('button[data-testid="save-button"').click();
    cy.wait(2000);
  });
  it("Adds fourth task", () => {
      cy.get("#add-task").click();

      cy.get("#inputField").type("Ask mom about the hotel");
      cy.wait(1000);
      cy.get('svg[data-testid="access-icon"]').click();
      cy.wait(1000);
      cy.get(
        ":nth-child(5) > :nth-child(5) > .MuiButtonBase-root > .MuiIconButton-label > .MuiTypography-root"
      ).click({ force: true });
      cy.get('input[id="time-picker"')
        .click({ force: true })
        .clear()
        .type("10:00 A");
      cy.get('button[data-testid="save-button"').click();
      cy.wait(2000);
    });
    it("Adds fifth task", () => {
          cy.get("#add-task").click();

          cy.get("#inputField").type("Make a zoom call with friends");
          cy.wait(1000);
          cy.get('svg[data-testid="access-icon"]').click();
          cy.wait(1000);
          cy.get(
            ":nth-child(5) > :nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .MuiTypography-root"
          ).click({ force: true });
          cy.get('input[id="time-picker"')
            .click({ force: true })
            .clear()
            .type("11:00 A");
          cy.get('button[data-testid="save-button"').click();
          cy.wait(2000);
        });
});


describe('sorting of tasks', () => {
    it('contains the content Inbox', () => {
        cy.contains('Inbox')
        cy.wait(1000)
    })
    it('contains the sorting icon and click', () => {
        cy.get('[data-testid="sortIcon"]').click({multiple: true})
        cy.wait(2000)
    })
    it('contains the content Sort by date', () => {
        cy.contains('Sort by date')
        cy.wait(1000)
    })
    it('contains the content Sort by name', () => {
        cy.contains('Sort by name')
        cy.wait(1000)
    })
    it('click the arrow upward icon for date', () => {
        cy.get('[data-testid = "arrowUpwardIconForDate"]').click()
        cy.wait(8000)
    })
    it('click the arrow downward icon for date', () => {
        cy.get('[data-testid="sortIcon"]').click({multiple: true})
        cy.contains('Sort by date')
        cy.wait(8000)
        cy.get('[data-testid = "arrowDownwardIconForDate"]').click()
        cy.wait(8000)
    })
    it('click the arrow upward icon for name', () => {
        cy.get('[data-testid="sortIcon"]').click({multiple: true})
        cy.contains('Sort by name')
        cy.wait(8000)
        cy.get('[data-testid = "arrowUpwardIconForName"]').click()
        cy.wait(8000)
    })
    it('click the arrow downward icon for name', () => {
        cy.get('[data-testid="sortIcon"]').click({multiple: true})
        cy.contains('Sort by name')
        cy.wait(8000)
        cy.get('[data-testid = "arrowDownwardIconForName"]').click()
        cy.wait(8000)
    })
})

