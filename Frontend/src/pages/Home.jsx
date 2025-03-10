import ProductCard from "../components/ProductCard";

const seafoodProducts = [
  { id: 1, name: "Fresh Salmon", image: "/images/salmon.jpg", price: 15.99 },
  { id: 2, name: "Tiger Shrimp", image: "/images/shrimp.jpg", price: 12.99 },
  { id: 3, name: "Lobster Tail", image: "/images/lobster.jpg", price: 24.99 },
  { id: 4, name: "Crab Legs", image: "/images/crab.jpg", price: 19.99 },
  { id: 5, name: "Oysters", image: "/images/oysters.jpg", price: 9.99 },
];

const Home = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Fresh Seafood Selection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {seafoodProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
