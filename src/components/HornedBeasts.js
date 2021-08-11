import React from 'react';
import './HornedBeasts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';






class HornedBeasts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            votesNumber: 0,
            show:false
        }
      }
      handleShow = () => {
  
          this.setState({show:!this.state.show});
      }

   
    
    
    
    editNumberOfVotes = () => {
        console.log(this);

        this.setState({
            votesNumber: this.state.votesNumber + 1
        })
    }
    
    render () {
       
  return (
    <>
    
    <Card >
<Card.Img variant="top" src={this.props.imageUrl}
  alt='' title='' onClick={this.handleShow} style={{ width: '18rem' }}/>
<Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
    ❤️ favorites = {this.state.votesNumber} <br/>
{this.props.description}
    </Card.Text>
    <Button onClick={this.editNumberOfVotes} variant="primary">Vote</Button>
</Card.Body>
</Card>
<Modal show={this.state.show} >
    <Modal.Header closeButton={true} onClick={()=>{this.handleShow()}}>
      <Modal.Title>{this.props.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body><img width='200px' height='200px' variant="top" src={this.props.imageUrl}
alt='' title='' /></Modal.Body>
    <Modal.Body>{this.props.description}</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={()=>{this.handleShow()}}>
        Close
      </Button>
     
    </Modal.Footer>
  </Modal>
  

    </>
  );
}

               
        
    };


export default HornedBeasts;