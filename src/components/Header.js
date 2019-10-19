import React from "react"
import logo from '../assets/rivernotch-logo.png'
import { Col, Row } from "antd"
import { NavLink } from "react-router-dom"
import './Header.css';

function Header() {
  return (
    <div className="Wrapper">
      <header className="Header-header">
        <img
          src={logo}
          className="Header-logo"
          alt="logo" />
        <h1 style={{ marginBottom: 10}}>
          Rivernotch
        </h1>
        <Row
          type="flex"
          justify="center"
          style={{ width: "100%"}}>
          <Col span={8}>
              <NavLink
                exact
                to={"/"}
                activeStyle={{ textDecoration: 'underline' }}
                style={{ color: "#402b08" ,fontStyle: "italic", fontSize: 22}}>
                Home
              </NavLink>
          </Col>
          <Col span={8}>
              <NavLink
                to={"/download"}
                activeStyle={{ textDecoration: 'underline' }}
                style={{ color: "#402b08" ,fontStyle: "italic", fontSize: 22}}>
                Download
              </NavLink>
          </Col>
          <Col span={8}>
              <NavLink
                to={"/news"}
                activeStyle={{ textDecoration: 'underline' }}
                style={{ color: "#402b08" ,fontStyle: "italic", fontSize: 22}}>
                News
              </NavLink>
          </Col>
        </Row>
      </header>
    </div>
  );
}

export default Header;
