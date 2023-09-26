import styled from 'styled-components';

export const NavBar = styled.nav`
  background-color: darkBlue;
  color: white;
  padding: 10px;

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-around;

    @media (max-width: 900px) {
      flex-direction: column;
    }

    li {
      margin: 0;
      padding: 0;
    }

    a {
      text-decoration: none;
      color: white;
      cursor:pointer;
      font-size:18px
    }

    a:hover {
        color: yellow; 
        transition-delay: 0.3s;
      }
  }
`;