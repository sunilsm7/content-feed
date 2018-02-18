import React from 'react';
import ReactDOM from 'react-dom';

class ContentFeed extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      'items': []
    }
  }
  componentDidMount(){
    this.getItems();
  }
  getItems(){
    fetch('http://127.0.0.1:8000/api/item/')
      .then(results => results.json())
      .then(results => this.setState({
        'items': results
      }));
  }

  render() {
    return(
      <div>
        <h2>Content Feed</h2>
        <ul>
          {this.state.items.map((item, index) =>{
            return (
              <div key={item.id.toString()}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            )
          })}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <ContentFeed />,
  document.getElementById('root')
  );