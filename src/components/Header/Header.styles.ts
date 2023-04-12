import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  height: 70px;
  background-color: var(--colorBgEmphasis);
  position: sticky;
  top: 0;
  z-index: 999;
  transition: all 0.8s;

  &:hover {
    background-color: #000;
    box-shadow: 0 0 30px #323232;
  }

  &>div {
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const Logo = styled.img`
  height: 60px;
  filter: grayscale(0) brightness(0%) contrast(100%) invert(100%)!important;
  transition: all 0.2s;

  &:hover {
    scale: 1.2;
    rotate: 15deg;
  }
`

export const Menu = styled.nav`
  & ul {
    display: flex;
    align-items: center;
    gap: 10px;
    list-style: none;
    
    & a {
      font-size: 16px;
      color: var(--colorTxt);
      text-decoration: none;
      padding: 2px 5px;
      position: relative;
      display: flex;
      transition: all 0.4s;

      &:not(.--icon) {
        &:hover {
          color: var(--colorEmphasis);

          &::before, &::after {
            width: 100%;
          }
        }

        &::before, &::after {
          content: '';
          width: 0%;
          height: 1px;
          background-color: var(--colorEmphasis);
          position: absolute;
          transition: all 0.5s;
        }

        &::before {
          top: 0;
          left: 0;
        }
      
        &::after {
          bottom: 0;
          right: 0;
        }
      }

      &.--icon {
        & * {
          transition: all 0.4s;
        }
        
        &:hover {
          & svg {
            scale: 1.3;
            rotate: -20deg;
            
            & path {
              fill: var(--colorEmphasis)!important;
            }
          }
        }

        &.--cart {
          position: relative;

          &:hover {
            & span {
              background-color: var(--colorEmphasis2);
              top: -10px;
            }
          }
          
          & span {
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background-color: var(--colorEmphasis);
            font-size: 10px;
            position: absolute;
            top: -5px;
            right: 0;
            z-index: 999;
            transition: all 0.3s;
          }
        }
      }
    }
  }

  @media (max-width: 500px) {
    & ul {
      gap: 5px;
      flex-wrap: wrap;
      justify-content: end;
      
      & a {
        font-size: 14px;
        padding: 2px;
      }
    }
  }
`