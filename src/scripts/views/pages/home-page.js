import RestaurantSource from '../../data/restaurant-api';
import renderRestaurant from '../../components/restaurant-list';
import SkipToContent from '../../utils/skip-to-content';

const HomePage = {
  async render() {
    return `
      <div class="hero">
        <div class="hero-inner">
            <h2 class="hero-title">"Where Should We eat today?"</h1>
            <p class="hero-tagline">
                Hindari jawaban "Terserah" ketika bertanya "Ingin makan di mana?". 
                <br>
                Where to Eat memberikan solusi dengan menyediakan berbagai tempat makan favorit berdasarkan penilaian masyarakat. 
            </p>
        </div>
      </div>

      <button tabindex="1" id="homeSkipBtn" class="skip-to-main" aria-label="skip to content">Skip to main content</button>

      <div id="homeMainContent" tabindex="-1">
        <section id="restaurant">
          <div class="main__inner">
            <h2 class="main__title">Daftar Restoran</h2>
          </div>

          <div id="restaurantList" class="restaurant-list"></div>
        </section>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.restaurantList();
    renderRestaurant(restaurants);
    SkipToContent();
  },
};

export default HomePage;
