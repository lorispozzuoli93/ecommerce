import * as React from "react";
import styled from "styled-components";

const Box = styled.div`
  background-color: #bdbdbd;
  display: flex;
  flex-direction: row-reverse;
  padding: 17px;
  margin-top: 15px;
`;

const ButtonLeft = styled.button`
  display: inline-flex;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 64px;
  padding: 6px 8px;
  color: rgb(25, 118, 210);
  border: 0px;
  vertical-align: middle;
`;

const ButtonRight = styled.button`
  display: inline-flex;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 64px;
  padding: 6px 8px;
  color: rgb(25, 118, 210);
  border-right: 1px solid rgb(25, 118, 210);
  border-left: 0px;
  border-top: 0px;
  border-bottom: 0px;
  vertical-align: middle;
`;

const Footer: React.FC = () => {
  return (
    <Box>
      <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
        <ButtonLeft>FACEBOOK</ButtonLeft>
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
        <ButtonRight>TWITTER</ButtonRight>
      </a>
    </Box>
  );
};

export default Footer;
