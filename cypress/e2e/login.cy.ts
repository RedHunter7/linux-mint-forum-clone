describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/login');
  });

  it('should display login page correctly', () => {
    // memverifikasi elemen yang harus tampak pada halaman login
    cy.get('input[placeholder="email"]').should('be.visible');
    cy.get('input[placeholder="password"]').should('be.visible');
    cy.get('button').contains(/^Login$/).should('be.visible');
  });

  it('should display alert when username is empty', () => {
    // klik tombol login tanpa mengisi username
    cy.get('button').contains(/^Login$/).click();
 
    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Email format invalid');
    });
  });

  it('should display alert when password is empty', () => {
    // mengisi username
    cy.get('input[placeholder="email"]').type('bejo@email.com');
 
    // klik tombol login tanpa mengisi password
    cy.get('button').contains(/^Login$/).click();
 
    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Password must at least 6 characters');
    });
  });

  it('should display alert when username and password are wrong', () => {
    // mengisi username
    cy.get('input[placeholder="email"]').type('sadadsa');
 
    // mengisi password yang salah
    cy.get('input[placeholder="password"]').type('wrong_password');
 
    // menekan tombol Login
    cy.get('button').contains(/^Login$/).click();
 
    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Email or password is wrong');
    });
  });

  it('should display homepage when username and password are correct', () => {
    // mengisi username
    cy.get('input[placeholder="email"]').type('edo24a@forward4families.org');
 
    // mengisi password
    cy.get('input[placeholder="password"]').type('123456');
 
    // menekan tombol Login
    cy.get('button').contains(/^Login$/).click();
 
    // memverifikasi bahwa elemen yang berada di homepage ditampilkan
    cy.get('#open_write_thread_modal_button').should('exist');
  });
});