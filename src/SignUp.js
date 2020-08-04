import React, {Component} from 'react';
import styled from 'styled-components';

class SignUp extends Component {

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

        const Message = styled.p`
            color: red;
            font-family: 'Open Sans', sans-serif;
            font-size: 12px;
            font-weight: lighter;
        `;

        const Input = styled.input`
            width: 500px;
            height: 50px;
            background-color: rgb(25, 39, 52);
            margin-bottom: 25px;
            border-top: 0;
            border-left: 0;
            border-right: 0;
            border-bottom: 2px solid rgba(136, 153, 166, 0.5);
            color: #fff;

            &:focus {
                border-bottom: 2px solid rgba(136, 153, 166, 1);
                outline: 0;
            }

            &::-webkit-input-placeholder {
                color: rgba(136, 153, 166, 0.5);
            }

            &:focus::-webkit-input-placeholder {
                color: rgba(136, 153, 166, 1);
            }
        `;

        const Form = styled.form`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        `;

        const Button = styled.button`
            width: 500px;
            font-size: 20px;
            padding: 10px 20px;
            border-radius: 20px;
            background-color: rgba(27, 149, 224, 0.5);
            color: rgba(255, 255, 255, 0.5);
            
            cursor: pointer;
            border: 0;

            &:hover {
                background-color: rgba(27, 149, 224, 1);
                color: rgba(255, 255, 255, 1);
            }

            &:focus {
                outline: 0;
            }
        `;

        return (
            <Counter>
                <CounterInner>
                    <Header>Zarejestruj się do SocialApp</Header>
                    <Message >Wypełnij wszystkie pola</Message >
                    <Form action="">
                        <Input type="text" placeholder="Nazwa użytkownika"/>
                        <Input type="text" placeholder="Adres email"/>
                        <Input type="text" placeholder="Hasło"/>
                        <Input type="text" placeholder="Potwierdź hasło"/>
                        <Button>Zarejestruj się</Button>
                    </Form>
                </CounterInner>
            </Counter>
        );
    }
}

export default SignUp;