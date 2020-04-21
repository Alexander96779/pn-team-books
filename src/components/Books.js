import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Books.scss';
import search from '../store/actions/book.actions';
class Books extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            searchWord: '',
            books: [],
            error: '',
            isLoading: false
        };
    }

    handleChange(event) {
        const { value } = event.target;
        this.setState({
            searchWord: value,
        });
    }

    async handleSubmit(e) {
        e.preventDefault();
        const { searchWord } = this.state;
        const { searchBookAction } = this.props;

        await searchBookAction({
            searchWord
        });
    }

    render () {
        const { books } = this.props;
        console.log(books);
        return(
            <div className="container">
                <div className="container_tab1">
                    <div className="container_tab1_title">
                        <h1>E-<span>Books</span></h1>
                    </div>
                    <div className="container_tab1_main-body">
                            <form onSubmit={this.handleSubmit}>
                                <input
                                type="text"
                                placeholder="Search book"
                                name="searchWord"
                                className="search"
                                onChange={this.handleChange}
                                />
                                <input
                                type="submit"
                                value="Search"
                                className="btn"
                                />
                            </form>
                    </div>
                </div>
                <div className="container_tab2">
                    <div className="container_tab2_glass">

                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    searchWord: state.searchWord,
    books: state.searchBook
});

const mapDispatchToProps = (dispatch) => ({
    searchBookAction: (data) => dispatch(search(data)),
    getBooks: () => dispatch(search()),
});
export default connect(mapStateToProps, mapDispatchToProps) (Books);