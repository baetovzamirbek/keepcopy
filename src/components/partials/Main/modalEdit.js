import React, { Component } from 'react'
import styled from 'styled-components';


export default class ModalEdit extends Component {

  render() {
    const { modalClose, titleTemp, textTemp, handleTitle, handleText } = this.props;
    return (


      <ModalContainer>
        <div className="container">
          <div className="row">
            <div id="modal" className="mx-auto col-11 col-sm-8 col-md-6 col-lg-6 col-xl-4 text-capitalize">
              <span><input type="text" placeholder="Title" value={titleTemp} onChange={handleTitle} /></span>
              <span><textarea cols="50" placeholder="Take a note" value={textTemp} onChange={handleText}></textarea></span>
              <button onClick={modalClose} >
                close
              </button>
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
}
input, textarea {
  border-width: 0px;
  border: none;
  box-shadow: none;
  overflow: hidden;
  resize: none;   
}
textarea {   
  height: 25vw;
  width: 100%;
}
input {
  font-weight: 600
}
input:focus, textarea:focus {
  outline: none
}
button {
  margin-bottom: 2em;
}
`
