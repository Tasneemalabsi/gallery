import React from 'react';
import './HornedBeasts.css';
import HornedBeasts from './HornedBeasts';
import data from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';


class Main extends React.Component {

    constructor(props) {
        super (props);
        this.state = {noOfHorns:'',
        arr: data
    }
    }

    filter = async(event) => {
        let newArr = [];
        let noOfHorns = Number(event.target.value)

        
        if (noOfHorns) {
          data.filter(async (beast) => {
           
              if (beast.horns === noOfHorns){
                  newArr.push(beast)

              }
    
            await this.setState({arr:newArr})
          })

        }
        else {
          await  this.setState({arr:data})  
        }

      }
 render() {

        return (
            <div>
                <Form >
                <Form.Select aria-label="Default select example" name='noOfHorns' onChange={this.filter} >
                 <option>All</option>
                 <option name='option1' value="1">One</option>
                 <option name='option2' value="2">Two</option>
                 <option name='option3' value="3">Three</option>
                 <option name='option4' value="100">a hundred</option>
                 </Form.Select>
                 </Form>
                {this.state.arr.map((item, i) => {
                    return (
                        <HornedBeasts
                            key={i}
                            title={item.title}
                            imageUrl={item.image_url}
                            description={item.description}
                            horns={item.horns}
                        />
                    )

                })}
            </div>
        )
    }
}


export default Main;