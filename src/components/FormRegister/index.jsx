import React, { Component } from "react";

import "./style.css";

class FormRegister extends Component {

  handleChangeTitle(e){}
  
  render() {
    return (
      <>
        <form className="form-register">
          <input
            type="text"
            placeholder="Titulo"
            className="form-register-input"
            onChange={}
          />
          <textarea
            rows={15}
            placeholder="Escreva sua nota..."
            className="form-register-input"
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
