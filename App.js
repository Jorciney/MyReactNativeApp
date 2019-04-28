/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    state = {
        username: '',
        pass: ''
    };

    render() {
        return (
            <View style={styles.container} style={{backgroundColor: "#325B7F", flex: 3, alignItems: "center", paddingTop:130}}>
                <Text style={styles.welcome}>Welcome to HairWiGo</Text>
                <TextInput value={this.state.username}
                           onChangeText={this.enterUsername}
                           placeholder={"Enter username"}
                           style={{width: 300, borderRadius:3, backgroundColor:"#ffffff"}}
                />
                <TextInput value={this.state.pass}
                           onChangeText={this.enterPass}
                           placeholder={"Enter password"}
                           secureTextEntry={true}
                           style={{width: 300, borderRadius:3, backgroundColor:"#ffffff", marginTop:20}}
                />
            </View>
        );
    }
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        color:'#fff',
        margin: 10,
        marginBottom: 40
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
