/**
 * Main screen
 */
import React, {Component} from 'react';
import {
    AppRegistry, StyleSheet, Text,
    View, Switch, TextInput, Dimensions
} from 'react-native';

import Indicator from './indicator.js'
import MyTabBar from './my-tab-bar.js'
import TabBarPanel from './my-tab-bar-panel.js'


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

            <MyTabBar selectedTabTitle="zzzz">

                <TabBarPanel title="zzzz">
                    <Indicator/>
                    <Text>A Child CheckOption Example
To bring this all together and illustrate the concepts, let’s say we created a RadioGroup component that could take one
or many RadioOption child components. In raw html, which is what our component will eventually render, inputs with type
checkbox need to all have the same name attribute value to work well as toggles within the group. But this is something that
React can help us not have to duplicate. We’ll instead put a name property on
the parent RadioGroup and have it transfer it as a property on all its children. The implementation might look like this:</Text>
                </TabBarPanel>

                <TabBarPanel title="yyyy">
                    <Text>It’s a generally-useful thing to be able to tell what the React class type of a component obje
                    ct is. It’s an applicable skill in terms of looping through child comp
                    onents because we might not want to modify the properties of all types of children. Each React com
                    ponent class has a</Text>
                </TabBarPanel>

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
