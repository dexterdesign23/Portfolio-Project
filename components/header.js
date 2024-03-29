class Header extends HTMLElement {
    constructor() {
      super();
    } 
    connectedCallback() {
      this.innerHTML =`
        <link href="../styles/header-styles.css" rel="stylesheet">
        <header>
          <img src="../images/dexdesign_logo.png">
          <nav>
            <ul>
              <li><a href="../index.html">Home</a></li>
              <li><a href="../about.html">About</a></li>
              <li><a href="../projects.html">Projects</a></li>
              <li><a href="../contact.html">Contact</a></li>
            </ul>
            <p id="greeter"></p>
          </nav>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);