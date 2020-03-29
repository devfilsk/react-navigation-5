import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();
import Home from '../pages/Home';
import Settings from '../pages/Settings';

function Wildcard({ title }) {
    return <Text>Wildcard {title}</Text>
}

export default function DashboardRoutes() {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    )
}