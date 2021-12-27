import React, { Component } from "react";

import CardNote from "../CardNote";

import "./style.css";

class ListNotes extends Component {
  render() {
    return (
      <>
        <ul className="list-notes">
          {Array.of("Trabalho", "Trabalho", "Estudos").map(
            (categoria, index) => {
              return (
                <li className="list-notes-itens" key={index}>
                  <CardNote />
                </li>
              );
            }
          )}
        </ul>
      </>
    );
  }
}

export default ListNotes;
