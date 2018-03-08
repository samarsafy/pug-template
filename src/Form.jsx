import React from 'react';

class Form extends React.Component {

  render() {
    return (
      <form className="needs-validation" noValidate="">
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="firstName">First name</label>
            <input className="form-control" id="firstName" type="text" placeholder="" value="" required=""/>
              <div className="invalid-feedback">Valid first name is required.</div>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="lastName">Last name</label>
              <input className="form-control" id="lastName" type="text" placeholder="" value="" required=""/>
                <div className="invalid-feedback">Valid last name is required.</div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="username">Username</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <input className="form-control" id="username" type="text" placeholder="Username" required=""/>
                  <div className="invalid-feedback w-100">Your username is required.</div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email">Email
                  <span className="text-muted">(Optional)</span>
                </label>
                <input className="form-control" id="email" type="email" placeholder="you@example.com"/>
                  <div className="invalid-feedback">Please enter a valid email address for shipping updates.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="address">Address</label>
                  <input className="form-control" id="address" type="text" placeholder="1234 Main St" required=""/>
                    <div className="invalid-feedback">Please enter your shipping address.</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="address2">Address 2
                      <span className="text-muted">(Optional)</span>
                    </label>
                    <input className="form-control" id="address2" type="text" placeholder="Apartment or suite"/></div>
                    <div className="row">
                      <div className="col-md-5 mb-3">
                        <label htmlFor="country">Country</label>
                        <select className="custom-select d-block w-100" id="country" required="">
                          <option value="">Choose...</option>
                          <option>United States</option>
                        </select>
                        <div className="invalid-feedback">Please select a valid country.</div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="state">State</label>
                        <select className="custom-select d-block w-100" id="state" required="">
                          <option value="">Choose...</option>
                          <option>California</option>
                        </select>
                        <div className="invalid-feedback">Please provide a valid state.</div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <label htmlFor="zip">Zip</label>
                        <input className="form-control" id="zip" type="text" placeholder="" required=""/>
                          <div className="invalid-feedback">Zip code required.</div>
                        </div>
                      </div>
                      <hr className="mb-4"/>
                        <div className="custom-control custom-checkbox">
                          <input className="custom-control-input" id="same-address" type="checkbox"/>
                            <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input className="custom-control-input" id="save-info" type="checkbox"/>
                              <label className="custom-control-label" htmlFor="save-info">Save this information for next time</label>
                            </div>
                            <hr className="mb-4"/>
                              <h4 className="mb-3">Payment</h4>
                              <div className="d-block my-3">
                                <div className="custom-control custom-radio">
                                  <input className="custom-control-input" id="credit" name="paymentMethod" type="radio" checked="" required=""/>
                                    <label className="custom-control-label" htmlFor="credit">Credit card</label>
                                  </div>
                                  <div className="custom-control custom-radio">
                                    <input className="custom-control-input" id="debit" name="paymentMethod" type="radio" required=""/>
                                      <label className="custom-control-label" htmlFor="debit">Debit card</label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                      <input className="custom-control-input" id="paypal" name="paymentMethod" type="radio" required=""/>
                                        <label className="custom-control-label" htmlFor="paypal">Paypal</label>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-6 mb-3">
                                        <label htmlFor="cc-name">Name on card</label>
                                        <input className="form-control" id="cc-name" type="text" placeholder="" required=""/>
                                          <small className="text-muted">Full name as displayed on card</small>
                                          <div className="invalid-feedback">Name on card is required</div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                          <label htmlFor="cc-number">Credit card number</label>
                                          <input className="form-control" id="cc-number" type="text" placeholder="" required=""/>
                                            <div className="invalid-feedback">Credit card number is required</div>
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="col-md-3 mb-3">
                                            <label htmlFor="cc-expiration">Expiration</label>
                                            <input className="form-control" id="cc-expiration" type="text" placeholder="" required=""/>
                                              <div className="invalid-feedback">Expiration date required</div>
                                            </div>
                                            <div className="col-md-3 mb-3">
                                              <label htmlFor="cc-expiration">CVV</label>
                                              <input className="form-control" id="cc-cvv" type="text" placeholder="" required=""/>
                                                <div className="invalid-feedback">Security code required</div>
                                              </div>
                                            </div>
                                            <hr className="mb-4"/>
                                              <button className="btn btn-primary btn-lg btn-block" type="submit"> Continue to checkout</button>

</form>
   );
}
}

export default Form;
