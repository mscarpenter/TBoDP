import LyricBlock from "../components/LyricBlock";
import { analysisSections, songContext } from "../data/dorothyParkerData";

const Articles = () => {
  return (
    <main className="articles-page">
      <header className="articles-header">
        <h1>{songContext.title}</h1>
        <p className="articles-subtitle">
          {songContext.artist} — {songContext.album} ({songContext.year})
        </p>
        <p className="articles-context">{songContext.context}</p>
      </header>

      <section className="articles-list">
        {analysisSections.map((section) => (
          <LyricBlock key={section.id} data={section} />
        ))}
      </section>
    </main>
  );
};

export default Articles;