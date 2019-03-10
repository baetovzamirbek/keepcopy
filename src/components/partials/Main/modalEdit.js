import React, { Component } from 'react'
import styled from 'styled-components';
import Checkbox from './checkbox'


export default class ModalEdit extends Component {
  state = { checked: false }

  handleCheckboxChange = event => {
    this.setState({ checked: event.target.checked })
  }

  render() {
    const { modalClose, titleTemp, textTemp, handleTitle, handleText } = this.props;
    return (


      <ModalContainer>
        <div className="container">
          <div className="row">
            <div id="modal" className="mx-auto col-11 col-sm-8 col-md-6 col-lg-6 col-xl-4 text-capitalize">
              <span><input type="text" placeholder="Title" value={titleTemp} onChange={handleTitle} spellCheck="false" /></span>
              <label>
                <Checkbox
                  checked={this.state.checked}
                  onChange={this.handleCheckboxChange}
                />
                <span style={{ marginLeft: 8 }}>Label Text</span>
              </label>
              <span><textarea placeholder="Take a note" value={textTemp} onChange={handleText} spellCheck="false"></textarea></span>
              <button onClick={modalClose} >close</button>
            </div>
          </div>
        </div>
      </ModalContainer>



    )
  }
}
const ModalContainer = styled.div`
      position: fixed;
      top:0;
      left:0px;
      right:0;
      bottom 0;
      background: rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content:center;

      #modal {
        background: #fff;
        border-radius: 10px;
        padding: 15px;
      }
      input, textarea {
        border - width: 0px;
        border: none;
        box-shadow: none;
        overflow: hidden;
        resize: none;
        width: 100%;
      }
      textarea {
        height: 25vw;
        width: 100%;
      }
      input {
        font - weight: 600
      }
      input:focus, textarea:focus {
        outline: none
      }
      button {
        margin - bottom: 2em;
      }
      `
