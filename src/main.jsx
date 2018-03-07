import 'bootstrap';
import $ from 'jquery';

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
constructor(props){
  super(props);
  this.state = JSON.parse( localStorage.getItem('react-cart') ) || {
    data:
    [
      {
        "id":0,
        "name":"JavaScript: The Definitive Guide, 6th Edition",
        "release": "September 2018",
        "amount": 1,
        "price":"2.99"
      },
      
      {
        "id":1, 
        "name":"Ruby on Rails: Up and Running",
        "release": "March 2018",
        "amount":1,
        "price":"38.99"
      }
    ],
}
}

render() {
  return (
    this.state.data.map((person, i) => <Product data={person} />)
  );
}
}
class Product extends React.Component {

  render() {
    return (
      <div>
          <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 className="my-0">{ this.props.data.name }</h6>
              <small className="text-muted">Release: 2017</small>
            </div>
            <div className="d-flex flex-column">
              <span className="text-muted d-flex justify-content-center align-items-baseline">
                <button className="btn btn-sm btn-light">-</button>
                <button className="btn btn-sm btn-light">+</button>
              </span>
              <span className="badge">
                amout</span>
            </div>
          </li>
          
        </div>
    );
  }
}



ReactDOM.render(<App/> , document.getElementById('root'));