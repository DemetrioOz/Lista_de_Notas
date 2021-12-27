import React, { Component } from "react";

import ListNotes from "./components/ListNotes";
import FormRegister from "./components/FormRegister";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
  }

  createNote(title, content) {
    const newNote = { title: title, content: content };
    const newArrayNotes = [...this.state.notes, newNote];
    const newState = {
      notes: newArrayNotes,
    };
    this.setState(newState);
  }

  render() {
    return (
      <section className="content">
        <FormRegister createNote={this.createNote.bind(this)} />
        <ListNotes notes={this.state.notes} />
      </section>
    );
  }
}

export default App;
