import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { roadmap } from '../data/roadmap';

const Node = ({ node, level = 0 }) => {
  const [expanded, setExpanded] = useState(false);
  
  const hasChildren = node.children && node.children.length > 0;
  const isExpandable = hasChildren || node.details || node.offlineData;

  const handlePress = () => {
    if (!isExpandable) return;
    setExpanded(!expanded);
  };

  return (
    <View style={[styles.nodeContainer, { marginLeft: level * 15 }]}>
      <TouchableOpacity 
        style={[styles.nodeContent, hasChildren ? styles.parentNode : styles.leafNode]}
        onPress={handlePress}
        activeOpacity={0.7}
        disabled={!isExpandable}
      >
        <View style={styles.nodeHeader}>
          {isExpandable ? (
            <Text style={styles.expandIcon}>{expanded ? '▼' : '▶'}</Text>
          ) : (
            <View style={styles.spacer} />
          )}
          <Text style={[styles.nodeTitle, level === 0 && styles.rootTitle]}>{node.title}</Text>
        </View>
        
        {node.description && (
          <Text style={styles.nodeDesc}>{node.description}</Text>
        )}

        {expanded && (
          <View style={styles.expandedContent}>
            {/* Local Details */}
            {node.details && (
               <View style={styles.detailsContainer}>
                 <Text style={styles.detailsText}>{node.details}</Text>
               </View>
            )}
            
            {/* Offline Data Section */}
            {node.offlineData && (
              <View style={styles.wikiSection}>
                <View style={styles.wikiContainer}>
                  <Text style={styles.wikiExtract}>{node.offlineData.text}</Text>
                </View>
              </View>
            )}
          </View>
        )}
      </TouchableOpacity>
      
      {expanded && hasChildren && (
        <View style={styles.childrenContainer}>
          {node.children.map((child) => (
            <Node key={child.id} node={child} level={level + 1} />
          ))}
        </View>
      )}
    </View>
  );
};

export default function RoadmapList() {
  return (
    <View style={styles.treeContainer}>
      <Node node={roadmap} level={0} />
      <View style={styles.footer}>
        <Text style={styles.footerText}>数据来源：本地离线知识库</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  treeContainer: {
    paddingBottom: 40,
  },
  nodeContainer: {
    marginBottom: 10,
    borderLeftWidth: 2,
    borderLeftColor: '#ddd',
    paddingLeft: 10,
  },
  nodeContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: '#eee',
  },
  parentNode: {
    borderColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  leafNode: {
    backgroundColor: '#fbfbfb',
  },
  nodeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  expandIcon: {
    fontSize: 12,
    color: '#666',
    marginRight: 8,
    width: 14,
  },
  spacer: {
    width: 22,
  },
  nodeTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  rootTitle: {
    fontSize: 20,
    color: '#2c3e50',
  },
  nodeDesc: {
    fontSize: 14,
    color: '#666',
    marginLeft: 22,
    marginBottom: 4,
  },
  expandedContent: {
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  detailsContainer: {
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  detailsText: {
    fontSize: 14,
    color: '#444',
    lineHeight: 22,
  },
  wikiSection: {
    marginTop: 5,
    backgroundColor: '#f8f9fa',
    borderRadius: 6,
    padding: 10,
    borderWidth: 1,
    borderColor: '#eaeaea',
  },
  wikiContainer: {
    width: '100%',
  },
  wikiExtract: {
    fontSize: 14,
    color: '#333',
    lineHeight: 22,
    textAlign: 'justify',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#999',
  }
});
