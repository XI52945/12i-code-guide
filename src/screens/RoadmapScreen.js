import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import RoadmapList from '../components/RoadmapList';
import RoadmapMindMap from '../components/RoadmapMindMap';

export default function RoadmapScreen() {
  const [viewMode, setViewMode] = useState('mindmap'); // 'mindmap' or 'list'

  return (
    <View style={styles.container}>
      {/* Header with Toggle */}
      <View style={styles.header}>
        <View>
      <Text style={styles.headerTitle}>全栈开发导图</Text>
          <Text style={styles.headerSubtitle}>
            {viewMode === 'mindmap' ? '👉 滑动查看完整导图' : '👇 点击节点展开详细内容'}
          </Text>
        </View>
        <View style={styles.toggleContainer}>
          <TouchableOpacity 
            style={[styles.toggleButton, viewMode === 'mindmap' && styles.activeToggle]}
            onPress={() => setViewMode('mindmap')}
          >
            <Text style={[styles.toggleText, viewMode === 'mindmap' && styles.activeToggleText]}>导图</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.toggleButton, viewMode === 'list' && styles.activeToggle]}
            onPress={() => setViewMode('list')}
          >
            <Text style={[styles.toggleText, viewMode === 'list' && styles.activeToggleText]}>列表</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {viewMode === 'mindmap' ? (
          <RoadmapMindMap />
        ) : (
          <ScrollView style={styles.listContainer}>
            <RoadmapList />
          </ScrollView>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  header: {
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    elevation: 2,
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#f0f2f5',
    borderRadius: 20,
    padding: 2,
  },
  toggleButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 18,
  },
  activeToggle: {
    backgroundColor: '#3498db',
  },
  toggleText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  activeToggleText: {
    color: '#fff',
  },
  content: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
