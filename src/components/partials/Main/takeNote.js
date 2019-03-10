import React, { Component } from 'react'
import './takeNote.sass'

export default class TakeNote extends Component {
  render() {
    const { handleClose, handleTitle, handleText, itemTitle, itemText, takenoteShow } = this.props;
    return (
      <div className={takenoteShow ? 'col takeNoteForm' : 'takeNoteHide'}>
        <div className="card">
          <span className="title">
            <input type="text" placeholder="Title" value={itemTitle} onChange={handleTitle} />
          </span>
          <span className="takeNote">
            <textarea placeholder="Take a note" value={itemText} onChange={handleText}></textarea>
          </span>
          <span className="close unselectable" onClick={handleClose}>Close</span>
        </div>
      </div>
    )
  }
}
