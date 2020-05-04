import React, {Component} from 'react';
import Header from "./Header";
import HomeThreeColumns from "./HomeThreeColumns";

class Home extends Component {

    render() {
        return (
            <>
                <Header/>
                <HomeThreeColumns/>
            </>
        )
    }
}


export default Home;