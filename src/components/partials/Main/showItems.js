import React, { Component } from 'react'
import Popup from 'reactjs-popup'

import './showItem.sass'

export default class ShowItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "",
      clicked: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  whiteClick = (e) => {
    this.setState({
      bgColor: "white"
    })
  }
  redClick = (e) => {
    this.setState({
      bgColor: "#ff897a"
    })
  }
  yellowClick = (e) => {
    this.setState({
      bgColor: "#fcff77"
    })
  }
  greenClick = (e) => {
    this.setState({
      bgColor: "#bbf780"
    })
  }
  brownClick = (e) => {
    this.setState({
      bgColor: "#e2b9a1"
    })
  }

  handleClick() {
    this.setState({
      clicked: true
    });
  }

  render() {
    const { title, text, color } = this.props.data;
    const { handleRemove, handleEdit } = this.props;

    return (
      <div className="col-sm-6 col-12 col-lg-4 col-xl-3 item-form">
        <div className="card" style={{ backgroundColor: this.state.bgColor === '' ? color : this.state.bgColor }}>
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
                  <div className="color-white" onClick={(event) => { this.whiteClick(); close(); }}></div>
                  <div className="color-red" onClick={(event) => { this.redClick(); close(); }}></div>
                  <div className="color-yellow" onClick={(event) => { this.yellowClick(); close(); }}></div>
                  <div className="color-green" onClick={(event) => { this.greenClick(); close(); }}></div>
                  <div className="color-brown" onClick={(event) => { this.brownClick(); close(); }}></div>
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