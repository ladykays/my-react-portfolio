import { Menu, MenuItem } from "react-foundation";

function NavBar() {
  return (
    <Menu>
      <MenuItem title><a href="/">Home</a></MenuItem>
      <MenuItem title><a href="work">Work</a></MenuItem>
      <MenuItem title><a href="about">About</a></MenuItem>
      <MenuItem title><a href="contact">Contact</a></MenuItem>
    </Menu>
  )
}

export default NavBar;