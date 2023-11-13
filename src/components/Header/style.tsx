import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background: blue;
  padding: 10px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
`;
export const HeaderInner = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  color: #fff;
  font-size: 20px;
  font-wegith: bold;
`;
export const HeaderInput = styled.input`
  max-width: 600px;
  width: 90%;
  margin-left: auto;
  border: none;
  border-bottom: 1px solid #fff;
  padding: 8px;
  background: none;
  font-size: 16px;
  color: #fff;

  &::placeholder {
    color: #fff;
  }
  &::focus {
    outline: none;
  }
`;

export const LoginBtn = styled.button`
  border-radius: 5px;
  display: block;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  width: 100px;
  height: 40px;
  border: none;
  background: #fff;
  transition: all 0.3s;
  margin-left: 15px;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  &:disabled {
    &:hover {
      cursor: no-drop;
      opacity: 1;
    }
  }
`;
