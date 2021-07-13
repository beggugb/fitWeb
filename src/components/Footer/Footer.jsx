import React from "react";
import { Container } from "reactstrap";
class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container fluid>         
          <div className="copyright text-dark">
            © {new Date().getFullYear()} made with{" "}
            <i className="fab fa-linux" /> by{" "}
            <a
              href="javascript:void(0)"
              rel="noopener noreferrer"
              target="_blank"
            >
              Beggu Gnu
            </a>{" "}
            Software Developers.
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
