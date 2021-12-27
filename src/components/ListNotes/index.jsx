import React, { Component } from "react";

import CardNote from "../CardNote";

import "./style.css";

class ListNotes extends Component {
  render() {
    return (
      <>
        <ul className="list-notes">
          {this.props.notes.map((note, index) => {
            return (
              <li className="list-notes-itens" key={index}>
                <CardNote title={note.title} content={note.content} />
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default ListNotes;
