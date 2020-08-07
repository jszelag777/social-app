import React from 'react';
import styled from 'styled-components';

import {
    Link
} from "react-router-dom";

const NavConteiner = styled.nav`
    background-color: rgb(21, 32, 43);
    position: fixed;
    width: 100%;
    text-align: center;
`;

const Title = styled.h1`
    font-family: 'Dancing Script', cursive;
    color: #fff;
    display: inline-block;
    position: absolute;
    left: 15px;
    margin: 7px;
`; 

const Ul = styled.ul`
    list-style-type: none;
    padding: 0;
    display: inline-block;
`;

const Li = styled.li`
    margin: 5px 10px;
    text-transform: uppercase;
    display: inline-block;
`;

const NavLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    font-weight: bold;
    font-family: 'Open Sans', sans-serif;

    &:hover {
    color: blue;
    }
`;

const LogOut = styled.div`
    color: #fff;
    cursor: pointer;
    font-weight: bold;
    font-family: 'Open Sans', sans-serif;

    &:hover {
    color: blue;
    }
`;

function Nav(props) {

    let user = JSON.parse(localStorage.getItem('user'));

    return (
        <NavConteiner>
            <Title>SocialApp</Title>
            <Ul>
                <Li><NavLink to="/">Home</NavLink></Li>
                {!user && <Li><NavLink to="/Login">Login</NavLink></Li>}
                {!user && <Li><NavLink to="/SignUp">SignUp</NavLink></Li>}
                {user &&<Li><LogOut onClick={() => {
                    props.getLogOutUser(false)}}>LogOut</LogOut></Li>}
            </Ul>
        </NavConteiner>
    ); 
}

export default Nav;