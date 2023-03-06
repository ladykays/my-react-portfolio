//import { Callout } from "react-foundation";
import Footer from "../layouts/Footer/Footer";
import { useState } from "react"; 
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
  callout: {
    width: "40%",
    backgroudColor: "gray",
    padding: "20px "   
  },
  success: {
    textAlign: "center",
    color: "lightseagreen",
    padding: "10px 0",
  },
};

function Contact() {
  const [success, setSuccess] = useState(false); //set default success state to false
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    access_key: "83dfac15-0283-4f4a-b449-b232d0b873fd",
  });

  //Callback functions
  const handleChange = (event) => {
    //use a setter to pass in a new object
    setFormData({
      //spread all the previous formdata properties and update/overwrite the current property that the user is typing into
      ...formData,
      [event.target.name]: event.target.value
    });
    //console.log(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    //console.log("Form submitted!");
    const data = JSON.stringify(formData); //converts form data to a string

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: data
    })
      // When the message succeeds in sending, then this is called
      .then(res => res.json()) 
      .then(data => {
        setSuccess(true);
        setFormData({
          ...formData,
          name: "",
          email: "",
          message: "",
        });

        // Makes the info about the success of the submission disappear after 3 seconds
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch(err => console.log(err));
  };

  return ( 
    <>
      <h1 style={styles.header}>Contact</h1>

      <div className="container" style={styles.container}>
        <form onSubmit={handleFormSubmit}>
          <input 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            type="text" 
            placeholder="Please enter your Name" 
          />
          <input 
            name="email" 
            value={formData.email}
            onChange={handleChange} 
            type="text" 
            placeholder="Enter your Email Address" 
          />
          <textarea 
            name="message" 
            value={formData.message}
            onChange={handleChange} 
            placeholder="Enter your Message..." 
            cols="30" 
            rows="10">
          </textarea>
          <input 
            type="submit" 
            class="button btn" 
            value="Submit" 
          />

        </form>
        

        <div className="callout small" style={styles.callout}>
          <h3>Connect with me...</h3>
          <p>
            <a href="mailto: ladykerrion@yahoo.com" className="connect">
              <i className="fa-regular fa-envelope"></i> Email
            </a>
          </p>
          <p>
            <a href="https://github.com/ladykays" target="_blank" rel="noreferrer" className="connect">
              <i className="fa-brands fa-github"></i> GitHub
            </a>
          </p>
          <p>
            <a href="#" className="connect">
              <i className="fa-brands fa-linkedin"></i> Linkdin
            </a>
          </p>
        </div> 
      </div> 
      {success && <p style={styles.success}>Form submitted successfully!</p>}

      <Footer />
    </> 
  )
}

export default Contact;