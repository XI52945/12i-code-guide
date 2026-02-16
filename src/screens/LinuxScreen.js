import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { linux, linuxIntro } from '../data';
import SearchBar from '../components/SearchBar';

export default function LinuxScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = linux.filter(item => {
    const matchesSearch = item.command.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.example.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSearch;
  });

  const renderHeader = () => (
    <View style={styles.introContainer}>
      <Text style={styles.introTitle}>{linuxIntro.title}</Text>
      <Text style={styles.introDesc}>{linuxIntro.desc}</Text>
      <View style={styles.featuresContainer}>
        {linuxIntro.keyFeatures.map((feature, index) => (
          <View key={index} style={styles.featureTag}>
            <Text style={styles.featureText}>{feature}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <SearchBar 
        value={searchQuery} 
        onChangeText={setSearchQuery} 
        placeholder="搜索 Linux 命令..." 
      />
      <FlatList
        ListHeaderComponent={renderHeader}
        data={filteredData}
        keyExtractor={(item) => item.command}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.command}>{item.command}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <View style={styles.exampleBox}>
              <Text style={styles.exampleLabel}>示例：</Text>
              <Text style={styles.exampleText}>{item.example}</Text>
            </View>
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
  introContainer: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  introTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  introDesc: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
    lineHeight: 20,
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  featureTag: {
    backgroundColor: '#ffeaa7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 8,
    marginBottom: 8,
  },
  featureText: {
    color: '#d63031',
    fontSize: 12,
    fontWeight: 'bold',
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
  command: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#d63031',
    marginBottom: 8,
    fontFamily: 'monospace',
  },
  description: {
    fontSize: 14,
    color: '#2d3436',
    marginBottom: 12,
    lineHeight: 20,
  },
  exampleBox: {
    backgroundColor: '#f1f2f6',
    padding: 10,
    borderRadius: 6,
  },
  exampleLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#636e72',
    marginBottom: 4,
  },
  exampleText: {
    fontSize: 13,
    color: '#2d3436',
    fontFamily: 'monospace',
  },
});
