const ProductCard = ({ name, image, price }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-4">
        <img src={image} alt={name} className="w-full h-48 object-cover rounded-md" />
        <h2 className="text-lg font-semibold mt-2">{name}</h2>
        <p className="text-gray-700 text-md mt-1">${price} per lb</p>
        <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    );
  };
  
  export default ProductCard;
  