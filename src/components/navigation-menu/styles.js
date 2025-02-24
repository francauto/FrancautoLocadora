// styles.ts
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import breakpoints from "../../breakpoints/breakpoints"; // Ajuste o caminho se necessário

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
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
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 20px;

      li {
      margin: 10px 0;
      /* Atraso escalonado na animação de fade */
      opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
      transition: opacity 0.3s ease ${({ $isOpen, index }) => ($isOpen ? (index as number) * 0.1 : 0)}s;
    }
  }
`;

export const MenuItem = styled.li`
  margin: 0 15px;
  position: relative;
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
`;