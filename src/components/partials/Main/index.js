import React, { Component } from 'react'
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
    takenoteShow: false,
    takelistShow: false,
    modal: false,
    id: '',
    color: '',
    checked: [],
    checkbox: [],
    checkboxtext: '',
    checkedCheck: []
  };
  contentEditable = React.createRef();

  /* ----------takeNote.js ------------------- */
  handleClose = () => {
    if (this.state.title !== '' || this.state.text !== '' || this.state.checkboxtext !== '') {
      if (this.state.takelistShow) {
        this.setState({
          checkbox: this.state.checkbox.push(this.state.checkboxtext),
          checkedCheck: this.state.checkedCheck.push('true')
        })
      }
      const datacopy = [
        {
          id: this.state.data.length + 1,
          title: this.state.title,
          text: this.state.text,
          color: "#fff",
          checked: this.state.checkedCheck,
          checkbox: this.state.checkbox
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
        title: '',
        text: '',
        checkbox: [],
        checkboxtext: '',
        checkedCheck: []
      });
    }
    this.setState({
      takenoteShow: false,
      takelistShow: false,
    })
  };

  handleTitle = (e) => {
    this.setState({
      title: e.target.value
    });
  };

  handleText = (e) => {
    if (this.state.takelistShow) {
      this.setState({
        checkboxtext: e.target.value
      });
    }
    else {
      this.setState({
        text: e.target.value,
      });
    }

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
    else {
      this.setState({ data: filteredItems })
    }
  };

  handleEdit = (id) => {
    const filteredItems = this.state.data.filter(item => item.id === id);
    this.setState({
      modal: true,
      title: filteredItems[0].title,
      text: filteredItems[0].text,
      checkbox: filteredItems[0].checkbox,
      checked: filteredItems[0].checked,
      id: id
    })
  };

  takenoteClick = () => {
    this.setState({
      takenoteShow: !this.state.takenoteShow
    })
  };

  takelistClick = () => {
    this.setState({
      takelistShow: !this.state.takelistShow
    })
  }

  selectColor = (id, colorCode) => {
    const temp = this.state.data;
    const movingItem = temp[id - 1];
    temp.splice(id - 1, 1);
    movingItem.color = colorCode === ('white' && '#ffffff') || (colorCode === 'red' && '#ff897a') || (colorCode === 'yellow' && '#fcff77') || (colorCode === 'green' && '#bbf780') || (colorCode === 'brown' && '#e2b9a1');
    temp.splice(id - 1, 0, movingItem);
    this.setState({ data: temp });
  }


  /*   -----Modal Window component's functions---- */
  click = (key) => {
    const temp = this.state.checked;
    const movingItem = temp[key];
    temp.splice(key, 1);
    temp.splice(key, 0, !movingItem);
    this.setState({
      checked: temp
    })
  }

  modalClose = (content) => {
    const temp = this.state.data;
    const movingItem = temp[this.state.id - 1];
    temp.splice(this.state.id - 1, 1);
    movingItem.title = this.state.title;
    if (content !== null) {
      movingItem.checkbox = this.state.checkbox;
      movingItem.checked = this.state.checked;
    }
    else {
      movingItem.text = this.state.text;
    }
    temp.splice(this.state.id - 1, 0, movingItem);
    this.setState({
      data: temp,
      modal: false,
      title: '',
      text: '',
      id: '',
      checkbox: [],
      checked: []
    });
  };


  render() {
    const { data } = this.state;
    return (
      <main>
        <div className="container">
          <div className="align-items-center row mx-auto shadow p-3 mb-3 bg-white takenoteRow">
            <div className={this.state.takenoteShow || this.state.takelistShow ? 'take-noteHide' : 'take-note'}>
              <div onClick={this.takenoteClick} className="unselectable">Take a note...</div>
            </div>
            <TakeNote
              handleClose={this.handleClose}
              handleTitle={this.handleTitle}
              handleText={this.handleText}
              contentEditable={this.contentEditable}
              title={this.state.title}
              text={this.state.text}
              checkboxtext={this.state.checkboxtext}
              takenoteShow={this.state.takenoteShow}
              takelistShow={this.state.takelistShow}
            />
            <div className={this.state.takenoteShow || this.state.takelistShow ? 'take-noteHide' : 'd-flex align-items-center justify-content-end col'}>
              <div className="checkbox main-right-item">
                <ion-icon name="checkbox-outline" onClick={this.takelistClick}></ion-icon>
              </div>
              <div className="brush main-right-item">
                <ion-icon name="brush"></ion-icon>
              </div>
              <div className="image">
                <ion-icon name="image"></ion-icon>
              </div>
            </div>
          </div>

          {/* ShowItems */}
          <div className="row">
            {
              data.map(data => (
                <ShowItems
                  data={data}
                  color={this.state.color === '' ? data.color : this.state.color}
                  handleRemove={() => this.handleRemove(data.id)}
                  handleEdit={() => this.handleEdit(data.id)}
                  selectColor={this.selectColor}
                  click={this.click}
                />
              ))}
          </div>
        </div>

        {/* Modal Window */}
        {this.state.modal &&
          <ModalEdit
            title={this.state.title}
            text={this.state.text}
            checkbox={this.state.checkbox}
            checked={this.state.checked}
            handleTitle={this.handleTitle}
            handleText={this.handleText}
            modalClose={this.modalClose}
            handleCheckbox={this.handleCheckbox}
            click={this.click}
          />}
      </main>
    )
  }
}
