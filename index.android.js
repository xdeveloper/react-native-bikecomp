/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry, StyleSheet, Text,
    View, Switch, TextInput
} from 'react-native';

import Tabs from 'react-native-tabs';

export default class Bikecomp extends Component {
    constructor(props) {
        super(props);
        this.state = {page: 'second'};
    }

    render() {
        return (
            <View style={styles.container}>

                <Tabs
                    selected={this.state.page}
                    selectedStyle={{color:'red'}}
                    selectedIconStyle={{borderBottomWidth:5,borderBottomColor:'red'}}
                    onSelect={el=>this.setState({page:el.props.name})}>

                    <Text name="first">First</Text>
                    <Text name="second">Second</Text>
                </Tabs>


                <Text>
                    Welcome to React Native!
                </Text>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
    },

    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('Bikecomp', () => Bikecomp);
