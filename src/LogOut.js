import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ConteinerOuter = styled.div`
    text-align: center;
    background-color: rgb(21, 32, 43);
    height: 100vh;
`;

class LogOut extends Component {

    getLogOutUser = () => {
        // let postData = {
        //     jwt_token: localStorage.getItem('user').jwt_token
        // };

        // let axiosConfig = {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json',
        //         'Authorization': 'Bearer ' + localStorage.getItem('user').jwt_token
        //     }
        // };

        // axios.post(
        //     'https://akademia108.pl/api/social-app/user/logout', 
        //     postData, 
        //     axiosConfig)
        // .then((res) => {
        //     console.log("RESPONSE RECEIVED: ", res);
        // })
        // .catch((err) => {
        //     console.log("AXIOS ERROR: ", err);
        // })

        let user = JSON.parse(localStorage.getItem('user'));
        localStorage.removeItem('user');

        this.props.changeLoginState(false);
    }


    render(){
        return (
            <ConteinerOuter>
                {this.getLogOutUser}
            </ConteinerOuter>
        );
    }  
}

export default LogOut;