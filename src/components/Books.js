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
        console.log(books.books.items);
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
                                required
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
                    {books.books.items ? 
                    books.books.items.map((book, index) => (
                        <div key={index}>
                            <div className="container_tab2_found">
                            <div className="container_tab2_found_item">
                            <h3>Title: {book.volumeInfo.title}</h3>
                            <p><b>Author(s):</b> {book.volumeInfo.authors}</p>
                            <p><b>Publisher:</b> {book.volumeInfo.publisher}</p>
                            <div className="link">
                            <a href={book.volumeInfo.infoLink} className="btn">Readmore</a>
                            </div>
                            </div>
                            </div>
                        </div>
                    ))

                    : 
                    <div className="container_tab2_glass">
                    
                    </div>
                    }
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