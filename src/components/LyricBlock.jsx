const LyricBlock = ({ data }) => {
  const { part, title, verse, lead, topics } = data;

  return (
    <article className="lyric-block">
      {/* CENA 1: Verso e Frase de Transição */}
      <div className="lyric-intro-scene">
        <header className="lyric-block-header">
          <span className="lyric-part">{part}</span>
          <h2 className="lyric-title">{title}</h2>
        </header>

        <blockquote className="lyric-verse">
          <p>"{verse}"</p>
        </blockquote>

        {lead && <p className="lyric-lead">{lead}</p>}
      </div>

      {/* CENA 2: O Palco Roxo e os Conceitos que se Revelam */}
      <div className="lyric-topics">
        {/* Card base: puramente roxo e vazio */}
        <div className="topic-card-base" />

        {/* Conceitos que entram na sequência com texto branco */}
        {topics.map((topic, index) => (
          <div key={index} className="topic-topic">
            <h3 className="topic-concept">{topic.concept}</h3>
            <p className="topic-explanation">{topic.explanation}</p>
          </div>
        ))}
      </div>
    </article>
  );
};

export default LyricBlock;