// App.jsx
import { useState } from 'react';
import ProductCard from './ProductCard';

function App() {
  const [nama, setNama] = useState('');
  const [harga, setHarga] = useState('');
  const [deskripsi, setDeskripsi] = useState('');

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h1>Input Produk</h1>

      <label>Nama Produk:</label>
      <input
        type="text"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        placeholder="Contoh: Laptop"
        style={{ width: '100%', marginBottom: '10px' }}
      />

      <label>Harga Produk:</label>
      <input
        type="number"
        value={harga}
        onChange={(e) => setHarga(e.target.value)}
        placeholder="Contoh: 5000000"
        style={{ width: '100%', marginBottom: '10px' }}
      />

      <label>Deskripsi Produk:</label>
      <textarea
        value={deskripsi}
        onChange={(e) => setDeskripsi(e.target.value)}
        placeholder="Contoh: Laptop gaming dengan RAM 16GB"
        style={{ width: '100%', marginBottom: '10px' }}
      />

      <ProductCard nama={nama} harga={harga} deskripsi={deskripsi} />
    </div>
  );
}

export default App;
