import React, { Component } from 'react'

import './header.sass'

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="container-fluid">
          <div className="align-items-center row">
            <div className="d-flex align-items-center nav-menu-logo col">
              <div className="sidebar-toggle">
                <ion-icon name="menu"></ion-icon>
              </div>
              <div className="logo">Keep</div>
            </div>
            <div className="d-flex align-items-center justify-content-end nav-search-refresh col">
              <div className="search-toggle header-right-item">
                <ion-icon name="search"></ion-icon>
              </div>
              <div className="refresh header-right-item">
                <ion-icon name="refresh"></ion-icon>
              </div>
              <div className="settings header-right-item">
                <ion-icon name="settings"></ion-icon>
              </div>
              <div className="profile">
                <div className="user-avatar">
                  <img src="https://lh3.googleusercontent.com/-dk5nQ8i4BD0/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdLjf6SMl8Tq0M9P-3S1inRZ2Pi9A/mo/photo.jpg?sz=46" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}