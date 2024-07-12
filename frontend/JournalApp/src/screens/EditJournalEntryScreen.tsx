// src/screens/EditJournalEntryScreen.js

import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native'

const EditJournalEntryScreen = ({ route, navigation }) => {
  const { entryId } = route.params
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')

  // Fetch entry details based on entryId and set initial state

  const handleEditEntry = () => {
    // Implement logic to update journal entry
    // Example: Dispatch action to update entry in Redux store or call API endpoint

    Alert.alert('Entry Updated', 'Journal entry updated successfully!')
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Entry</Text>

      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Content"
        value={content}
        onChangeText={setContent}
        multiline
        numberOfLines={4}
      />
      <TextInput
        style={styles.input}
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />
      <TextInput
        style={styles.input}
        placeholder="Date"
        value={date}
        onChangeText={setDate}
      />

      <Pressable style={styles.button} onPress={handleEditEntry}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#007bff',
    borderWidth: 2,
    borderRadius: 25,
    paddingHorizontal: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#007bff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
})

export default EditJournalEntryScreen
