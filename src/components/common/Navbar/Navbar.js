import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import LoginButton from '@common/LoginButton';
import LogoutButton from '@common/LogoutButton';

import { Container } from '@components/global';
import {
  Nav,
  NavItem,
  Brand,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
} from './style';

import { ReactComponent as MenuIcon } from '@static/icons/menu.svg';

let NAV_ITEMS = ['Report', 'Questions', 'Team'];
let NAV_ITEMS_S = ['Team'];

class Navbar extends Component {
  state = {
    mobileMenuOpen: false,
    nav_items: this.props.loggedIn ? NAV_ITEMS : NAV_ITEMS_S,
  };

  toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }));
  };

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false });
    }
  };

  getNavAnchorLink = item => (
    <AnchorLink href={`#${item.toLowerCase()}`} onClick={this.closeMobileMenu}>
      {item}
    </AnchorLink>
  );

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={this.state.nav_items.map(x => x.toLowerCase())}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        {this.state.nav_items.map(navItem => (
          <NavItem key={navItem}>{this.getNavAnchorLink(navItem)}</NavItem>
        ))}
        <NavItem key="log">{this.props.loggedIn ? <LogoutButton /> : <LoginButton />}</NavItem>
      </Scrollspy>
    </NavListWrapper>
  );

  render() {
    const { mobileMenuOpen } = this.state;

    return (
      <Nav {...this.props}>
        <StyledContainer>
          <Brand>visaDetective</Brand>
          <Mobile>
            <button onClick={this.toggleMobileMenu} style={{ color: 'black' }}>
              <MenuIcon />
            </button>
          </Mobile>

          <Mobile hide>{this.getNavList({})}</Mobile>
        </StyledContainer>
        <Mobile>
          {mobileMenuOpen && (
            <MobileMenu>
              <Container>{this.getNavList({ mobile: true })}</Container>
            </MobileMenu>
          )}
        </Mobile>
      </Nav>
    );
  }
}

export default Navbar;
