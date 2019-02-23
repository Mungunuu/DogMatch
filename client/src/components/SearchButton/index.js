import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';

function SearchButton() {
    return (
        <div id="content1">
            <Link to="/search">
                <button type="button" class="searchIt">
                    Search
                </button>
            </Link>
        </div>
    );
}

export default SearchButton;
