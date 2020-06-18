import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Groups from './pages/Groups';
import GroupDetail from './pages/GroupDetail';


export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown:false}}>
                <AppStack.Screen name ="Groups"component={Groups}/>
                <AppStack.Screen name = "GroupDetail"component={GroupDetail}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}