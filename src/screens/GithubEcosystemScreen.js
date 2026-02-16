import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { githubEcosystem } from '../data/github-ecosystem';

const GithubEcosystemScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');

  const categories = ['全部', ...new Set(githubEcosystem.map(item => item.category))];

  const filteredData = githubEcosystem.filter(item => {
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === '全部' || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
          {item.category && (
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>{item.category}</Text>
            </View>
          )}
        </View>
      </View>
      
      <Text style={styles.description}>{item.description}</Text>
      
      {item.tags && item.tags.length > 0 && (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tagsContainer}>
          {item.tags.map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>GitHub 生态指南 🐙</Text>
      <Text style={styles.headerSubtitle}>
        从小白到开源大神，探索全球最大的代码社区。
      </Text>
      
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="搜索术语、工具或插件..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor="#9ca3af"
        />
      </View>

      {/* Category Filter */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={styles.categoriesContainer}
        contentContainerStyle={styles.categoriesContent}
      >
        {categories.map((category, index) => (
          <TouchableOpacity 
            key={index} 
            style={[
              styles.categoryChip, 
              selectedCategory === category && styles.categoryChipActive
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={[
              styles.categoryChipText,
              selectedCategory === category && styles.categoryChipTextActive
            ]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  listContent: {
    padding: 16,
    paddingBottom: 32,
  },
  headerContainer: {
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#24292e', // GitHub black
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#586069', // GitHub gray
    lineHeight: 24,
    marginBottom: 20,
  },
  searchContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#e1e4e8',
  },
  searchInput: {
    fontSize: 16,
    color: '#24292e',
  },
  categoriesContainer: {
    marginBottom: 8,
  },
  categoriesContent: {
    paddingRight: 16,
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#e1e4e8',
  },
  categoryChipActive: {
    backgroundColor: '#24292e',
    borderColor: '#24292e',
  },
  categoryChipText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#586069',
  },
  categoryChipTextActive: {
    color: '#FFFFFF',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#e1e4e8',
  },
  cardHeader: {
    marginBottom: 12,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#24292e',
    marginRight: 8,
    marginBottom: 4,
    flex: 1,
  },
  categoryBadge: {
    backgroundColor: '#f1f8ff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#c8e1ff',
  },
  categoryText: {
    fontSize: 12,
    color: '#0366d6',
    fontWeight: '600',
  },
  description: {
    fontSize: 15,
    color: '#24292e',
    lineHeight: 24,
    marginBottom: 16,
  },
  tagsContainer: {
    flexDirection: 'row',
    marginTop: 4,
  },
  tag: {
    backgroundColor: '#f6f8fa',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#e1e4e8',
  },
  tagText: {
    fontSize: 12,
    color: '#586069',
    fontWeight: '500',
  },
});

export default GithubEcosystemScreen;
