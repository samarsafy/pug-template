import React from 'react';
import Product from './Product.jsx';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Form from './Form.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
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
      ],
      headerdata: {
        "title": "hallo from React",
        "desc": "Below is an example from built entirely with Bootstrap's form controls.Each required form group has a validation state that can be triggered by attempting to submit the form without completting it."
          
        }
      }
    };

  render() {
    return(
      <div>
        <Header headerdata={this.state.headerdata}/>
        {this.state.data.map((person, i) => <Product key={i} data={person}/>)};
        <Form/>
        <Footer/>
      </div>
    );
  }
}


ReactDOM.render(<App/>, document.getElementById('root'));
