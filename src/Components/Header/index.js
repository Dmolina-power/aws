import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-materialize";
import logo from "../../images/Choogle.png";
import "./styles.css";


function Header() {
  

  return (
    <>
      <Navbar
        className="white z-depth-5"
        alignLinks="right"
        brand={
          <Link className="brand-logo logoMargin" to="/">
            <img src={logo} alt={logo} height="50px" width="auto" alt="" />
          </Link>
        }
        id="mobile-nav"
        menuIcon={
          <span className="btn-floating btn-large pulse" href="btn">
            <i className="material-icons">apps</i>
          </span>
        }
        options={{
          draggable: true,
          edge: "left",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true,
        }}
      >
        

        
          
            <Link className="waves-effect waves-teal btn-flat" to="/">
              <font styles="vertical-align: inherit;">Home</font>
            </Link>
            <Link className="waves-effect waves-teal btn-flat" to="/about">
              <font styles="vertical-align: inherit;">About</font>
            </Link>
            <Link className="waves-effect waves-teal btn-flat" to="/notes">
              <font styles="vertical-align: inherit;">Notes</font>
            </Link>
            
              
          
        
          
        
      </Navbar>
    </>
  );
}

export default Header;
