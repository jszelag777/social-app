import React, {Component} from 'react';
import styled from 'styled-components';

class LogOut extends Component {

    render(){

        const Counter = styled.div`
            text-align: center;
            background-color: rgb(21, 32, 43);
            height: 100vh;
        `;

        const CounterInner = styled.div`
            display: flex;
            padding: 100px;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            max-width: 50%;
            margin: 0 auto;
        `;

        const Header = styled.h2`
            color: #fff;
            font-family: 'Open Sans', sans-serif;
        `;

        return (
            <Counter>
                <CounterInner>
                    <Header>Log out</Header>
                </CounterInner>
            </Counter>
        );
    }
}

export default LogOut;