import React from "react";

function Food() {
  return <h1>I like Food</h1>;
}

function App() {
  return (
    <div>
      <h1>halo!!!!</h1>
      <Food fav="kimchi" />
    </div>
  );
}

export default App;
