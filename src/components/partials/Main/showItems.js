import React, { Component } from 'react'
import Popup from 'reactjs-popup'

import './showItem.sass'

export default class ShowItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.setState({
      clicked: true
    });
  }

  render() {
    const { title, text, color } = this.props.data;
    const { handleRemove, handleEdit, whiteClick, redClick, yellowClick, greenClick, brownClick, colorChange } = this.props;

    return (
      <div className="col-sm-6 col-12 col-lg-4 col-xl-3 item-form">
        <div className="card" style={{ backgroundColor: colorChange === '' ? color : colorChange }}>
          <div className="group" onClick={handleEdit}>
            <span className="title">{title}</span>
            <span className="text">{text}</span>
          </div>
          <div className="change-color d-flex">
            <Popup
              trigger={<ion-icon name="color-palette"></ion-icon>}
              position="top left"
              on="click"
            >
              {close => (
                <div className="popupColor" onClick={close}>
                  <div className="color-white" onClick={(event) => { whiteClick(); close() }}></div>
                  <div className="color-red" onClick={(event) => { redClick(); close() }}></div>
                  <div className="color-yellow" onClick={(event) => { yellowClick(); close() }}></div>
                  <div className="color-green" onClick={(event) => { greenClick(); close() }}></div>
                  <div className="color-brown" onClick={(event) => { brownClick(); close() }}></div>
                </div>
              )}
            </Popup>
            <div className="removeIcon"><ion-icon name="trash" onClick={handleRemove}></ion-icon></div>
          </div>
        </div>
      </div >
    )
  }
}