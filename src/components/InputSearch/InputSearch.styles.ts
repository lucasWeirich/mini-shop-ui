import styled from "styled-components";

export const Wrapper = styled.input`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 15px;
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: var(--colorBgEmphasis);
  color: var(--colorTxt);
  position: relative;
  transition: all 0.3s;

  &:target {
    color: red;
  }

  &:focus {
    box-shadow: 0 0 0px 2px var(--colorEmphasis);
  }
`