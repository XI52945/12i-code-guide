import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { syntax } from '../data';
import SearchBar from '../components/SearchBar';

const SyntaxCard = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => setExpanded(!expanded)}
      activeOpacity={0.9}
    >
      <View style={styles.header}>
        <Text style={styles.title}>{item.concept}</Text>
        <Text style={styles.arrow}>{expanded ? '▲' : '▼'}</Text>
      </View>
      
      {expanded && (
        <View style={styles.content}>
          {item.python && (
            <View style={styles.langBlock}>
              <Text style={styles.langLabel}>Python</Text>
              <Text style={styles.codeSnippet}>{item.python}</Text>
            </View>
          )}
          {item.javascript && (
            <View style={styles.langBlock}>
              <Text style={styles.langLabel}>JavaScript</Text>
              <Text style={styles.codeSnippet}>{item.javascript}</Text>
            </View>
          )}
          {item.java && (
            <View style={styles.langBlock}>
              <Text style={styles.langLabel}>Java</Text>
              <Text style={styles.codeSnippet}>{item.java}</Text>
            </View>
          )}
          {item.cpp && (
            <View style={styles.langBlock}>
              <Text style={styles.langLabel}>C++</Text>
              <Text style={styles.codeSnippet}>{item.cpp}</Text>
            </View>
          )}
          {item.go && (
            <View style={styles.langBlock}>
              <Text style={styles.langLabel}>Go</Text>
              <Text style={styles.codeSnippet}>{item.go}</Text>
            </View>
          )}
          {item.rust && (
            <View style={styles.langBlock}>
              <Text style={styles.langLabel}>Rust</Text>
              <Text style={styles.codeSnippet}>{item.rust}</Text>
            </View>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default function SyntaxScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = syntax.filter(item => {
    const matchesSearch = item.concept.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.python?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.javascript?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.java?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.cpp?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.go?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.rust?.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSearch;
  });

  return (
    <View style={styles.container}>
      <SearchBar 
        value={searchQuery} 
        onChangeText={setSearchQuery} 
        placeholder="搜索语法概念..." 
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.concept}
        renderItem={({ item }) => <SyntaxCard item={item} />}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  arrow: {
    fontSize: 18,
    color: '#999',
  },
  content: {
    marginTop: 12,
  },
  langBlock: {
    marginBottom: 12,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 6,
    borderLeftWidth: 4,
    borderLeftColor: '#6c5ce7',
  },
  langLabel: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
    fontWeight: 'bold',
  },
  codeSnippet: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: '#2d3436',
  },
});