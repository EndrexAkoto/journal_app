import React from 'react';
import { View, Text } from 'react-native';

interface JournalEntryProps {
  title: string;
  content: string;
  date: Date;
  category: string;
}

const JournalEntry: React.FC<JournalEntryProps> = ({ title, content, date, category }) => {
  return (
    <View style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginVertical: 5 }}>
      <Text>Title: {title}</Text>
      <Text>Content: {content}</Text>
      <Text>Date: {date.toDateString()}</Text>
      <Text>Category: {category}</Text>
    </View>
  );
};

export default JournalEntry;
