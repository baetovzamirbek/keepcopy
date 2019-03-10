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
    idTemp: '',
    color: '',
  };

  handleFormChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  saveOnClose = () => {
    let currentStateData;

    if (this.state.text !== '' || this.state.title !== '') {
      currentStateData = this.state.data.push({
        id: 0,
        title: this.state.title,
        text: this.state.text,
        color: '#fff'
      });
      this.setState({
        data: currentStateData
      })
    }
    console.log(this.state.data);
  }

  handleClose = () => {
    if (this.state.title !== '' || this.state.text !== '') {
      const datacopy = [
        {
          id: this.state.data.length + 1,
          title: this.state.title,
          text: this.state.text,
          color: "#fff"
        }
      ];
      const tempData = datacopy.concat(this.state.data);
      for (let i = 0; i < tempData.length; i++) {
        const temp = tempData;
        const movingItem = temp[i];
        temp.splice(i, 1);
        movingItem.id = i + 1;
        temp.splice(i, 0, movingItem);
        this.setState({ data: temp });
      }

      this.setState({
        itemTitle: '',
        itemText: '',
        title: '',
        text: '',
      });
      console.log("add:");
      console.log(this.state.data);

    }
    this.setState({ takenoteShow: false })
  };

  handleRemove = (id) => {
    const filteredItems = this.state.data.filter(item => item.id !== id);
    if (filteredItems.length !== 0) {
      for (let i = 0; i < filteredItems.length; i++) {
        const temp = filteredItems;
        const movingItem = temp[i];
        temp.splice(i, 1);
        movingItem.id = i + 1;
        temp.splice(i, 0, movingItem);
        this.setState({ data: temp });
      }
    }
    else { this.setState({ data: filteredItems }) }
    console.log("remove:");
    console.log(this.state.data);
  };
  handleEdit = (id) => {
    console.log("id");
    console.log(id);
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
    this.setState({
      itemTitle: '',
      itemText: '',
      title: '',
      text: '',
      idTemp: ''
    })
  }

  whiteClick = (id) => {
    const temp = this.state.data;
    const movingItem = temp[id - 1];
    temp.splice(id - 1, 1);
    movingItem.color = "#ffffff";
    temp.splice(id - 1, 0, movingItem);
    this.setState({ data: temp });
  }
  redClick = (id) => {
    const temp = this.state.data;
    const movingItem = temp[id - 1];
    temp.splice(id - 1, 1);
    movingItem.color = "#ff897a";
    temp.splice(id - 1, 0, movingItem);
    this.setState({ data: temp });

  }
  yellowClick = (id) => {
    const temp = this.state.data;
    const movingItem = temp[id - 1];
    temp.splice(id - 1, 1);
    movingItem.color = "#fcff77";
    temp.splice(id - 1, 0, movingItem);
    this.setState({ data: temp });
  }
  greenClick = (id) => {
    const temp = this.state.data;
    const movingItem = temp[id - 1];
    temp.splice(id - 1, 1);
    movingItem.color = "#bbf780";
    temp.splice(id - 1, 0, movingItem);
    this.setState({ data: temp });
  }
  brownClick = (id) => {
    const temp = this.state.data;
    const movingItem = temp[id - 1];
    temp.splice(id - 1, 1);
    movingItem.color = "#e2b9a1";
    temp.splice(id - 1, 0, movingItem);
    this.setState({ data: temp });
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
              handleFormChange={this.handleFormChange}
              title={this.state.title}
              text={this.state.text}
              saveOnClose={this.saveOnClose}

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
              data.map((data) => (
                <ShowItems
                  key={data.id}
                  data={data}
                  handleRemove={() => this.handleRemove(data.id)}
                  handleEdit={() => this.handleEdit(data.id)}
                  whiteClick={() => this.whiteClick(data.id)}
                  redClick={() => this.redClick(data.id)}
                  yellowClick={() => this.yellowClick(data.id)}
                  greenClick={() => this.greenClick(data.id)}
                  brownClick={() => this.brownClick(data.id)}
                  colorChange={this.state.color}
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
