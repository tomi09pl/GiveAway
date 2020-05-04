import React from "react";

import CharitiesListFoundation from "./CharitiesListFoundation";

class HomeCharitiesListBottom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            organisation: 0
        }
    }

    // foundation = function(){
    //     return (
    //         <div>
    //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    //                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //                 Ut enim ad minim veniam, quis nostrud exercitation.
    //             </p>
    //             <div>jakas tam zbiorka</div>
    //             <div>jakas tam zbiorka</div>
    //             <div>jakas tam zbiorka</div>
    //         </div>
    //     )
    // };

    handleClick = (e) => {
        if (e.target.dataset.org === '0') {
            console.log('foundation!');
            this.setState({
                organisation:0
            })
        } else if (e.target.dataset.org === '1') {
            console.log('...:::NGO:::...');
            this.setState({
                organisation:1
            })
        } else if (e.target.dataset.org === '2') {
            console.log('locals');
            this.setState({
                organisation:2
            })
        }
    };

    render() {
        console.log(this.state.organisation);
        return(
            <div className='HomeCharitiesListBottom-wrapper'>
                <ul className='charitiesList'>
                    <li data-org={0} onClick={this.handleClick}>Foundations</li>
                    <li data-org={1} onClick={this.handleClick}>N G O</li>
                    <li data-org={2} onClick={this.handleClick}>Local collections</li>
                </ul>
                <CharitiesListFoundation/>
            </div>
        )
    }
}

export default HomeCharitiesListBottom;