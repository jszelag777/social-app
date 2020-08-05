import React, {Component} from 'react';
import styled from 'styled-components';

const ConteinerOuter = styled.div`
    text-align: center;
    background-color: rgb(21, 32, 43);
    height: 100vh;
`;

const Conteiner = styled.div`
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

class Home extends Component {

    render(){

        return (
            <ConteinerOuter>
                <Conteiner>
                    <Header>Home</Header>
                </Conteiner>
            </ConteinerOuter>
        );
    }
}

export default Home;