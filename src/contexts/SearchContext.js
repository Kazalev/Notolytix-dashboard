import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
    const [search, setSearch] = useState('Search word context')

    return (
        <SearchContext.Provider value={[search, setSearch]}>
            {props.children}
        </SearchContext.Provider>
    );
}

export default SearchContextProvider;
