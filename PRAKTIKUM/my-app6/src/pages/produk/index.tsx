import ProdukView from "../views/produk/index";

const ProdukPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Halaman Produk
      </h1>

      <div className="bg-white shadow-lg rounded-lg p-6 w-80 text-center">
        <p className="text-gray-700">
          Selamat datang di halaman produk 
        </p>
      </div>
    </div>
  );
};

export default ProdukPage;