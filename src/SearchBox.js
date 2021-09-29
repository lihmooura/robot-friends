import React from "react";


const SearchBox = ({searchfield, searchchange}) =>{
    return (
<div className='pa1'>
<input 
className=' pa3 ba b--green bg-lightest-blue'
    type = 'Search' 
    placeholder='search robots' 
    onChange= {searchchange}
    />
</div>
    );
}

export default SearchBox;