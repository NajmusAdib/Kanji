import React, { useEffect, useState } from 'react';

function App() {
  const [kanji, setKanji] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const url = filter === 'all' ? '/api/kanji' : `/api/kanji?jlpt=${filter}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setKanji(data));
  }, [filter]);

  return (
    <div>
      <h1>Kanji Vault</h1>
      <div>
        {[5,4,3,2,1,'none'].map(level => (
          <button key={level} onClick={() => setFilter(level === 'none' ? -1 : level)}>
            {level === 'none' ? 'Unranked' : `N${level}`}
          </button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))' }}>
        {kanji.map(k => (
          <div key={k._id} style={{ border: '1px solid #ccc', margin: 5, padding: 10 }}>
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