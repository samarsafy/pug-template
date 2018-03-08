import React from 'react';
import ReactDOM from 'react-dom';


class Product extends React.Component {

  render() {
    return (
      <div>
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">{this.props.data.name}</h6>
            <small className="text-muted">Release: 2017</small>
          </div>
          <div className="d-flex flex-column">
            <span className="text-muted d-flex justify-content-center align-items-baseline">
              <button className="btn btn-sm btn-light">-</button>
              <button className="btn btn-sm btn-light">+</button>
            </span>
            <span className={"badge "+ (this.props.data.amount > 0 ? "badge-primary" : "")}>{this.props.data.amount}</span>
           <span className="badge">{this.props.data.price}</span>
          
          </div>
        </li>

      </div>
    );
  }
}


export default Product;