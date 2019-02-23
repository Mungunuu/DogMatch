import React, { Component } from 'react'
import Logo from '../components/Logo'
import SearchButton from '../components/SearchButton'

class Search extends Component {
    state = {
        query: '',
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
    }

    render() {
        return (
            <div>
                <Logo />
                <form>
                    <h6 class="login">Search a Breed</h6>
                    <input
                        placeholder="" class="search" style={{ width: "100%", margin: "auto"}} 
                        ref={input => this.search = input}
                        onChange={this.handleInputChange}
                    />
                    
                    <SearchButton />

                    <p>{this.state.query}</p>
                </form>
            </div>
        )
    }
}

export default Search