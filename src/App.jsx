import React from "react";
import useFetch from "./CustomHook/useFetch";
import "./App.css";

function App() {
  const { data, loading, error } = useFetch("https://api.escuelajs.co/api/v1/products");

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div className="App">
      <h1>Product List</h1>
      <ul>
        {data.slice(0, 48).map((item) => (
          <li key={item.id}>
            <img src={item.images[0]} alt={item.title} height="100" width="100" />
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
