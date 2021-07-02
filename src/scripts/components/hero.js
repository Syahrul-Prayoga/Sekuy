class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
    <div class="hero">
    <div class="hero__inner">
      <div tabindex="0" class="hero__tagline">Kumpul-Kumpul Tapi Gak Sekedar Ngumpul</div>
      <div class="hero__button"><a href="#">Sekuy</a></div>
    </div>
  </div>
    `;
  }
}

customElements.define('hero-img', Hero);
