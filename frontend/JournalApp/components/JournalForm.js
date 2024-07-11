// components/JournalList.js

import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const JournalList = ({ entries, onEdit, onDelete }) => {
  return (
    <View style={styles.container}>
      {entries.map((entry) => (
        <View key={entry.id} style={styles.entry}>
          <Text style={styles.title}>{entry.title}</Text>
          <Text style={styles.date}>{entry.date}</Text>
          <TouchableOpacity style={styles.editButton} onPress={() => onEdit(entry)}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(entry)}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  entry: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#777',
    marginBottom: 5,
  },
  editButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginTop: 5,
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginTop: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
})

export default JournalList
