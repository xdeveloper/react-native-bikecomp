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


export default class Bikecomp extends Component {
    constructor(props) {
        super(props);
        this.state = {page: 'second'};
    }

    render() {
        return <ScrollableTabView
            style={{marginTop: 20, }}
            renderTabBar={() => <DefaultTabBar />}>
                <View style={styles.container}>
                    <Indicator type="speed"/>
                    <Indicator type="clock"/>
                    <Indicator type="time"/>
                    <Indicator type="avg_speed"/>
                </View>

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
        backgroundColor: 'white',
    }
});

AppRegistry.registerComponent('Bikecomp', () => Bikecomp);
