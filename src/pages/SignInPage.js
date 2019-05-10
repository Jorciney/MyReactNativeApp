import React, {Component} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from "react-native";

export default class SignInPage extends Component<Props> {
    state = {
        username: '',
        pass: '',
        loginButtonPressed: false
    };

    render() {
        return (
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
                    <Button
                        title="Login" onPress={this.onLoginButtonPressed}
                        color="#00948C"
                    />
                </View>
                {this.state.loginButtonPressed ?
                    <View>
                        <Text style={styles.info}>User {this.state.username} with pw *** is now signed in.</Text>
                    </View> : null}
            </View>
        )
    };

    onLoginButtonPressed = () => {
        console.log('Login Button pressed');
        this.setState({
            loginButtonPressed: !this.state.loginButtonPressed
        });
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
        backgroundColor: "#325B7F",
        flex: 3,
        alignItems: "center",
        justifyContent: 'center'
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        color: '#fff',
        margin: 10,
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
        marginTop: 20, width: 300, height: 45
    }
});