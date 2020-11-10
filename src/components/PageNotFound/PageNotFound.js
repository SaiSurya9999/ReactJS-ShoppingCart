import React from 'react';

import image from '../../assets/404.svg';
import './PageNotFound.css';

const PageNotFound = () => {
  return (
      <img className="notFound" src={image}></img>
  )
};

export default PageNotFound;