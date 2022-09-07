import React from 'react';

import "./Path.scss";

import arrowright from "../../images/arrowright.svg";

import { Link } from 'react-router-dom';

type Props = {
  location: string,
}

export const Path:React.FC<Props> = ({location}) => {
  return (
    <div className="path">
      <Link to="/" className="path__house"/>
      <img src={arrowright} alt="arrow right icon" />
      <p className="path__location">{location}</p>
    </div>
  )
};

