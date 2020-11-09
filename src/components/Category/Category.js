import React, { useState } from 'react';

import "./Category.css";

const Category = () => {
    const [flagState, setFlag]  = useState({
        flag: true
    });
    
   const toggler = () => {
       setFlag({
         flag: !flagState.flag
       });
    };
    return (
        <div className="category">
            {  flagState.flag ? 
            <ul className="list-group">
                <li className="list-group-item bg-dark active">Category 
                <button onClick={toggler} className="btn float-right"><i style={{color: 'white'}} className="fas fa-chevron-left"></i></button></li>
                <li className="list-group-item list-group-item-action ">Food and Beverages</li>
                <li className="list-group-item list-group-item-action selectedlink">Books</li>
                <li className="list-group-item list-group-item-action">Electronics and Appliances</li>
                <li className="list-group-item list-group-item-action">Sanitory</li>
            </ul> :
            <button onClick={toggler} className="btn bg-dark"><i style={{ color: "#fff" }} className="fas fa-chevron-right"></i></button>
            }
        </div>
    );
};

export default Category;