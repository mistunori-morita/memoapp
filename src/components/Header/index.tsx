import React, { useEffect, useState, useContext } from "react";
import {
  HeaderWrapper,
  HeaderInner,
  HeaderTitle,
  LoginBtn,
  HeaderInput,
} from "./style";
import { ApiDataContext } from "../../context/api_context";

const Header = () => {
  const { resMemoFetchData, token, setToken, resCategoryFetchData } =
    useContext(ApiDataContext);

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
  };

  const handleLoginClick = () => {
    resMemoFetchData();
    resCategoryFetchData();
  };

  return (
    <HeaderWrapper>
      <HeaderInner>
        <HeaderTitle>Memo App</HeaderTitle>
        <HeaderInput
          onChange={(e) => handleInputValue(e)}
          id="access_token"
          value={token}
          placeholder="トークンを入力してください"
        />
        <LoginBtn
          onClick={handleLoginClick}
          id="login"
          value={token}
          disabled={!token}
        >
          LOGIN
        </LoginBtn>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
