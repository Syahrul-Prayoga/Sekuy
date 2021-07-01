const Favorite = {
  async render() {
    return `
    <div class="restaurant">
    <h1 tabindex="0" class="restaurant__label">Tempat Favorit</h1>
    <section id="posts" class="list__restaurant">
    `;
  },
 
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};
 
export default Favorite;