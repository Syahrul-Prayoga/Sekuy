class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
    <nav class="nav">
      <a href="/" class="nav__title">Sekuy</a>
      <button href="#" id="menu" class="nav__menu" aria-label="nav menu">☰</button>
    <ul id="drawer" class="nav__list">
      <li class="nav__item"><a href="#/home">Home</a></li>
      <li class="nav__item"><a href="#/favorite">Favorite</a></li>
      <li class="nav__item"><a href="https://github.com/codevsp">About Us</a></li>
    </ul>
  </nav>
    `;
  }
}

customElements.define('nav-bar', Navbar);
