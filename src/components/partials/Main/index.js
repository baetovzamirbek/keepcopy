import React, { Component } from 'react';
import ShowItems from "./showItems"
import TakeNote from "./takeNote"

import 'bootstrap/dist/css/bootstrap.css';
import { keepData } from '../data';

import './main.sass'


export default class Main extends Component {
  state = {
    data: keepData,
    title: '',
    text: '',
    itemTitle: '',
    itemText: '',
    takenoteShow: false
  };
  handleClose = () => {
    if (this.state.title !== '' && !this.state.text !== '') {
      const datacopy = [
        {
          id: this.state.data.length + 1,
          title: this.state.title,
          text: this.state.text
        }
      ];
      const tempData = this.state.data.concat(datacopy);
      this.setState({ data: tempData });
      console.log(tempData);
      this.setState({
        itemTitle: '',
        itemText: '',
        title: '',
        text: '',
      })
    }
    this.setState({ takenoteShow: false })
  };
  handleTitle = (e) => {
    this.setState({
      title: e.target.value,
      itemTitle: e.target.value
    });
  };
  handleText = (e) => {
    this.setState({
      text: e.target.value,
      itemText: e.target.value
    });
  };
  handleRemove = (id) => {
    const filteredItems = this.state.data.filter(item => item.id !== id);
    this.setState({
      data: filteredItems
    })
    alert("Note removed");
  };
  takenoteClick = () => {
    this.state.takenoteShow ? this.setState({ takenoteShow: false }) : this.setState({ takenoteShow: true });

  }


  render() {
    const { data } = this.state;
    return (
      <main>
        <div className="container">
          <div className="align-items-center row mx-auto shadow p-3 mb-3 bg-white takenoteRow">
            <div className={this.state.takenoteShow ? 'take-noteHide' : 'take-note d-flex align-items-center col'}>
              <div className={this.state.takenoteShow ? 'take-noteHide' : 'take-note'}>
                <div onClick={this.takenoteClick}>Take a note...</div>
              </div>
            </div>
            <TakeNote
              handleClose={this.handleClose}
              handleTitle={this.handleTitle}
              handleText={this.handleText}
              itemTitle={this.state.itemTitle}
              itemText={this.state.itemText}
              takenoteShow={this.state.takenoteShow}
            />
            <div className={this.state.takenoteShow ? 'take-noteHide' : 'd-flex align-items-center justify-content-end col'}>
              <div className="checkbox main-right-item">
                <ion-icon name="checkbox-outline"></ion-icon>
              </div>
              <div className="brush main-right-item">
                <ion-icon name="brush"></ion-icon>
              </div>
              <div className="image">
                <ion-icon name="image"></ion-icon>
              </div>
            </div>
          </div>
          <div className="row">
            {
              data.map(data => (
                <ShowItems
                  key={data.id}
                  data={data}
                  handleRemove={() => this.handleRemove(data.id)}
                />
              ))}
          </div>
        </div>
      </main>
    )
  }
}
