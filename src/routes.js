import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Groups from './pages/Groups';
import GroupDetail from './pages/GroupDetail';
import NewGroup from './pages/NewGroup';
import MyProfile from './pages/MyProfile';
import Login from './pages/Login';
import Register from './pages/Register';
import EditGroup from './pages/EditGroup';
import AddParticipant from './pages/AddParticipant';
import Participant from './pages/Participant';



export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown:false}}>
                <AppStack.Screen name = "Login"component={Login}/>
                <AppStack.Screen name ="Groups"component={Groups}/>
                <AppStack.Screen name = "GroupDetail"component={GroupDetail}/>
                <AppStack.Screen name = "NewGroup"component={NewGroup}/>
                <AppStack.Screen name = "MyProfile"component={MyProfile}/>
                <AppStack.Screen name = "Register"component={Register}/>
                <AppStack.Screen name = "EditGroup"component={EditGroup}/>
                <AppStack.Screen name = "AddParticipant"component={AddParticipant}/>
                <AppStack.Screen name = "Participant"component={Participant}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}