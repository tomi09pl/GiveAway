import React , {Component} from 'react';

// import backgroundImg from '../assets/3ColumnsBackground.png';


class HomeThreeColumns extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bagsCount: 10,
            charCount: 23, //charities counter
            collCount: 58 //collections counter
        }
    };

    render() {
        return (
            <div className='HomeThreeColumns'>
                <div className="column1">
                    <div className="threeColumns-counter">{this.state.bagsCount}</div>
                    <h2>bags donated</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem dolorum eaque fugit magnam, obcaecati sequi sint?</p>
                </div>
                <div className="column2">
                    <div className="threeColumns-counter">{this.state.charCount}</div>
                    <h2>charities supported</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem dolorum eaque fugit magnam, obcaecati sequi sint?</p>
                </div>
                <div className="column3">
                    <div className="threeColumns-counter">{this.state.collCount}</div>
                    <h2>collections organised</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem dolorum eaque fugit magnam, obcaecati sequi sint?</p>
                </div>
            </div>
        )
    }
}

export default HomeThreeColumns;