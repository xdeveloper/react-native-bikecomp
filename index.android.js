/**
 * Main screen
 */
import React, {Component} from 'react';
import {
    AppRegistry, StyleSheet, Text,
    View, Switch, TextInput, Dimensions
} from 'react-native';

import ScrollableTabView, {DefaultTabBar,} from 'react-native-scrollable-tab-view';


export default class Bikecomp extends Component {
    constructor(props) {
        super(props);
        this.state = {page: 'second'};
    }

    render() {
        return <ScrollableTabView
            style={{marginTop: 20, }}
            renderTabBar={() => <DefaultTabBar />}>
            <Text tabLabel='Main'>Main</Text>
            <Text tabLabel='Additional'>Additional</Text>
        </ScrollableTabView>;
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
