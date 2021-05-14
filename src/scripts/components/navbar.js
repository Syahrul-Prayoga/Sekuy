class Navbar extends HTMLElement{
  connectedCallback(){
    this.render();
  }

  render(){
    this.innerHTML = 
    /*html*/
    `
    <nav class="nav">
    <div class="nav__title">Sekuy</i></div>
    <ul id="drawer" class="nav__list">
      <li class="nav__item"><a href="#">Home</a></li>
      <li class="nav__item"><a href="#">Favorite</a></li>
      <li class="nav__item"><a href="https://github.com/Syahrul-Prayoga">About Us</a></li>
    </ul>
    <a id="menu" class="nav__menu">☰</a>
  </nav>
    `
  }
}

customElements.define("nav-bar",Navbar);