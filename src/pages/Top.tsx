import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Contents from "../components/Contents";
import styled from "styled-components";

export const StyledContentsWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Top = () => {
  return (
    <>
      <Header />
      <StyledContentsWrapper>
        <SideBar />
        <Contents />
      </StyledContentsWrapper>
    </>
  );
};

export default Top;
