import React, { Component } from 'react'
import './takeNote.sass'

export default class TakeNote extends Component {
  render() {
    const { handleClose, handleTitle, handleText, itemTitle, itemText, takenoteShow, handleFormChange, title, text, saveOnClose } = this.props;
    return (
      <div className={takenoteShow ? 'col takeNoteForm' : 'takeNoteHide'}>
        <div className="card">
          <span className="title">
            {/* <input type="text" placeholder="Title" value={itemTitle} onChange={handleTitle} /> */}
            <input type="text" placeholder="Title" name="title" value={title} onChange={handleFormChange.bind(this)} />
          </span>
          <span className="takeNote">
            {/* <textarea placeholder="Take a note" value={itemText} onChange={handleText}></textarea> */}
            <textarea placeholder="Take a note" name="text" value={text} onChange={handleFormChange.bind(this)}></textarea>
          </span>
          {/* <span className="close unselectable" onClick={handleClose}>Close</span> */}
          <span className="close unselectable" onClick={saveOnClose}>Close</span>
        </div>
      </div>
    )
  }
}
