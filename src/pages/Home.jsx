import shaolinImg from "../assets/shaolin-vs-ninja.jpg";

const Home = () => {
  const quote = "In a Mizuwari, water doesn't dilute. It reveals. ";

  return (
    <div className="home-container">
      {/* CENA 1: Dark com Marquee Infinito */}
      <section className="scene-dark">
        <div className="marquee-container">
          <div className="marquee-track">
            <span className="marquee-text">{quote}</span>
            <span className="marquee-text">{quote}</span>
          </div>
        </div>

        {/* Espaço reservado para a foto no centro (igual a Marilyn no Honey Copy) */}
        <div className="hero-image-placeholder">
          { <img src="../assets/shaolin-vs-ninja.jpg" alt="Shaolin vs Ninja" /> }
        </div>
      </section>

      {/* CENA 2: Fundo Branco (ao rolar) */}
      <section className="scene-light">
        <div className="light-content">
          <span className="light-label">The Ballad of Dorothy Parker</span>
          <h2 className="light-heading">
            "Sound like a real man to me."
          </h2>
          <p className="light-body">
            Uma imersão na madrugada em que Prince desconstruiu a virilidade através da vulnerabilidade, do humor e da poesia de um banho de banheira com as calças molhadas.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;