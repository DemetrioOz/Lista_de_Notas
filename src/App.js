import React from "react";

import ListNotes from "./components/ListNotes";
import FormRegister from "./components/FormRegister";

import "./App.css";

function App() {
  return (
    <section className="content">
      <FormRegister />
      <ListNotes />
    </section>
  );
}

export default App;
