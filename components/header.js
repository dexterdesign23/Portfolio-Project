class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
        </style>
        <header>
          <img src="../images/dexdesign_logo.png">
          <nav>
            <ul>
              <li><a href="home.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="projects.html">Projects</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </nav>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);