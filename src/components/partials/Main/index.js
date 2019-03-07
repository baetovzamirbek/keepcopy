import React, { Component } from 'react';
import ShowItems from "./showItems"
import TakeNote from "./takeNote"
import ModalEdit from './modalEdit'

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
    takenoteShow: false,
    modal: false,
    titleTemp: '',
    textTemp: '',
    idTemp: ''
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
      itemTitle: e.target.value,
      titleTemp: e.target.value,
    });
  };
  handleText = (e) => {
    this.setState({
      text: e.target.value,
      itemText: e.target.value,
      textTemp: e.target.value
    });
  };
  handleRemove = (id) => {
    const filteredItems = this.state.data.filter(item => item.id !== id);
    this.setState({
      data: filteredItems
    })
    alert("Note removed");
  };
  handleEdit = (id) => {
    const filteredItems = this.state.data.filter(item => item.id === id);
    this.setState({
      modal: true,
      titleTemp: filteredItems[0].title,
      textTemp: filteredItems[0].text,
      idTemp: id
    })
  }
  takenoteClick = () => {
    this.state.takenoteShow ? this.setState({ takenoteShow: false }) : this.setState({ takenoteShow: true });
  }
  modalClose = () => {
    const temp = this.state.data;
    const movingItem = temp[this.state.idTemp - 1];
    temp.splice(this.state.idTemp - 1, 1);
    movingItem.title = this.state.titleTemp;
    movingItem.text = this.state.textTemp;
    temp.splice(this.state.idTemp - 1, 0, movingItem);
    this.setState({ data: temp, modal: false });
  }


  render() {
    const { data } = this.state;
    return (
      <main>
        <div className="container">
          <div className="align-items-center row mx-auto shadow p-3 mb-3 bg-white takenoteRow">
            <div className={this.state.takenoteShow ? 'take-noteHide' : 'take-note d-flex align-items-center col'}>
              <div className={this.state.takenoteShow ? 'take-noteHide' : 'take-note'}>
                <div onClick={this.takenoteClick} className="unselectable">Take a note...</div>
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
                  handleEdit={() => this.handleEdit(data.id)}
                />
              ))}
          </div>
        </div>
        {this.state.modal &&
          <ModalEdit
            modalClose={this.modalClose}
            titleTemp={this.state.titleTemp}
            textTemp={this.state.textTemp}
            handleTitle={this.handleTitle}
            handleText={this.handleText}
          />}
      </main>
    )
  }
}
