import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './Navbar.scss';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  toggle = () => {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  }

  render() {
    const { open } = this.state;
    let menuClose = 'Navbar';
    if (open === false) {
      menuClose += ' Close';
    }

    return (
      <div className={menuClose}>
        <div className="background-menu">
          <p className="background-menu-text">background-menu-text</p>
          <img className="grenouille" src="/images/grenouille.svg" alt="grenouille" />
        </div>
        <SideNav>
          <SideNav.Toggle onClick={this.toggle} type="checkbox" />
          <SideNav.Nav className="custom-sidenav" defaultSelected="Accueil">
            <NavItem eventKey="Accueil">
              <NavIcon>
                <i className="fa fa-home" style={{ fontSize: '1.75em' }} />
              </NavIcon>
              <NavText>
                <Link to="/#accueil">
                Accueil
                </Link>
              </NavText>
            </NavItem>
            <NavItem eventKey="Balance Ta Friche">
              <NavIcon>
                <i className="fa fa-leaf" style={{ fontSize: '1.75em' }} />
              </NavIcon>
              <NavText>
                <Link to="/#balance">
                Balance Ta Friche
                </Link>
              </NavText>
            </NavItem>
            <NavItem eventKey="Milieux restaurés">
              <NavIcon>
                <i className="fa fa-recycle" style={{ fontSize: '1.75em' }} />
              </NavIcon>
              <NavText>
                <NavLink activeClassName="active" to="/milieuxrestaures">
                Milieux restaurés
                </NavLink>
              </NavText>
            </NavItem>
            <NavItem eventKey="Contact" href="#contact">
              <NavIcon>
                <i className="fa fa-comment" style={{ fontSize: '1.75em' }} />
              </NavIcon>
              <NavText>
                <Link to="/#contact">
                Contact
                </Link>
              </NavText>
            </NavItem>
            <NavItem eventKey="Mention légales">
              <NavIcon>
                <i className="fa fa-quote-right" style={{ fontSize: '1.75em' }} />
              </NavIcon>
              <NavText>
                <Link to="/#footer">
                Mentions légales
                </Link>
              </NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
        <div className="background">
          <p className="background-text">background-text</p>
        </div>
      </div>
    );
  }
}

export default Navbar;
