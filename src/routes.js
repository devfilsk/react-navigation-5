import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// import Home from './pages/Home';
import Login from './pages/Login';

import DashboardRoutes from './routes/dashboard.routes';

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerStyle: {backgroundColor: "#7159c1"}, headerTintColor: "#FFF" }}>
            <Stack.Screen name="Home" component={DashboardRoutes} options={{ title: "DashBoard"}}/>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}