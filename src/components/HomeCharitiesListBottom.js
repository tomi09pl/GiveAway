import React from "react";

// import CharitiesListFoundation from "./CharitiesListFoundation";
import Pagination from "./Pagination";

class HomeCharitiesListBottom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            organisation: 0
        };

        //objects for Pagination component
        this.foundations =
            {
                headerDesc: 'In our database you can find only verified organisations, which we cooperate with. ' +
                    'You can check what they do, who they help and what are their needs. ',
                content:[
            {
                title: 'Foundation: "Health First"',
                description: 'Vision & Mission: Helping people in difficult health and life situation.',
                tags: ['clothes', 'food', 'appliances', 'furniture', 'toys']
            },
            {
                title: 'Foundation: "Our Children"',
                description: 'Vision & Mission: Support for vulnerable children',
                tags: ['clothes', 'furniture', 'toys']
            },
            {
                title: 'Foundation: "Shelter"',
                description: 'Vision & Mission: Support for people without permanent household.',
                tags: ['clothes', 'food', 'warm blankets', 'sleeping bags']
            },
            {
                title: 'Foundation: "Foundation 4"',
                description: 'Vision & Mission: Lorem ipsum dolor sit amet, consectetur adipisicing.',
                tags: ['item1', 'item2', 'item3', 'item4']
            },
            {
                title: 'Foundation: "Foundation 5"',
                description: 'Vision & Mission: Lorem ipsum dolor sit amet, consectetur adipisicing.',
                tags: ['item1', 'item2', 'item3', 'item4']
            },
            {
                title: 'Foundation: "Foundation 6"',
                description: 'Vision & Mission: Lorem ipsum dolor sit amet, consectetur adipisicing.',
                tags: ['item1', 'item2', 'item3', 'item4']
            },
            {
                title: 'Foundation: "Foundation 7"',
                description: 'Vision & Mission: Lorem ipsum dolor sit amet, consectetur adipisicing.',
                tags: ['item1', 'item2', 'item3', 'item4']
            },
            {
                title: 'Foundation: "Foundation 8"',
                description: 'Vision & Mission: Lorem ipsum dolor sit amet, consectetur adipisicing.',
                tags: ['item1', 'item2', 'item3', 'item4']
            },
            {
                title: 'Foundation: "Foundation 9"',
                description: 'Vision & Mission: Lorem ipsum dolor sit amet, consectetur adipisicing.',
                tags: ['item1', 'item2', 'item3', 'item4']
            }
            ]};
        this.NGO =
            {
                headerDesc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
                    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
                    'Ut enim ad minim veniam, quis nostrud exercitation.',
                content: [
            {
                title: 'Organisation: "Organisation 1"',
                description: 'Vision & Mission: Quis varius quam quisque id diam vel quam elementum pulvinar.',
                tags: ['Egestas', 'sed', 'tempus']
            },
            {
                title: 'Organisation: "Organisation 2"',
                description: 'Vision & Mission: Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.',
                tags: ['Ut', 'aliquam', 'purus', 'sit', 'amet']
            },
            {
                title: 'Organisation: "Organisation 3"',
                description: 'Vision & Mission: Scelerisque in dictum non consectetur a erat nam.',
                tags: ['Mi', 'quis', 'hendrerit', 'dolor']
            },
            {
                title: 'Organisation: "Organisation 4"',
                description: 'Vision & Mission: Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.',
                tags: ['Ut', 'aliquam', 'purus', 'sit', 'amet']
            },
            {
                title: 'Organisation: "Organisation 5"',
                description: 'Vision & Mission: Scelerisque in dictum non consectetur a erat nam.',
                tags: ['Mi', 'quis', 'hendrerit', 'dolor']
            },
            {
                title: 'Organisation: "Organisation 6"',
                description: 'Vision & Mission: Quis varius quam quisque id diam vel quam elementum pulvinar.',
                tags: ['Egestas', 'sed', 'tempus']
            }
        ]};
        this.localCollection =
            {
            headerDesc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
                'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
                'Ut enim ad minim veniam, quis nostrud exercitation.',
            content: [
            {
                title: 'Collection: "Collection 1"',
                description: 'Vision & Mission: Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.',
                tags: ['Ut', 'aliquam', 'purus', 'sit', 'amet']
            },
            {
                title: 'Collection: "Collection 2"',
                description: 'Vision & Mission: Scelerisque in dictum non consectetur a erat nam.',
                tags: ['Mi', 'quis', 'hendrerit', 'dolor']
            },
            {
                title: 'Collection: "Collection 3"',
                description: 'Vision & Mission: Quis varius quam quisque id diam vel quam elementum pulvinar.',
                tags: ['Egestas', 'sed', 'tempus']
            }
        ]};
        /////////////////////////////////////////////
    }

    handleClick = (selected) => {
            this.setState({
                organisation:selected
    })};

    render() {
        let chosenData;
        if (this.state.organisation === 0 ){
            chosenData = <Pagination data={this.foundations}/>
        } else if (this.state.organisation === 1){
            chosenData = <Pagination data={this.NGO}/>
        } else if (this.state.organisation === 2){
            chosenData = <Pagination data={this.localCollection}/>
        };

        return(
            <div className='HomeCharitiesListBottom-wrapper'>
                <ul className='charitiesList'>
                    <li onClick={()=>this.handleClick(0)}>Foundations</li>
                    <li onClick={()=>this.handleClick(1)}>N G O</li>
                    <li onClick={()=>this.handleClick(2)}>Local collections</li>
                </ul>
                {chosenData}
            </div>
        )
    }
}

export default HomeCharitiesListBottom;