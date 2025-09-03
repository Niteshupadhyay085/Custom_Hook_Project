import React from "react";
import useFetch from "./CustomHook/useFetch";
import "./App.css";

function App() {
  const { data, loading, error } = useFetch("https://api.escuelajs.co/api/v1/products");


  if (loading) {
  return (
    <div className="loading-container">
      <h2>Loading...</h2>
    </div>
  );
}
  if (error) return <h2>Error: {error}</h2>;

  // Some random background colors
  const colors = ["#7FFF00", "#8A2BE2", "#00FF7F", "#FF1493", "#1E90FF", "#ADFF2F", "#FF4500", "#9400D3"];

  return (
    <div className="App">
<<<<<<< HEAD
      <h1>Product List</h1>
      <ul>
        {data.slice(0, 40).map((item) => (
          <li key={item.id}>
            <img src={item.images[0]} alt={item.title} height="100" width="100" />
            {item.title}
          </li>
=======
      <h1>Photos</h1>
      <div className="photo-grid">
        {data.slice(0, 1920).map((item, index) => (
          <div className="photo-card" key={item.id}>
            <div
              className="placeholder"
              style={{ backgroundColor: colors[index % colors.length] }}
            >
              600 x 600
            </div>
            <p>{item.title}</p>
          </div>
>>>>>>> 816dfe3 (Image card added)
        ))}
      </div>
    </div>
  );
}

export default App;
