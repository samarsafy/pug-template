import React from 'react';
import Product from './Product.jsx';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(localStorage.getItem('react-cart')) || {
      data: [
        {
          "id": 0,
          "name": "JavaScript: The Definitive Guide, 6th Edition",
          "release": "September 2018",
          "amount": 1,
          "price": "2.99"
        }, {
          "id": 1,
          "name": "Ruby on Rails: Up and Running",
          "release": "March 2018",
          "amount": 1,
          "price": "38.99"
        }
      ]
    };
  }

  render() {
    return(
      <div>
        <Header/>
        {this.state.data.map((person, i) => <Product data={person}/>)};
        <Footer/>
      </div>
    )
  }
}


ReactDOM.render(<App/>, document.getElementById('root'));
