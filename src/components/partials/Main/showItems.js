import React, { Component } from 'react'
import Popup from 'reactjs-popup'

import './showItem.sass'

export default class ShowItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
  }
  render() {
    const { id, title, text, checkbox, checked } = this.props.data;
    const { color, handleRemove, handleEdit, selectColor } = this.props;
    return (
      <div className="col-sm-6 col-12 col-lg-4 col-xl-3 item-form">
        <div className="card" style={{ backgroundColor: color }}>
          <div className="group" onClick={handleEdit}>
            <span className="title">{title}</span>
            <span className={text === '' ? 'hideCheckBox' : 'text'} >
              {text}
            </span>
            <div className={checkbox === '' ? 'hideCheckBox ' : 'c'}>
              {
                checkbox !== '' &&
                checkbox.map((text, i) => {
                  return (
                    <div >
                      <img src={checked[i] === false ? 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBkPSJNMTkgNXYxNEg1VjVoMTRtMC0ySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnoiLz4KPC9zdmc+Cg==' : 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgM0g1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTZINVY1aDE0djE0eiIvPgogIDxwYXRoIGQ9Ik0xOCA5bC0xLjQtMS40LTYuNiA2LjYtMi42LTIuNkw2IDEzbDQgNHoiLz4KPC9zdmc+Cg=='} alt="check" />
                      <span className={(checked[i] === true) && 'line-through'} >
                        {text}
                      </span>
                    </div>
                  )
                }
                )
              }
            </div>
          </div>
          <div className="change-color d-flex">
            <Popup
              trigger={<ion-icon name="color-palette"></ion-icon>}
              position="top left"
              on="click"
            >
              {
                close => (
                  <div className="popupColor" onClick={close}>
                    <div className="color-white" onClick={(event) => { close(); selectColor(id, "white") }}></div>
                    <div className="color-red" onClick={(event) => { close(); selectColor(id, "red") }}></div>
                    <div className="color-yellow" onClick={(event) => { close(); selectColor(id, "yellow") }}></div>
                    <div className="color-green" onClick={(event) => { close(); selectColor(id, "green") }}></div>
                    <div className="color-brown" onClick={(event) => { close(); selectColor(id, "brown") }}></div>
                  </div>
                )
              }
            </Popup>
            <div className="removeIcon"><ion-icon name="trash" onClick={handleRemove}></ion-icon></div>
          </div>
        </div>
      </div >
    )
  }
}