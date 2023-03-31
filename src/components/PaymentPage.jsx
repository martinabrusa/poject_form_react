import React from "react";
import { Component } from "react";
import { Modal, Button } from "react-bootstrap";

export default class PaymentPage extends Component {
  handleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

//Validazioni\\
  validateField() {
    if (document.getElementById("name").value === "") {
      alert("Please insert the name");
      document.getElementById("name").focus();
      return false;
    }

    const alphaExp = /^[A-Za-z]+$/;
    const name = document.getElementById("name").value;
    if (!name.match(alphaExp)) {
      alert("Please enter only alphabets in the name");
      return false;
    }

    if (document.getElementById("surname").value === "") {
      alert("Please insert the surname");
      document.getElementById("surname").focus();
      return false;
    }

    const surname = document.getElementById("surname").value;
    if (!surname.match(alphaExp)) {
      alert("Please enter only alphabets in the surname");
      return false;
    }

    if (document.getElementById("address").value === "") {
      alert("Please insert the address");
      document.getElementById("address").focus();
      return false;
    }

    const addressExp = /^[(a-zA-Z)(0-9) ]*$/;

    const address = document.getElementById("address").value;
    if (!address.match(addressExp)) {
      alert("Please enter only alphabets and numbers in the address field");
      return false;
    }
    if (document.getElementById("city").value === "") {
      alert("Please insert the city");
      document.getElementById("city").focus();
      return false;
    }

    const city = document.getElementById("city").value;
    if (!city.match(alphaExp)) {
      alert("Please enter only alphabets in the city");
      return false;
    }

    if (document.getElementById("country").value === "") {
      alert("Please insert the country");
      document.getElementById("country").focus();
      return false;
    }

    const country = document.getElementById("country").value;
    if (!country.match(alphaExp)) {
      alert("Please enter only alphabets in the country");
      return false;
    }

    if (document.getElementById("postCode").value === "") {
      alert("Please insert the post code");
      document.getElementById("postcode").focus();
      return false;
    }

    const numExp = /^[0-9]*$/;
    const postCode = document.getElementById("postCode").value;
    if (!postCode.match(numExp)) {
      alert("Please enter only alphabets in the post code");
      return false;
    }

    const postCodeExp = /^\d{5}$/;
    const postCodeDigits = document.getElementById("postCode").value;
    if (!postCodeDigits.match(postCodeExp)) {
      alert("Please enter a valid post code with 5 digits.");
      return false;
    }

    const shipping = document.getElementById("shipping").value;
    if (shipping === "0") {
      alert("Please select a shipping option");
      return false;
    }
  }

  render() {
    console.log(this.PaymentPage);

    return (


      <div className="container-fluid mt-5  first-container">
       

        

        <div className="second-container mt-5  ">
          <div className="row">
            <p className="underline mt-3 ">Customer info</p>
            <div className="col-md-4 col-lg-5   ">
              <label htmlFor="inputName" className="form-label bold   ">
                First Name *
              </label>
              <input
                type="text"
                className="form-control  "
                id="name"
                placeholder="Name"
              ></input>
            </div>
            <div className="col-md-6 col-lg-5">
              <label htmlFor="inputSurname" className="form-label bold ">
                Last Name *
              </label>
              <input
                type="text"
                className="form-control"
                id="surname"
                placeholder="Surname"
              ></input>
            </div>
          </div>

          <div className="row ">
            <div className="col-md-12 col-lg-11">
              <label htmlFor="inputCompany" className="form-label bold ">
                Company
              </label>
              <input
                type="text"
                className="form-control "
                id="company"
                placeholder="Company Name (Optional)"
              ></input>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-5">
              <label htmlFor="inputAddress" className="form-label bold   ">
                Address *
              </label>
              <input
                type="text"
                className="form-control   "
                id="address"
                placeholder="Street"
              ></input>
            </div>
            <div className="col-md-6 col-lg-5">
              <label htmlFor="inputCity" className="form-label bold">
                City *
              </label>
              <input
                type="text"
                className="form-control"
                id="city"
                placeholder="Turin"
              ></input>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-5">
              <label htmlFor="inputCountry" className="form-label bold   ">
                Country *
              </label>
              <input
                type="text"
                className="form-control  "
                id="country"
                placeholder="United States"
              ></input>
            </div>
            <div className="col-md-6 col-lg-5">
              <label htmlFor="inputPostCOde" className="form-label bold">
                Post Code *
              </label>
              <input
                type="text"
                className="form-control"
                id="postCode"
                placeholder="00000"
              ></input>
            </div>
          </div>

          <div className="row ">
            <p className="underline   ">Shipping method</p>
            <div className="col-md-12 col-lg-11">
              <label htmlFor="inputCompany" className="form-label bold ">
                Select Shipping Option *
              </label>
              <select
                name="shippingMethod"
                className="form-select "
                id="shipping"
              >
                <option>2-5 Days premium delivery</option>
                <option>3-7 Days express delivery</option>
                <option>7-14 Days standard delivery</option>
              </select>
            </div>
          </div>


        

          <div class="d-grid gap-2">
            <Button
              type="submit"
              variant="dark"
              className="mt-5 mb-5 send"
              onClick={() => {
                this.handleModal();
                this.validateField();
              }}
            >
              Continue to payment {"\u279C"}
            </Button>
            <Modal show={this.state.showModal} onHide={this.handleModal}>
              <Modal.Header closeButton>
                <Modal.Title>Payment Modal</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>This is the payment modal</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleModal}>
                  Close
                </Button>
                <Button variant="primary" onClick={this.handleModal}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>




        <div className="container-fluid third-container mt-5 ">
          <div className=" row  ">
            <div className="col-md-12 col-md-6 ">
              <h2>Summary</h2>
              <br />
              <br />

              <div className="table-responsive">
                <table className="text-center ">
                  <tr style={{ fontSize: "90%" }}>
                    <td style={{ textAlign: "left", width: "100%" }}>
                      Item subtotal
                    </td>
                    <td style={{ textAlign: "right", width: "100%" }}>
                      $56.00
                    </td>
                  </tr>
                  <br />
                  <tr style={{ fontSize: "90%" }}>
                    <td style={{ textAlign: "left" }}>Shipping</td>
                    <td
                      className="mx-auto d-block"
                      style={{ textAlign: "right" }}
                    >
                      Free Shipping
                    </td>
                  </tr>
                  <br />
                  <tr style={{ fontSize: "90%" }}>
                    <td style={{ textAlign: "left" }}>VAT</td>
                    <td style={{ textAlign: "right" }}>$0.00</td>
                  </tr>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />

                  <tr style={{ fontSize: "4vw" }}>
                    <td style={{ textAlign: "left" }}>
                      <h3>Total</h3>
                    </td>
                    <td style={{ textAlign: "right" }}>
                      <h3>$56.00</h3>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
