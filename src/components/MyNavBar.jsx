import { NavBar } from "./MyNavBar.styled";

function MyNavBar() {

    return (
        <NavBar>
          <ul>
            <li><a >Home</a></li>
            <li><a >About us</a></li>
            <li><a >Contacts</a></li>
            <li><a >Feedback</a></li>
          </ul>
        </NavBar>
      );
}

export default MyNavBar;