import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { errors } from '../data';
import SearchBar from '../components/SearchBar';

export default function ErrorsScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = errors.filter(item => {
    const matchesSearch = item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.meaning.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSearch;
  });

  return (
    <View style={styles.container}>
      <SearchBar 
        value={searchQuery} 
        onChangeText={setSearchQuery} 
        placeholder="搜索错误代码..." 
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.code}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.code}>{item.code}</Text>
            <Text style={styles.meaning}>🤔 含义：{item.meaning}</Text>
            <Text style={styles.fix}>💡 修复：{item.fix}</Text>
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
  code: {
    fontFamily: 'monospace',
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 4,
    marginBottom: 8,
    color: '#d63031',
    fontWeight: 'bold',
    fontSize: 14,
  },
  meaning: {
    fontSize: 16,
    marginBottom: 6,
    color: '#333',
  },
  fix: {
    fontSize: 16,
    color: '#555',
  },
});