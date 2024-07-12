import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface JournalEntry {
  id: number;
  title: string;
  content: string;
}

interface JournalListProps {
  journalEntries: JournalEntry[];
}

const JournalList: React.FC<JournalListProps> = ({ journalEntries }) => {
  const navigation = useNavigation();

  const renderItem = ({ item }: { item: JournalEntry }) => (
    <View style={styles.entryContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.content}>{item.content}</Text>
      <Button
        title="Edit"
        onPress={() => navigation.navigate('EditEntry', { entry: item })}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={journalEntries}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button title="Add New Entry" onPress={(item) => navigation.navigate('AddEntry', { entry: item })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  entryContainer: {
    marginBottom: 16,
    padding: 16,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
  },
});

export default JournalList;