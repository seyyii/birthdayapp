import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import BirthdayCard from '../screens/BirthdayCard';
import Card from '../screens/Card';
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import { AppIcon, AppStyles } from "../AppStyles";


// const LoginStack = createStackNavigator(
//     {
//         Login: { screen: LoginScreen },
//         Signup: { screen: SignupScreen },
//         Welcome: { screen: WelcomeScreen }
//     },
//     {
//         initialRouteName: "Welcome",
//         headerMode: "float",
//         navigationOptions: ({ navigation }) => ({
//             headerTintColor: "red",
//             headerTitleStyle: styles.headerTitleStyle
//         }),
//         cardStyle: { backgroundColor: "#FFFFFF" }
//     }
// );

const Stack = createStackNavigator();
const ScreenComponent = ()=>(
    <Stack.Navigator >
        <Stack.Screen
            name='Welcome'
            component={WelcomeScreen}
            options={{
                title : 'Welcome',
                headerStyle:{
                    backgroundColor:'purple'
                },
                headerTitleAlign:'center'
            }} />
        <Stack.Screen
            name='Login'
            component={LoginScreen}
            options={{
                title : 'Login',
                headerStyle:{
                    backgroundColor:'purple'
                },
                headerTitleAlign:'center'
            }} />
        <Stack.Screen
            name='Signup'
            component={SignupScreen}
            options={{
                title : 'Signup',
                headerStyle:{
                    backgroundColor:'purple'
                },
                headerTitleAlign:'center'
            }} />
        <Stack.Screen
            name='Home'
            component={Home}
            options={{
                title : 'Home',
                headerStyle:{
                    backgroundColor:'purple'
                },
                headerTitleAlign:'center'
            }} />
        <Stack.Screen
            name='Card Picker'
            component={BirthdayCard}
            options={{
                title: 'Pick A Card',
                headerStyle: {
                    backgroundColor: 'purple'
                },
                headerTitleAlign: 'center'
            }} />
            <Stack.Screen
                name='Birthday Card'
                component={Card}
                options={{
                title: 'Your Card',
                headerStyle: {
                    backgroundColor: 'purple'
                },
                headerTitleAlign: 'center'
            }} />
        
    </Stack.Navigator>

)

export default()=>(
    <NavigationContainer>
        {/* <LoginStack/> */}
        <ScreenComponent/>
    </NavigationContainer>
)

