import React from 'react';
import './HornedBeasts.css';
import HornedBeasts from './HornedBeasts';

let imageArray =[{
    "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
    "title": "UniWhal",
    "description": "A unicorn and a narwhal nuzzling their horns",
    "keyword": "narwhal",
    "horns": 1
  },

  {
    "image_url": "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
    "title": "Rhino Family",
    "description": "Mother (or father) rhino with two babies",
    "keyword": "rhino",
    "horns": 2
  },
  
  {
    "image_url": "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
    "title": "Unicorn Head",
    "description": "Someone wearing a creepy unicorn head mask",
    "keyword": "unicorn", 
    "horns": 1
}]

class Main extends React.Component {
    render() {
        return (
            <div class='mainContainer'>
               <HornedBeasts title='mouse' imageUrl='https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg' description='a cute mouse'/>
                <HornedBeasts title='lion' imageUrl='https://ichef.bbci.co.uk/news/976/cpsprodpb/14AC0/production/_100827648_f4a7747f-67bc-4a40-af1b-6d993a2f5430.jpg' description='beast'/>
                <HornedBeasts title='cat' imageUrl='https://www.news-medical.net/image.axd?picture=2021%2F7%2Fshutterstock_1117114010.jpg' description='clingy'/>
            </div>
        )
    }
}

export default Main;