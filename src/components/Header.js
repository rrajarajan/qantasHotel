import React from "react";
import logo from '../images/qantas-logo.png';
import styled from 'styled-components';

const Image = styled.img`
  height: 40px;
`;

const Header = () => {
  return <>
      <Image src={logo} alt="qantas logo" />
  </>;
};

export default Header;
