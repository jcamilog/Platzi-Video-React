import React from 'react';

import '../assets/styles/components/Categoires.css'

const Categroies = ( {children, title} ) => {
    return(
        <div className="categories">
            <h2 className="categories__tittle"> {title} </h2>
            {children}
        </div>
    )
}

export default Categroies