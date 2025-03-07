import { Link } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Welcome to E-Commerce</h1>
      <Link to="/register" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Go to Register
      </Link>
    </div>
  );
}

export default App;

