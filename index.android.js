/**
 * Main screen
 */
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
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

            <Text>Top -</Text>

            <MyTabBar selectedTabTitle="Third" >

                <TabBarPanel title="Main">
                    <Indicator type="speed" />
                    <Text>
                        Думи мої, думи и мої,
                        Лихо мені з вами!
                        Нащо стали на папері
                        Сумними рядами?..
                        Чом вас вітер не розвіяв
                        В степу, як пилину?
                        Чом вас лихо не приспало,
                        Як свою дитину?..

                        Бо вас лихо на світ на сміх породило,
                        Поливали сльози... чом не затопили,
                        Не винесли в море, не розмили в полі?.
                        Не питали б люде, що в мене болить,
                        Не питали б, за що проклинаю долю,
                        Чого нуджу світом? «Нічого робить»,—
                        Не сказали б на сміх...
                    </Text>
                </TabBarPanel>

                <TabBarPanel title="Secondary">
                    <Text>It’s a generally-useful thing to be able to tell what the React class type of a component obje
                    ct is. It’s an applicable skill in terms of looping through child comp
                    onents because we might not want to modify the properties of all types of children. Each React com
                    ponent class has a</Text>
                </TabBarPanel>

                <TabBarPanel title="Third">
                    <Indicator type="clock" />
                    <Indicator type="remaining" />
                    <Indicator type="average_speed" />
                </TabBarPanel>

            </MyTabBar>

            <Text>Bottom -</Text>

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
