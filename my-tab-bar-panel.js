import React, {Component} from 'react';
import {
    AppRegistry, StyleSheet, Text, View
} from 'react-native';


export default class TabBarPanel extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <View>{this.props.children}</View>
    }
}


AppRegistry.registerComponent('TabBarPanel', () => TabBarPanel);
