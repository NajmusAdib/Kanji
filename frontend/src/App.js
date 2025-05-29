import React, { useEffect, useState } from 'react';

function App() {
  const [kanji, setKanji] = useState([]);
  const [filter, setFilter] = useState('all');

  const fetchURL = 'https://kanji-686l.onrender.com/api/kanji';

  useEffect(() => {
    const url = filter === 'all' ? fetchURL : `${fetchURL}?jlpt=${filter}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setKanji(data));
  }, [filter]);

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h1>Kanji Vault</h1>
      <div style={{ marginBottom: "1rem" }}>
        {[5, 4, 3, 2, 1, 'none'].map(level => (
          <button
            key={level}
            onClick={() => setFilter(level === 'none' ? -1 : level)}
            style={{ marginRight: "5px", padding: "5px 10px" }}
          >
            {level === 'none' ? 'Unranked' : `N${level}`}
          </button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '10px' }}>
        {kanji.map(k => (
          <div key={k._id} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: 10, textAlign: "center" }}>
            <h2 style={{ fontSize: '2em' }}>{k.character}</h2>
            <p>{(k.meanings || []).join(', ')}</p>
            <p>JLPT: {k.jlpt_new || k.jlpt_old || '?'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;