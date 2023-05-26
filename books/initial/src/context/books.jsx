import React, { useState, createContext } from 'react';

const BooksContext = createContext();

function Provider({ children }) {
    // TEST
    // const [count, setCount] = useState(5);
    // const valueToShare = {
    //     count,
    //     incrementCount: () => {
    //         setCount(count + 1);
    //     },
    // };

    return <BooksContext.Provider value={{}}>{children}</BooksContext.Provider>;
}

export { Provider };
export default BooksContext;
