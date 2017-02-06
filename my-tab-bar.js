'use strict';

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default class MyTabBar extends Component {

    constructor(props) {
        super(props);

        this.titles = React.Children.map(this.props.children, (el) => {
            return el.props.title;
        });

        this.state = {
            selectedTabTitle: props.selectedTabTitle
        }
    }

    prevTitle() {
        let [c, i] = this.getBoth();

        if (this.outOfIndex(i - 1)) {
            return c;
        } else {
            return this.titles[i - 1];
        }
    }

    nextTitle() {
        let [c, i] = this.getBoth();

        if (this.outOfIndex(i + 1)) {
            return c;
        } else {
            return this.titles[i + 1];
        }
    }

    outOfIndex(index) {
        return (index == -1 || index == this.titles.length);
    }

    onSwipeLeft(gestureState) {
        this.selectTab(this.nextTitle());
    }

    onSwipeRight(gestureState) {
        this.selectTab(this.prevTitle());
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


        return <GestureRecognizer
            onSwipeLeft={(state) => this.onSwipeLeft(state)}
            onSwipeRight={(state) => this.onSwipeRight(state)}>

                <View style={styles.container}>{tabHeader}</View>
                <TouchableWithoutFeedback>
                    {tabContent}
                </TouchableWithoutFeedback>

        </GestureRecognizer>;
    }

    getBoth() {
        let current = this.state.selectedTabTitle;
        let currentIndex = this.titles.indexOf(current);

        return [current, currentIndex];
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
        borderRadius: 5
    },
    title: {
        padding: 9,
        paddingTop: 2,
        paddingBottom: 3,
        fontSize: 20
    },
    tabPanelOpacity: {
        borderWidth: 0,
        padding: 5
    }
});

AppRegistry.registerComponent('MyTabBar', () => MyTabBar);
