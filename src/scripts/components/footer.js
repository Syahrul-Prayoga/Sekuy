class Footer extends HTMLElement{
  connectedCallback() {
    this.render();
  }

  render(){
    this.innerHTML = 
    /*html */
    `
    <footer>
    <p>Copyright &copy; 2021 - Sekuy</p>
    <p>Made with &hearts; By Syahrul Prayoga</p>
  </footer>
    `
  }
}

customElements.define("footer-layout",Footer);