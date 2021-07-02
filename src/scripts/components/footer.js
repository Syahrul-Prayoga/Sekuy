class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
    <footer>
    <p tabindex="0">Copyright &copy; 2021 - Sekuy</p>
    <p tabindex="0">Made with &hearts; By Syahrul Prayoga</p>
  </footer>
    `;
  }
}

customElements.define('footer-layout', Footer);
