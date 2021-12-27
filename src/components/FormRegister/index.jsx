import React, { Component } from "react";

import "./style.css";

class FormRegister extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.content = "";
  }

  _handleChangeTitle(e) {
    e.stopPropagation();
    this.title = e.target.value;
  }

  _handleChangeContent(e) {
    e.stopPropagation();
    this.content = e.target.value;
  }

  createNote(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.createNote(this.title, this.content);
  }

  render() {
    return (
      <>
        <form className="form-register" onSubmit={this.createNote.bind(this)}>
          <input
            type="text"
            placeholder="Titulo"
            className="form-register-input"
            onChange={this._handleChangeTitle.bind(this)}
          />
          <textarea
            rows={15}
            placeholder="Escreva sua nota..."
            className="form-register-input"
            onChange={this._handleChangeContent.bind(this)}
          />
          <button className="form-register-input form-register-submit">
            Criar Nota
          </button>
        </form>
      </>
    );
  }
}

export default FormRegister;
