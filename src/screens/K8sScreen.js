import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { k8s, k8sIntro } from '../data';
import SearchBar from '../components/SearchBar';

export default function K8sScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = k8s.filter(item => {
    const matchesSearch = item.command.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.example.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSearch;
  });

  const renderHeader = () => (
    <View style={styles.introContainer}>
      <Text style={styles.introTitle}>{k8sIntro.title}</Text>
      <Text style={styles.introDesc}>{k8sIntro.desc}</Text>
      <View style={styles.featuresContainer}>
        {k8sIntro.keyFeatures.map((feature, index) => (
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
        placeholder="搜索 K8s 命令..." 
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
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  introTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#326ce5',
    marginBottom: 8,
  },
  introDesc: {
    fontSize: 14,
    color: '#2d3436',
    lineHeight: 22,
    marginBottom: 12,
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  featureTag: {
    backgroundColor: '#e3f2fd',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  featureText: {
    fontSize: 12,
    color: '#326ce5',
    fontWeight: '500',
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
    color: '#326ce5',
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
