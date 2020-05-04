import React, {Component} from 'react';
import Header from "./Header";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeCharitiesList from "./HomeCharitiesList";

class Home extends Component {

    render() {
        return (
            <>
                <Header/>
                <HomeThreeColumns/>
                <HomeSimpleSteps/>
                <HomeAboutUs/>
                <HomeCharitiesList/>
            </>
        )
    }
}


export default Home;