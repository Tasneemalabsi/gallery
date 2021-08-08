import React from 'react';
import HornedBeasts from './HornedBeasts';

class Main extends React.Component {
    render() {
        return (
            <div>
                <HornedBeasts title='mouse' imageUrl='https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg' description='a cute mouse'/>
                <HornedBeasts title='lion' imageUrl='https://ichef.bbci.co.uk/news/976/cpsprodpb/14AC0/production/_100827648_f4a7747f-67bc-4a40-af1b-6d993a2f5430.jpg' description='beast'/>
                <HornedBeasts title='cat' imageUrl='https://www.news-medical.net/image.axd?picture=2021%2F7%2Fshutterstock_1117114010.jpg' description='clingy'/>
            </div>
        )
    }
}

export default Main;