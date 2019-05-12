import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const RegularButton = props => {
    return (
        <TouchableOpacity onPress={props.onButtonPressed}>
            {props.type === 'facebook' ?
                <View style={styles.facebookContainer}>
                    <Text style={styles.facebookBtn}> Sign in with Facebook </Text>
                </View> : props.type === 'google' ?
                    <View style={styles.googleContainer}>
                        <Text style={styles.googleBtn}>Sign in with Google </Text>
                    </View> : props.type === 'transparent' ?
                        <View style={styles.transparentContainer}>
                            <Icon size={24} color="#edeeef" name="person-add"/>
                            <Text style={styles.transparentBtn}>Register </Text>
                        </View> :
                        <View style={styles.normalContainer}>
                            <Text style={styles.normalBtn}> Login</Text>
                        </View>
            }
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    facebookContainer: {
        marginBottom: 5,
        borderWidth: 1,
        backgroundColor: '#3B5998',
        borderColor: '#2D4474',
        alignItems: 'center'
    },
    facebookBtn: {
        color: '#FFF',
        fontSize: 17,
        backgroundColor: '#3B5998',
        overflow: 'hidden',
        padding: 12,
        textAlign: 'center',
        width: 305
    },
    googleContainer: {
        margin: 5,
        borderWidth: 1,
        backgroundColor: '#EA4335',
        borderColor: '#EA4335',
        alignItems: 'center'
    },
    googleBtn: {
        color: '#FFF',
        fontSize: 17,
        backgroundColor: '#EA4335',
        overflow: 'hidden',
        padding: 12,
        textAlign: 'center',
        width: 305
    },
    normalContainer: {
        margin: 5,
        borderWidth: 1,
        borderColor: '#004D40',
        alignItems: 'center'
    },
    normalBtn: {
        color: '#FFF',
        fontSize: 17,
        backgroundColor: '#00948C',
        overflow: 'hidden',
        padding: 12,
        textAlign: 'center',
        width: 305
    },
    transparentContainer: {
        flexDirection: 'row',
        margin: 5,
        borderWidth: 1,
        borderColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    transparentBtn: {
        color: '#FFF',
        fontSize: 17,
        backgroundColor: 'transparent',
        overflow: 'hidden',
        padding: 12,
        width: 305
    }
});
export default RegularButton;
