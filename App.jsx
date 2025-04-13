import { useState } from 'react';

function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');

  const hasil = a && b ? a * b : '';

  return (
    <>
      <h2>Kalkulator Perkalian</h2>

      <input
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
        placeholder="Angka pertama"
      />

      <input
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
        placeholder="Angka kedua"
      />

      {/* UI untuk menampilkan hasil */}
      <div>
        <p>Hasil: {hasil}</p>
      </div>
    </>
  );
}

export default App;