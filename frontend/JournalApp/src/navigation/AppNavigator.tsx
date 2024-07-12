import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'
import AddJournalEntryScreen from '../screens/AddJournalEntryScreen'
import EditJournalEntryScreen from '../screens/EditJournalEntryScreen'
import JournalList from '../screens/JournalList'

const Stack = createStackNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="AddEntry" component={AddJournalEntryScreen} />
        <Stack.Screen name="EditEntry" component={(props: React.JSX.IntrinsicAttributes & { route: Readonly<{ key: string; name: "EditJournalEntry"; path?: string }> & Readonly<{ params: Readonly<{ entryId: string }> }>; navigation: any }) => <EditJournalEntryScreen {...props} route={props.route} navigation={props.navigation} />} />
        <Stack.Screen name="JournalList" Component={JournalList} /> 
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
