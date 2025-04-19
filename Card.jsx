// ProductCard.jsx
function ProductCard({ nama, harga, deskripsi }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px', marginTop: '20px' }}>
      <h2>{nama || "Nama Produk"}</h2>
      <p><strong>Harga:</strong> Rp{harga || 0}</p>
      <p>{deskripsi || "Deskripsi produk belum diisi."}</p>
    </div>
  );
}

export default ProductCard;
