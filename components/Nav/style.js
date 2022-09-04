import styled from "styled-components";

export const NavContainer = styled.div`
  /* background-color: red; */

  padding: 0 5rem;
  height: 60px;
  /* display: flex; */
  align-items: center;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-flow: column;
  width: 100%;
  @media (max-width: 1050px) {
    padding: 0 0.5rem;
  }
`;

export const Logo = styled.div`
  font-size: larger;
  font-weight: 700;
  /* background: gray; */
  grid-column: 1/2;
`;

export const NavItems = styled.ul`
  margin: 0 2rem;
  /* background-color: blue; */
  grid-column: 2/9;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 900px) {
    grid-column: 2/12;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  font-weight: 600;
  cursor: pointer;
`;
export const SearchSection = styled.div`
  /* background: yellow; */
  grid-column: 9/12;
  padding: 5px;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const SearchContainer = styled.div`
  background-color: white;
  height: 33px;
  border-radius: 25px;
  display: flex;
  border: 1px solid lightgray;
  input {
    border-radius: 25px 0 0 25px;
    height: 33px;
    padding: 0 20px;
    width: 82%;
    border: none;
    background: transparent;
    color: black;
    :focus {
      outline: none;
    }
  }
  div {
    width: 18%;
    background: ${(props) => props.theme.colors.pink};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 25px 25px 0;
    cursor: pointer;
    border: 0;
  }
`;

export const MenuIconContainer = styled.div`
  grid-column: 12;
  display: none;
  @media (max-width: 700px) {
    display: block;
    cursor: pointer;
  }
`;

///////////////////////////  For Small devices ////////////////////////

export const MobileMenu = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  background: red;
  height: 100vh !important;
  width: 295px;
  transition: all 1s !important;
  z-index: 100;
`;

export const MobileMenuHeader = styled.div`
  height: 50px;
  width: 100%;
  background: green;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;
