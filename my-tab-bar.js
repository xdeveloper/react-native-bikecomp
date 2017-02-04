import React, {Component} from 'react';
import {
    AppRegistry, StyleSheet, Text, View
} from 'react-native';


export default class MyTabBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log('Rendering Tab Bar');

        //let filtered = this.props.children.filter(c => true);

        //console.log(filtered);

        let list = this.props.children;

        var rs =  React.Children.map(list, (el) => {
            //console.log(el);

            let title = el.props.title;
            console.log(title);

            return <Text>{title}</Text>;
        });

        return <View>{rs}</View>;


    }
}


AppRegistry.registerComponent('MyTabBar', () => MyTabBar);
