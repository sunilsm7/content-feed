import React from 'react';
import ReactDOM from 'react-dom';

class ContentFeed extends React.Component{
  componentDidMount(){
    this.getItems();
  }
  getItems(){
    fetch('http://127.0.0.1:8000/api/item/')
      .then(results => results.json())
      .then(({results}) => console.log(results));
  }

  render() {
    return(
      <h2>Content Feed</h2>
    );
  }
}

ReactDOM.render(
  <ContentFeed />,
  document.getElementById('root')
  );