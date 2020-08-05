import React, {Component} from 'react';
import axios from 'axios';
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

const Message = styled.p`
    color: red;
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    font-weight: lighter;
`;

const Text = styled.h3`
    color: #fff;
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

class Login extends Component {

    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
            meassage: '',
            token: '',
            loginState: false,
        };
    }

    logIn = (event) => {
        event.preventDefault();

        if(this._inputUsername.value === '' || this._inputPassword.value === '') {
            this.setState(state => {
                return({
                    message: 'Wypełnij wszystkie pola'
                }); 
            });
        } else {
            this.setState(state => {
                return({
                    message: ''
                }); 
            });
            // console.log('Zalogowano');
            this.getPostData();
        }
    }

    getPostData = () => {
        let postData = {
            username: this._inputUsername.value,
            password: this._inputPassword.value,
            ttl: 3600
        };

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };

        axios.post(
            'https://akademia108.pl/api/social-app/user/login', 
            postData, 
            axiosConfig)
        .then((res) => {
            console.log("RESPONSE RECEIVED: ", res);

            if(res.data.jwt_token === undefined){
                this.setState(state => {
                    return({
                        message: 'Błędny login lub hasło'
                    }); 
                });
            } else {
                // this.setState(state => {
                //     return({
                //         message: '',
                //         token: res.data.jwt_token,
                //         loginState: true,
                //     }); 
                // });
                console.log(res.data);
                localStorage.setItem('user', JSON.stringify(res.data));
                this.props.changeLoginState(true);
            }
        })
        .catch((err) => {
            console.log("AXIOS ERROR: ", err);
        })
    }

    render(){
        return (
            <ConteinerOuter>
                <Conteiner>
                    <Header>Zaloguj się do SocialApp</Header>
                    <Message >{this.state.message}</Message >
                    <Form action="" onSubmit = {this.logIn}>
                        <Input ref={(elem) => {this._inputUsername = elem;}} type="text" placeholder="Nazwa użytkownika"/>
                        <Input ref={(elem) => {this._inputPassword = elem;}} type="text" placeholder="Hasło"/>
                        <Button type="submit">Zaloguj się</Button>
                    </Form>
                    <Text>Nie pamiętasz hasła? <span>&#183;</span> Zarejestruj się aby korzystać z SocialApp</Text>
                </Conteiner>
            </ConteinerOuter>
        );
    }
}

export default Login;