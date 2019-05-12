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
        flexDirection: 'column',
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    }
});
