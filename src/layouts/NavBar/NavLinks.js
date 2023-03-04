import { Menu, MenuItem } from "react-foundation";
import { NavLink } from 'react-router-dom'; //This stops page reload when a link is clicked
import "./style.css";

//TODO: Check the isActive function. It's not working 

function NavLinks(props) {
  return (
    <Menu>
      <MenuItem>
        {/* NavLink replaces the <a> tag because of the use of NavLink component*/}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >Home</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink
          to="Work"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >Work</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink
          to="About"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >About</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink
          to="Contact"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >Contact</NavLink>
      </MenuItem>
  </Menu>
  )
}

export default NavLinks;
