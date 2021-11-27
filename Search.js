import React from 'react'

const Search = ({onSearch}) => {
    return (
        <div>
        <label htmlFor="search">Search for :</label> 
        <input id="search" type="text" onChange={onSearch}/>
        
       </div>
    )
}

export default Search;
