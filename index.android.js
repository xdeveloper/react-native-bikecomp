/**
 * Main screen
 */
import React, {Component} from 'react';
import {
    AppRegistry, StyleSheet, Text,
    View, Switch, TextInput, Dimensions
} from 'react-native';

import ScrollableTabView, {DefaultTabBar, FacebookTabBar} from 'react-native-scrollable-tab-view';

import Indicator from './indicator.js'
import MyTabBar from './my-tab-bar.js'
import Ololo from './my-tab-bar-ololo.js'


export default class Bikecomp extends Component {
    constructor(props) {
        console.log("Bikecomp is starting ....");

        super(props);
        this.state = {page: 'second'};
    }

    render() {
        console.log("Rendering ...");

        return <View>
            <Text>Hello!</Text>

            <MyTabBar>
                <Ololo title="zzzz"></Ololo>
            </MyTabBar>

        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    }
});

AppRegistry.registerComponent('Bikecomp', () => Bikecomp);
