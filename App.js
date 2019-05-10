/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import SignInPage from "./src/pages/SignInPage";


type Props = {};
export default class App extends Component<Props> {


    render() {
        return (
            <View style={styles.container}>
                <SignInPage/>
            </View>
        );
    }
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
