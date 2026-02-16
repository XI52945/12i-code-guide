import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { vibeCoding } from '../data/ai-agent';

const AiAgentScreen = () => {
  const navigation = useNavigation();
  
  const filteredData = vibeCoding;

  const renderItem = ({ item }) => {
    // Header item style
    if (item.isHeader) {
      return (
        <View style={styles.headerItem}>
          <Text style={styles.headerTitle}>{item.title}</Text>
          <Text style={styles.headerDesc}>{item.description}</Text>
        </View>
      );
    }

    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.title}>{item.title}</Text>
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
        <Text style={styles.description}>{item.description}</Text>
        {item.category && (
           <View style={styles.categoryBadge}>
             <Text style={styles.categoryText}>{item.category}</Text>
           </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
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
    paddingTop: 16,
  },
  headerItem: {
    marginBottom: 24,
    marginTop: 8,
    paddingHorizontal: 8,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#2d3436',
    marginBottom: 8,
  },
  headerDesc: {
    fontSize: 16,
    color: '#636e72',
    lineHeight: 24,
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
    borderColor: 'rgba(0,0,0,0.02)',
  },
  cardHeader: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2d3436',
    marginBottom: 8,
  },
  tagsContainer: {
    flexDirection: 'row',
  },
  tag: {
    backgroundColor: '#e3f2fd',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 6,
  },
  tagText: {
    fontSize: 11,
    color: '#1565c0',
    fontWeight: '600',
  },
  description: {
    fontSize: 15,
    color: '#4b5563',
    lineHeight: 26,
    marginBottom: 12,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  categoryText: {
    fontSize: 12,
    color: '#6b7280',
    fontWeight: '500',
  },
});

export default AiAgentScreen;
