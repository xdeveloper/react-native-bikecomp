import React, {Component} from 'react';
import {
    AppRegistry, StyleSheet, Text, View, TouchableOpacity
} from 'react-native';


export default class MyTabBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedTabTitle: props.selectedTabTitle
        }
    }

    selectTab(title) {
        this.setState({
            selectedTabTitle: title
        })
    }

    render() {
        let selectedTabTitle = this.state.selectedTabTitle;
        let tabContent = null;

        var tabHeader = React.Children.map(this.props.children, (el) => {
            let title = el.props.title;
            let tabHeaderStyle;

            if (selectedTabTitle === title) {
                tabContent = el;
                tabHeaderStyle = styles.tabHeaderSelected;
            } else {
                tabHeaderStyle = styles.tabHeader;
            }

            return <TouchableOpacity style={tabHeaderStyle} onPress={ () => this.selectTab(title) }>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        });


        return <View>
            <View style={styles.container}>{tabHeader}</View>
            <TouchableOpacity onPress={() => alert(1)} style={styles.tabPanelOpacity}>
                {tabContent}
            </TouchableOpacity>
        </View>;


    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabHeader: {
        padding: 1
    },
    tabHeaderSelected: {
        borderWidth: 2,
        borderRadius: 10
    },
    title: {
        padding: 3,
        fontSize: 20
    },
    tabPanelOpacity: {
        borderWidth: 1,
        padding: 9
    }
});

AppRegistry.registerComponent('MyTabBar', () => MyTabBar);
