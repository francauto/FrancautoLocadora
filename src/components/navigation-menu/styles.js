// styles.js
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import breakpoints from "../breakpoints/breakpoints";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 95%; /* Largura para ocupar 95% da tela */
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  z-index: 1000;
  padding: 20px 40px;
  font-family: "Open Sans", sans-serif;
  transition: all 0.3s ease;

  &.scrolled {
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  @media ${breakpoints.md} {
    padding: 15px 10px;
    width: 100%; /* Ocupa toda a largura em telas menores */
  }

  @media ${breakpoints.sm} {
    padding: 10px 10px;
  }
`;

export const LogoImg = styled.img`
  width: 150px;
  height: auto;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  @media ${breakpoints.md} {
    width: 120px;
  }

  @media ${breakpoints.sm} {
    width: 100px;
  }
`;

export const MenuToggle = styled.button`
  display: none;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  color: white;

  ${Nav}.scrolled & {
    color: black;
  }

  @media ${breakpoints.md} {
    display: block;
    margin-right: auto;
    margin-left: 0;
  }

  @media ${breakpoints.sm} {
    margin-left: 30%;
    margin-top: -5px;
  }
`;

// Correção: $isOpen agora é passado como um objeto desestruturado.
export const MenuList = styled.ul<{ $isOpen: boolean }>`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;

  @media ${breakpoints.md} {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    flex-direction: column;
    position: fixed;
    top: 30px;
    left: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.95);
    padding: 20px 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 999;
    transition: transform 0.3s ease-out, opacity 0.3s ease-out;
    transform: translateY(${({ $isOpen }) => ($isOpen ? "0" : "-100%")});
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  }
`;

export const MenuItem = styled.li`
  margin: 0 15px;
  position: relative;

  @media ${breakpoints.md} {
    margin: 10px 0;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #ddd;

    &:last-child {
      border-bottom: none;
    }
  }
`;

export const StyledScrollLink = styled(ScrollLink)`
  text-decoration: none;
  color: white;
  font-weight: 600;
  cursor: pointer;
  padding: 5px 0;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;

  ${Nav}.scrolled & {
    color: rgb(0, 0, 0);
  }

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: white;
    transition: width 0.5s ease;
  }

  ${Nav}.scrolled &::after {
    background-color: black;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }

  @media ${breakpoints.md} {
    color: #333;
    font-size: 1rem;
    width: 100%;
    display: block;
    padding: 10px 0;
    transition: background-color 0.3s ease, color 0.3s ease;
    border-radius: 5px;

    &:hover {
      background-color: #f0f0f0;
      color: #0056b3;
    }

    &.active {
      color: #0056b3;
      font-weight: bold;
    }
  }
`;