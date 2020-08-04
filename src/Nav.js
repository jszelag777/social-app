import React from 'react';
import styled from 'styled-components';

import {
    Link
} from "react-router-dom";

function Nav(props) {

        const Nav = styled.nav`
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

        let login = props.logins;

        let NavLinkActive;
        let NavLinkNoActive;

        if(login){
            NavLinkActive = styled(Link)`
                display: inline-block;
                text-decoration: none;
                color: #fff;
                cursor: pointer;
                font-weight: bold;
                font-family: 'Open Sans', sans-serif;

                &:hover {
                color: blue;
                }
            `;
            NavLinkNoActive = styled(Link)`
                display: none;
            `;
        }else{
            NavLinkActive = styled(Link)`
                display: none;
            `;

        NavLinkNoActive = styled(Link)`
            display: inline-block;
            text-decoration: none;
            color: #fff;
            cursor: pointer;
            font-weight: bold;
            font-family: 'Open Sans', sans-serif;

            &:hover {
            color: blue;
            }
        `;

        }

        return (
            <Nav>
                <Title>SocialApp</Title>
                <Ul>
                    <Li><NavLink to="/">Home</NavLink></Li>
                    <Li><NavLinkNoActive to="/Login">Login</NavLinkNoActive></Li>
                    <Li><NavLinkNoActive to="/SignUp">SignUp</NavLinkNoActive></Li>
                    <Li><NavLinkActive to="/LogOut">LogOut</NavLinkActive></Li>
                </Ul>
            </Nav>
        );
    
}

export default Nav;