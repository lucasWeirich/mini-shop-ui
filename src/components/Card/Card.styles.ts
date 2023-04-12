import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--colorBgEmphasis);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
  //gap: 20px;
  text-decoration: none;
  color: var(--colorTxt);
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s;

  &::before, &::after {
    content: '';
    width: 0px;
    height: 0px;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
  }

  &::before {
    background-color: var(--colorEmphasis);
    top: -50px;
    right: -70px;
  }

  &::after {
    background-color: var(--colorEmphasis2);
    bottom: -40px;
    left: -30px;
  }

  &>* {
    z-index: 1;
  }
  
  &:hover {
    box-shadow: 0 0 10px -5px #e2e2e2;
    background-color: #333;
    scale: 1.05;

    &::before {
      width: 300px;
      height: 300px;
    }
    &::after {
      width: 120px;
      height: 120px;
    }

    & img {
      scale: 1.2;
      rotate: -10deg;
    }

    & button {
      background-color: var(--colorBgEmphasis);
    }
  }
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  transition: all 0.3s;
`

export const Img = styled.img`
  width: 100%;
  border-radius: 10px;
  transition: all 0.3s;
`

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`

export const Price = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 14px;
  border-radius: 5px;
  transition: all 0.5s;
`

export const AddToCart = styled.button<{
  active: boolean
}>`
  min-width: 60%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  background-color: var(--colorBg);
  color: var(--colorTxt);
  border: none;
  outline: none;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s;

  &:not(:disabled):hover {
    background: var(--colorEmphasis);
    box-shadow: 4px 4px 12px -4px #4693cf;
    cursor: pointer;
  }
  
  & svg {
    transition: all 0.3;
    position: absolute;
    visibility: collapse;
    opacity: 0;
  }

  @keyframes addToCartIcon {
    from {
      visibility: visible;
      opacity: 1;
      left: -10%;
    }
    to {
      visibility: visible;
      opacity: 1;
      left: 110%;
    }
  }
  @keyframes addToCartSpan {
    from {
      visibility: collapse;
      opacity: 0;
    }
    to {
      visibility: collapse;
      opacity: 0;
    }
  }
  
  ${p => p.active && `
    background: var(--colorEmphasis2)!important;
    box-shadow: 4px 4px 12px -4px var(--colorEmphasis2)!important;
    
    & svg {
      animation: addToCartIcon 1s;
    }  
    & span {
      animation: addToCartSpan 1s;
    }     
  `}
` 