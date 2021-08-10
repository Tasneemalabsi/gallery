import React from 'react';
import './HornedBeasts.css';
import HornedBeasts from './HornedBeasts';
import data from './data.json';


class Main extends React.Component {

    constructor(props) {
        super(props);
      this.state={
          show:false
      }
    }
    handleShow = () => {

        this.setState({show:!this.state.show});
    }

    render() {
        return (
            <div>
                {data.map((item, i) => {
                    return (
                    
                        <HornedBeasts
                            key={i}
                            title={item.title}
                            imageUrl={item.image_url}
                            description={item.description}
                            handleShow={}
                        />
                    )

                })}
            </div>
        )
    }
}

export default Main;