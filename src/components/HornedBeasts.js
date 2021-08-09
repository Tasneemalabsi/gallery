import React from 'react';
import './HornedBeasts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'





class HornedBeasts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            votesNumber: 0
        }
    }

    editNumberOfVotes = () => {
        console.log(this);

        this.setState({
            votesNumber: this.state.votesNumber + 1
        })
    }
    render () {
        console.log(this.props);
        return (
            <div >
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.imageUrl}
                      alt='' title='' />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                        ❤️ favorites = {this.state.votesNumber} <br/>
                    {this.props.description}
                        </Card.Text>
                        <Button onClick={this.editNumberOfVotes} variant="primary">Vote</Button>
                    </Card.Body>
                </Card>
                </div>
        );
    };
};

export default HornedBeasts;