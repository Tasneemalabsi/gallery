import React from 'react';
import './HornedBeasts.css';



class HornedBeasts extends React.Component {
    render () {
        console.log(this.props);
        return (
            <div class='container'>
                <h2>{this.props.title} </h2>
                <img class='imagedesign' src={this.props.imageUrl} alt='' title='' />
                <p>{this.props.description}</p>
                </div>
        );
    };
};

export default HornedBeasts;