import { Link } from 'gatsby';
import React from 'react';
import { stack, learnMore } from './style.module.scss'
const CustomButton = ({ text, link }) => {
    return <div className={stack}>
        <Link className={learnMore} to={link}>{text}</Link>
    </div>;
}

export default CustomButton;
