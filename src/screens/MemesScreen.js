import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { memes } from '../data';
import SearchBar from '../components/SearchBar';

export default function MemesScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = memes.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.explanation.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.humor.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSearch;
  });

  return (
    <View style={styles.container}>
      <SearchBar 
        value={searchQuery} 
        onChangeText={setSearchQuery} 
        placeholder="搜索编程梗..." 
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.term}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.term}</Text>
            <Text style={styles.desc}>{item.explanation}</Text>
            <Text style={styles.humor}>😂 {item.humor}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  desc: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  humor: {
    fontSize: 14,
    color: '#e17055',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});