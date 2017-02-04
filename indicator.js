import React, {Component} from 'react';
import {
    AppRegistry, StyleSheet, Text, View
} from 'react-native';


export default class Indicator extends Component {

    constructor(props) {
        super(props);

        this.type = props.type;
    }

    render() {
        return <View style={styles.container}>
            <Text>{this.type}</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: "stretch",

        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
        margin: 5,
        height: 150,
        padding: 15,
        shadowColor: '#ccc',
        shadowOffset: { width: 2, height: 2, },
        shadowOpacity: 0.5,
        shadowRadius: 3,

    }
});

AppRegistry.registerComponent('Indicator', () => Indicator);
