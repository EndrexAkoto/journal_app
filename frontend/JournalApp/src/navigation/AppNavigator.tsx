// src/navigation/AppNavigator.tsx

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'
import UserProfileScreen from '../screens/UserProfileScreen' // Add this import
import AddJournalEntryScreen from '../components/AddJournalEntryScreen' // Add this import
import EditJournalEntryScreen from '../screens/EditJournalEntryScreen' // Add this import

const Stack = createStackNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UserProfile" component={UserProfileScreen} /> {/* Add UserProfileScreen */}
        <Stack.Screen name="AddEntry" component={AddJournalEntryScreen} /> {/* Add AddJournalEntryScreen */}
        <Stack.Screen name="EditEntry" component={EditJournalEntryScreen} /> {/* Add EditJournalEntryScreen */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
