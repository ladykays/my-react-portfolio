import "./footer.css";

function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center justify-content-start">
          <span className="mb-3 mb-md-0 text-muted flex-nowrap">
            &copy; N. K. Siokwu 2023. All Rights Reserved
          </span>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-end">
          <ul className="nav list-unstyled d-flex">
            <li className="ms-3">
              <a
                href="mailto:ladykerrion@yahoo.com"
                className="connect text-muted"
              >
                <i className="fa-regular fa-envelope fa"></i>
              </a>
            </li>
            <li className="ms-3">
              <a
                href="https://github.com/ladykays"
                target="_blank"
                rel="noreferrer"
                className="connect text-muted"
              >
                <i className="fa-brands fa-github fa"></i>
              </a>
            </li>
            <li className="ms-3">
              <a
                href="https://www.linkedin.com/in/ndidiamaka-siokwu-67b1a6267/"
                target="_blank"
                rel="noreferrer"
                className="connect text-muted"
              >
                <i className="fa-brands fa-linkedin fa"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
