import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from "react-native";
import RegularButton from "../components/regular-button/RegularButton";

export default class SignInPage extends Component<Props> {
    state = {
        username: '',
        pass: '',
        loginButtonPressed: false
    };

    render() {
        return (

            <View>
                <View style={styles.container}>
                    <Text style={styles.welcome}>Welcome to HairWeGo {this.state.username}</Text>
                    <TextInput value={this.state.username}
                               onChangeText={this.enterUsername}
                               placeholder={"Enter username"}
                               style={styles.textInput}
                    />
                    <TextInput value={this.state.pass}
                               onChangeText={this.enterPass}
                               placeholder={"Enter password"}
                               secureTextEntry={true}
                               style={styles.textInput}
                    />
                    <View style={styles.loginButtonContainer}>
                        <RegularButton type={'normal'} onButtonPressed={this.onLoginButtonPressed}/>
                        <Text style={styles.orText}>──────── or ────────</Text>
                        <RegularButton type={'facebook'} onButtonPressed={this.signInWithFacebook}/>
                        <RegularButton type={'google'} onButtonPressed={this.signInWithGoogle}/>
                        <Text style={styles.orText}>──────── or ────────</Text>
                        <RegularButton type={'transparent'} onButtonPressed={this.signInWithGoogle}/>

                    </View>
                    {this.state.loginButtonPressed ?
                        <View>
                            <Text style={styles.info}>User {this.state.username} with pw *** is now signed in.</Text>
                        </View> : null}
                </View>
            </View>
        )
    };

    onLoginButtonPressed = () => {
        console.log('Login Button pressed');
        this.setState({
            loginButtonPressed: !this.state.loginButtonPressed
        });
    };
    signInWithFacebook = () => {
        alert('Sign in with Facebook pressed')
    };
    signInWithGoogle = () => {
        alert('Sign in with Google pressed')
    };

    enterUsername = (event) => {
        this.setState({
            username: event
        });
    };

    enterPass = (event) => {
        this.setState({
            pass: event
        });
    };
}


const styles = StyleSheet.create({
    container: {
        flex: 3,
        alignItems: "center",
        justifyContent: 'center'
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        color: '#fff',
        marginBottom: 40
    },
    info: {
        fontSize: 15,
        textAlign: 'center',
        color: '#fff',
        margin: 10,
        marginBottom: 40
    },
    username: {
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
        margin: 10,
        marginBottom: 20
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    textInput: {

        width: 300,
        borderRadius: 3,
        backgroundColor: "#ffffff",
        marginTop: 20
    },
    loginButtonContainer: {
        marginTop: 10, width: 310
    },
    orText: {
        fontSize: 20,
        margin: 10,
        color: '#FFF',
        textAlign: 'center'
    }

});