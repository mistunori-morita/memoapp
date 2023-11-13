import React from "react";
import { StyledInput, StyledTextArea, StyledWrapper } from "./style";

const Contents = () => {
  return (
    <StyledWrapper>
      <StyledInput placeholder="タイトルを入力してください" />
      <StyledTextArea placeholder="テキストを入力してください" />
    </StyledWrapper>
  );
};

export default Contents;
