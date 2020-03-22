import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import BirthdayCard from '../screens/BirthdayCard';
import Card from '../screens/Card';




const Stack = createStackNavigator();
const ScreenComponent = ()=>(
    <Stack.Navigator >
        <Stack.Screen
            name='Home'
            component={Home}
            options={{
                title='Seyi',
                headerStyle:{
                    backgroundColor:'purple'
                },
                headerTitleAlign:'center'
            }} />
        <Stack.Screen
            name='Card Picker'
            component={BirthdayCard} />
        <Stack.Screen
            name='Birthday card'
            component={Card} />
    </Stack.Navigator>

)

export default()=>(
    <NavigationContainer>
        <ScreenComponent/>
    </NavigationContainer>
)

