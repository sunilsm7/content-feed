import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Row, Col, Card, CardBlock, CardTitle, CardText
} from 'reactstrap';
import  './index.css';

class ContentItem extends React.Component {
  render() {
    return (
      <Row className="ContentItem">
        <Col xs="6">
          <Card>
            <CardBlock>
              <CardTitle>
                {this.props.item.title}
              </CardTitle>
              <CardText>
                {this.props.item.description}
              </CardText>
            </CardBlock>
          </Card>
        </Col>
      </Row>
    )
  }
}


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
              <ContentItem item={item} key={item.id} />
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