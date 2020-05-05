import React, {Component} from 'react';
import Header from "./Header";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeCharitiesList from "./HomeCharitiesList";
import HomeContact from "./HomeContact";
import Footer from "./Footer";

class Home extends Component {

    render() {
        return (
            <>
                <Header/>
                <HomeThreeColumns/>
                <HomeSimpleSteps/>
                <HomeAboutUs/>
                <HomeCharitiesList/>
                <HomeContact/>
                <Footer/>
            </>
        )
    }
}


export default Home;