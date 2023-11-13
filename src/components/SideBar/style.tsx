import styled from "styled-components";

export const StyledSideWrapper = styled.div`
  width: 30%;
  margin-right: 5%;
`;

export const StyledCategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
export const StyledCategoryTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-right: auto;
`;
export const StyledCategoryIcon = styled.div`
  margin-right: 10px;
`;

export const StyledArrow = styled.div`
  transform: rotate(180deg);
`;
