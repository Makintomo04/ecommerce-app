import FormInput from "../form-input/FormInput";
import Button from "../button/Button";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { withStyles } from "@material-ui/core/styles/withStyles";
import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setPromo } from "../../redux/cart/cart.actions";

const PromoInput = ({ promoCode, setPromo }) => {
  const [promoInput, setPromoInput] = useState("");
  const handleChange = (e) => {
    setPromoInput(e.target.value);
  };
  const handleSetPromo = () => {
    promoInput == "ABC123" && setPromo(promoInput);
  };
  {
    // console.log(promoCode);
  }
  return (
    <div className="promoInput">
      <Accordion style={{ boxShadow: "none" }}>
        <AccordionSummary
          style={{
            padding: "10px 20px",
            background: "#cccccc",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <span>PROMO / STUDENT CODE OR VOUCHERS</span>{" "}
          <i style={{ marginLeft: "auto" }} class="fas fa-chevron-down"></i>
        </AccordionSummary>
        <AccordionDetails
          style={{
            padding: "30px 20px",
            background: "#f2f2f2",
            display: "flex",
           
          }}
        >
          <div className="accord" style={{ display: "flex", flexDirection:"column",
            width:"100%" }}>
            <FormInput
              label="Promo Code"
              // placeholder="example@domain.com"
              // required={true}
              type="recoverEmail"
              name="recoverEmail"
              value={promoInput}
              handleChange={handleChange}
            />
            {promoCode == "ABC123" && (
              <span style={{ color: "green", margin: "0 0 20px" }}>
                Your discount has been applied.
              </span>
            )}
            {/* : ( */}
            {/* <span style={{ color: "red" }}> */}
            {/* Oops! The code you entered doesn't exist. Please check and try */}
            {/* again. */}
            {/* </span> */}
            {/* ) */}
            <span style={{ color: "#444" }}>Psst try "ABC123"</span>
            <Button type="button" onClick={handleSetPromo}>
              APPLY CODE
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
const mapStateToProps = ({ cart }) => ({
  promoCode: cart.promoCode,
});
const mapDispatchToProps = (dispatch) => ({
  setPromo: (promo) => dispatch(setPromo(promo)),
});
export default connect(mapStateToProps, mapDispatchToProps)(PromoInput);
