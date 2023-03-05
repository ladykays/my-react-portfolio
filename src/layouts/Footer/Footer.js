//import { Grid, Cell,Menu,MenuItem } from "react-foundation";
//my custom style for the footer section
import "./footer.css";



function Footer() {

  return (
    <>
      <footer className="social-footer">
          <div className="social-footer-icons">
            <ul className="menu simple">
              <li>
                <a href="mailto: ladykerrion@yahoo.com" className="connect">
                  <i className="fa-regular fa-envelope fa"></i> 
                </a>
              </li>
              <li>
                <a href="https://github.com/ladykays" target="_blank" rel="noreferrer" className="connect">
                  <i className="fa-brands fa-github fa"></i> 
                </a>
              </li>
              <li>
                <a href="#" className="connect">
                  <i className="fa-brands fa-linkedin fa"></i> 
                </a>
              </li>
            </ul>
          </div>
          <div className="copyright">
              © Ndidiamaka Siokwu 2023. All Rights Reserved
            </div>
        </footer>

    </>
  )
}

export default Footer;