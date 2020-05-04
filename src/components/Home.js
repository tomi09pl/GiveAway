import React, {Component} from 'react';
import Header from "./Header";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeAboutUs from "./HomeAboutUs";

class Home extends Component {

    render() {
        return (
            <>
                <Header/>
                <HomeThreeColumns/>
                <HomeSimpleSteps/>
                <HomeAboutUs/>
            </>
        )
    }
}


export default Home;