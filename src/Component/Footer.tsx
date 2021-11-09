import * as React from "react";
import styled from "styled-components";

const Box = styled.div`
  background-color: #bdbdbd;
  text-align: right;
  padding: 16px;
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  font-family: Roboto, Helvetica, Arial, sans-serif;
`;

const Button = styled.a`
  display: inline-flex;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 64px;
  padding: 6px 8px;
  color: rgb(25, 118, 210);
  border: 0px;
  vertical-align: middle;
  &.border {
    border-right: 1px solid rgb(25, 118, 210);
  }
`;

const Footer: React.FC = () => {
  return (
    <Box>
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
        <Button className="border">TWITTER</Button>
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
        <Button>FACEBOOK</Button>
      </a>
    </Box>
  );
};

export default Footer;
