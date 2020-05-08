import React from "react";

export default class Pagination extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            orgArr: this.props.data,
            currentPage: 1,
            recordsPerPage: 3
        };

        console.log(this.state.orgArr);
    }

    componentDidUpdate(prevProps, prevState, _) {
        if(prevProps.data !== this.props.data) {
            this.setState({orgArr: this.props.data, currentPage: 1});
        }
    }

    handleClick = (e, i) => {
        this.setState({
            currentPage: i
        })
    };

    render() {
        const {orgArr, currentPage, recordsPerPage} = this.state;

        const indexOfLast = currentPage * recordsPerPage;
        const indexOfFirst = indexOfLast - recordsPerPage;
        const currentArr = orgArr.content.slice(indexOfFirst, indexOfLast);

        const elements = currentArr.map((el, i) =>{
            return (
                <div className={i === 1 ? 'organisation organisation-middle' : 'organisation'}>
                    {i === 1 && <hr className='line'/>}
                    <div className='outside-wrapper'>
                        <div className={i === 1 ? 'inside-wrapper' : 'inside'}>
                            <h3>{el.title}</h3>
                            <p>{el.description}</p>
                        </div>
                        <div className='tags'>
                            <span>{el.tags.join(', ')}</span>
                        </div>
                    </div>
                    {i === 1 && <hr className='line'/>}
                </div>
            )
        });

        const pageNumbers = [];
        for(let i = 1; i <= Math.ceil(orgArr.content.length/recordsPerPage); i++)
        {
            const element = <li key={i}
                                onClick={e=>this.handleClick(e,i)}
                                className={this.state.currentPage ===
                                i ? 'active' : ''}
                            >
                            {i}
                            </li>;
            pageNumbers.push(element)
        }

        return (
            <div className='pagination-wrapper'>
                <div className='pagination-header'>{orgArr.headerDesc}</div>
                <section className='pagination'>
                        {elements}
                        {pageNumbers.length>1 &&
                        <ul className='pageNumbers'>
                            {pageNumbers}
                        </ul>}
                </section>
            </div>
        )
    }
}