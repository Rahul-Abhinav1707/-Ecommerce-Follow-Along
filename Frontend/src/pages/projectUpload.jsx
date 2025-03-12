import { useState } from "react";

const ProductUpload = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, images: [...e.target.files] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("category", formData.category);
    formData.images.forEach((image) => data.append("images", image));

    try {
      const response = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        body: data,
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error uploading product:", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Upload a Seafood Product</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <input type="text" name="name" placeholder="Product Name" onChange={handleChange} required className="w-full p-2 border mb-2" />
        <textarea name="description" placeholder="Description" onChange={handleChange} required className="w-full p-2 border mb-2"></textarea>
        <input type="number" name="price" placeholder="Price ($)" onChange={handleChange} required className="w-full p-2 border mb-2" />
        <input type="text" name="category" placeholder="Category" onChange={handleChange} required className="w-full p-2 border mb-2" />
        <input type="file" multiple onChange={handleImageChange} required className="w-full p-2 border mb-2" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Upload Product</button>
      </form>
    </div>
  );
};

export default ProductUpload;
