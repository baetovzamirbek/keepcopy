import React, { Component } from 'react'
import styled from 'styled-components';


export default class ModalEdit extends Component {

  state = {
    content: this.props.checkbox
  }

  textChanged = (key) => {
    const temp = this.state.content;
    temp.splice(key, 1);
    temp.splice(key, 0, document.getElementById(key).innerHTML);
    this.setState({
      content: temp
    })
  }

  render() {
    const { title, text, checked, checkbox, handleTitle, handleText, modalClose, click } = this.props;
    return (


      <ModalContainer>
        <div className="container">
          <div className="row">
            <div id="modal" className="mx-auto col-11 col-sm-8 col-md-6 col-lg-6 col-xl-4 text-capitalize">
              <span>
                <input type="text" className="title" placeholder="Title" value={title} onChange={handleTitle} spellCheck="false" />
              </span>
              <span className={text === '' && checked.length !== 0 && 'hideTextArea'}>
                <textarea placeholder="Take a note" value={text} onChange={handleText} spellCheck="false"></textarea>
              </span>
              <div className={checked.length === 0 ? 'hideTextArea' : 'checkbox1'}>
                {checked.length !== 0 &&
                  checkbox.map((text, i) => {
                    return (
                      <div >
                        <img src={checked[i] === false ? 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBkPSJNMTkgNXYxNEg1VjVoMTRtMC0ySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnoiLz4KPC9zdmc+Cg==' : 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgM0g1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTZINVY1aDE0djE0eiIvPgogIDxwYXRoIGQ9Ik0xOCA5bC0xLjQtMS40LTYuNiA2LjYtMi42LTIuNkw2IDEzbDQgNHoiLz4KPC9zdmc+Cg=='}
                          onClick={() => click(i)} alt="check" />
                        <span
                          className={(checked[i] === true) ? 'line-through checkBoxChange' : 'checkBoxChange'}
                          onMouseLeave={() => this.textChanged(i)}
                          id={i}
                          contentEditable={true}
                          spellCheck={false}>
                          {text}
                        </span>
                      </div>
                    )
                  }
                  )
                }
              </div>
              <button onClick={text === '' && checked.length !== 0 ? () => modalClose(this.state.content) : () => modalClose(null)} >close</button>
            </div>
          </div>
        </div>
      </ModalContainer >



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
      .title {
        font-weight: 600
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
        width: 100%;
        height: 300px;
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
      input[type="checkbox"] {display:none;}
      input[type="checkbox"] + label:before {content:"☐";}
      input:checked + label:before {content:"☑";}
      .checkbox1{
        text-transform: none;
      }
      .line-through{
        text-decoration: line-through;
      }
      [contenteditable]:focus {
        outline: 0px solid transparent;
      }
      .hideTextArea{
        display: none
      }
      .checkBoxChange{
        width: 90%;
        float: right;
      }
      `
