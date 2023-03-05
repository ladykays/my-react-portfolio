import { Callout } from "react-foundation";
import "./style.css";

const styles = {
  header: {
    textAlign: "center",
    margin: "20px 0",
  },
  container: {
    width: "100%",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-around",
  },

  submitBtn: {
    color: "#fff",
    cursor: "pointer",
    backgroudColor: "red",//this didnt work so added it in the css file
  },
  callout: {
    width: "40%",
    backgroudColor: "gray",
    padding: "0 20px",
    border: "none",
  },
};

function Contact() {
  return ( 
    <>
      <h1 style={styles.header}>Contact</h1>
      <div className="container" style={styles.container}>
      <form>
        <input type="text" placeholder="Please enter your Name" />
        <input type="text" placeholder="Enter your Email Address" />
        <textarea placeholder="Enter your Message" cols="30" rows="10"></textarea>
        <input type="submit" class="button btn" value="Submit" style={styles.submitBtn}/>
      </form>

      <Callout className="callout small" style={styles.callout}>
        <h3>Connect with me...</h3>
        <p>
          <a href="mailto: ladykerrion@yahoo.com" className="connect">
            <i class="fa-regular fa-envelope"></i> Email
          </a>
        </p>
        <p>
          <a href="https://github.com/ladykays" target="_blank" rel="noreferrer" className="connect">
            <i class="fa-brands fa-github"></i> GitHub
          </a>
        </p>
        <p>
          <a href="#" className="connect">
            <i class="fa-brands fa-linkedin"></i> Linkdin
          </a>
        </p>
      </Callout> 
    </div> 
  </> 
  )
}

export default Contact;