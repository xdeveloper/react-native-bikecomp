import React, {Component} from 'react';
import {
    AppRegistry, StyleSheet, Text, View
} from 'react-native';


export default class MyTabBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedTabTitle: props.selectedTabTitle
        }
    }

    render() {
        let list = this.props.children;
        let selectedTabTitle = this.state.selectedTabTitle;

        var tabHeader = React.Children.map(list, (el) => {
            let title = el.props.title;

            return <View style={styles.tabHeaderElement}><Text style={styles.title}>T: {title}</Text></View>
        });

        var tabContent = React.Children.map(list, (el) => {
            let title = el.props.title;
            if (selectedTabTitle === title) {
                console.log('Show tab with title ' + selectedTabTitle);
                return el;
            }
        });

        return <View><View style={styles.container}>{tabHeader}</View>{tabContent}</View>;


    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    tabHeaderElement: {
        backgroundColor: 'yellow',
        padding: 10
    },
    title: {
        color: 'red',
        fontSize: 20
    }
});


AppRegistry.registerComponent('MyTabBar', () => MyTabBar);
