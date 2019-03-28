import React, { Component } from 'react'
import ContentEditable from 'react-contenteditable'
import './takeNote.sass'

export default class TakeNote extends Component {
  render() {
    const { handleClose, handleTitle, handleText, title, text, takenoteShow, takelistShow, checkboxtext, contentEditable } = this.props;
    return (
      <div className={takenoteShow || takelistShow ? 'col takeNoteForm' : 'takeNoteHide'}>
        <div className="card">
          <span className="title">
            <input type="text" placeholder="Title" value={title} onChange={handleTitle} />
          </span>
          <span className={takelistShow ? 'takeNoteHide' : 'takeNote'}>
            <textarea placeholder="Take a note" value={text} onChange={handleText}></textarea>
          </span>
          <span className={!takelistShow ? 'takeNoteHide' : 'takeNote'}>
            <img src={'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBkPSJNMTkgNXYxNEg1VjVoMTRtMC0ySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnoiLz4KPC9zdmc+Cg=='} alt="check" />
            <ContentEditable
              innerRef={contentEditable}
              html={checkboxtext} // innerHTML of the editable div
              disabled={false}       // use true to disable editing
              onChange={handleText} // handle innerHTML change
              tagName='span' // Use a custom HTML tag (uses a div by default)
              className='contentEdit'
            />
          </span>
          <span className="close unselectable" onClick={handleClose}>Close</span>
        </div>
      </div>
    )
  }
}
