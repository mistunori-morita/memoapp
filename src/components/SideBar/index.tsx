import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { BASE_URL } from "../../constants/common";
import styled from "styled-components";

import { FcAddImage, FcCollapse } from "react-icons/fc";

import {
  StyledCategoryIcon,
  StyledCategoryWrapper,
  StyledSideWrapper,
  StyledCategoryTitle,
  StyledArrow,
} from "./style";
import { ApiDataContext } from "../../context/api_context";

const SideBar = () => {
  const { category } = useContext(ApiDataContext);
  return (
    <StyledSideWrapper>
      {/*  */}
      {category &&
        category.map((item) => (
          <StyledCategoryWrapper key={item.id}>
            <StyledCategoryIcon>
              <FcAddImage />
            </StyledCategoryIcon>
            <StyledCategoryTitle>{item.name}</StyledCategoryTitle>
            <StyledArrow>
              <FcCollapse />
            </StyledArrow>
          </StyledCategoryWrapper>
        ))}
    </StyledSideWrapper>
  );
};

export default SideBar;
