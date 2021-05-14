class Content extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render(){
    this.innerHTML = 
    /*html */
    `
    <main>
    <section id="content" class="content">
      <div class="restaurant">
        <h1 class="restaurant__label">Tempat Kumpul-Kumpul</h1>
        <section id="posts" class="list__restaurant">
    </section>
    </main>
  `
  }
}

customElements.define("content-layout", Content);