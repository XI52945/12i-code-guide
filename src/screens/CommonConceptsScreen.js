import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { commonConcepts } from '../data/commonConcepts';
import SearchBar from '../components/SearchBar';

const TYPES = ['全部', '基础概念', '操作系统', '数据库', '架构', '安全', '网络', '移动开发', '人工智能', '软技能', '云计算', 'Web开发', '测试', '硬件', '数据结构', '算法'];

export default function CommonConceptsScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('全部');

  const filteredData = commonConcepts.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.definition.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = selectedType === '全部' || item.type === selectedType;

    return matchesSearch && matchesType;
  });

  const renderTypeFilter = () => (
    <View style={styles.filterContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterContent}>
        {TYPES.map(type => (
          <TouchableOpacity
            key={type}
            style={[styles.filterChip, selectedType === type && styles.activeFilterChip]}
            onPress={() => setSelectedType(type)}
          >
            <Text style={[styles.filterText, selectedType === type && styles.activeFilterText]}>
              {type}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );

  return (
    <View style={styles.container}>
      <SearchBar 
        value={searchQuery} 
        onChangeText={setSearchQuery} 
        placeholder="搜索常用概念..." 
      />
      {renderTypeFilter()}
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.term}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.headerRow}>
              <Text style={styles.term}>{item.term}</Text>
              <View style={styles.typeTag}>
                <Text style={styles.typeText}>{item.type}</Text>
              </View>
            </View>
            <Text style={styles.definition}>{item.definition}</Text>
            {item.example && (
              <Text style={styles.example}>💡 例如：{item.example}</Text>
            )}
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
    paddingTop: 8,
  },
  filterContainer: {
    marginBottom: 12,
  },
  filterContent: {
    paddingRight: 16,
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
    marginRight: 8,
  },
  activeFilterChip: {
    backgroundColor: '#007AFF',
  },
  filterText: {
    fontSize: 14,
    color: '#333',
  },
  activeFilterText: {
    color: '#fff',
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
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  term: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    marginRight: 8,
  },
  typeTag: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  typeText: {
    fontSize: 12,
    color: '#666',
  },
  definition: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  example: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 8,
  },
});
