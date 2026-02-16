import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Modal, Dimensions } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { roadmap } from '../data/roadmap';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// Visual Constants
const LINE_COLOR = '#718096'; // Darker Slate Grey for better visibility
const LINE_WIDTH = 2;
const CONNECTOR_WIDTH = 30;
const NODE_RADIUS = 8;
const CORNER_RADIUS = NODE_RADIUS + 2;

const MindMapNode = ({ node, isRoot = false, isFirst = false, isLast = false, onSelectNode }) => {
  const [expanded, setExpanded] = useState(true);
  
  const hasChildren = node.children && node.children.length > 0;
  
  const handlePress = () => {
    onSelectNode(node);
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.nodeWrapper}>
      {/* Left Connector (Input) - Not for Root */}
      {!isRoot && (
        <View style={styles.leftConnectorContainer}>
          {/* Vertical Lines */}
          <View style={[
            styles.connectorLineV, 
            styles.connectorTop,
            isFirst ? styles.connectorTransparent : null,
            // If Last node, top line should stop before the curve
            isLast ? { bottom: '50%', height: 'auto', top: 0, marginBottom: CORNER_RADIUS } : null
          ]} />
          
          <View style={[
            styles.connectorLineV, 
            styles.connectorBottom,
            isLast ? styles.connectorTransparent : null,
            // If First node, bottom line should start after the curve
            isFirst ? { top: '50%', marginTop: CORNER_RADIUS - LINE_WIDTH / 2 } : null
          ]} />

          {/* Horizontal Line */}
          {/* If First/Last, start after the curve. Otherwise (Middle), start at 0 (T-junction) */}
          <View style={[
            styles.connectorLineH,
            (isFirst !== isLast) ? { left: CORNER_RADIUS } : null
          ]} />
          
          {/* Rounded Corners */}
          {isFirst && !isLast && <View style={styles.cornerTopLeft} />}
          {isLast && !isFirst && <View style={styles.cornerBottomLeft} />}
        </View>
      )}

      {/* Node Content */}
      <View style={styles.nodeContainer}>
        <TouchableOpacity 
          style={[
            styles.nodeContent, 
            isRoot ? styles.rootNode : styles.childNode,
            !expanded && hasChildren && styles.collapsedNode
          ]}
          onPress={handlePress}
          activeOpacity={0.8}
        >
          <Text style={[styles.nodeTitle, isRoot && styles.rootTitle]}>
            {node.title}
          </Text>
          {hasChildren && (
            <TouchableOpacity onPress={toggleExpand} style={styles.expandButton}>
              <Text style={styles.expandIcon}>{expanded ? '-' : '+'}</Text>
            </TouchableOpacity>
          )}
        </TouchableOpacity>
      </View>

      {/* Right Connector (Output) & Children */}
      {expanded && hasChildren && (
        <View style={styles.childrenWrapper}>
          <View style={styles.rightConnector} />
          <View style={styles.childrenColumn}>
            {node.children.map((child, index) => (
              <MindMapNode 
                key={child.id} 
                node={child} 
                isFirst={index === 0}
                isLast={index === node.children.length - 1}
                onSelectNode={onSelectNode}
              />
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

export default function RoadmapMindMap() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [contentSize, setContentSize] = useState({ width: 0, height: 0 });

  const scale = useSharedValue(1.0);
  const savedScale = useSharedValue(1.0);

  const pinch = Gesture.Pinch()
    .onUpdate((e) => {
      scale.value = savedScale.value * e.scale;
    })
    .onEnd(() => {
      savedScale.value = scale.value;
    });

  const animatedStyle = useAnimatedStyle(() => {
    // Clamp scale
    const currentScale = Math.max(0.4, Math.min(scale.value, 3.0));
    
    // Scale container size
    const width = contentSize.width * currentScale;
    const height = contentSize.height * currentScale;
    
    // Adjust position for center scaling
    const translateX = (contentSize.width * (currentScale - 1)) / 2;
    const translateY = (contentSize.height * (currentScale - 1)) / 2;

    return {
      width,
      height,
      transform: [
        { scale: currentScale },
        { translateX },
        { translateY }
      ]
    };
  });

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollContent} showsHorizontalScrollIndicator={true}>
        <ScrollView contentContainerStyle={styles.verticalScrollContent} showsVerticalScrollIndicator={true}>
          {/* Zoom Wrapper */}
          <GestureDetector gesture={pinch}>
            <Animated.View style={[
              styles.zoomContainer, 
              animatedStyle,
              { position: 'relative' }
            ]}>
              <View 
                style={styles.mindMapWrapper}
              >
                <View 
                  style={styles.mindMapContainer}
                  onLayout={(e) => setContentSize(e.nativeEvent.layout)}
                >
                  <MindMapNode 
                    node={roadmap} 
                    isRoot={true} 
                    onSelectNode={setSelectedNode}
                  />
                </View>
              </View>
            </Animated.View>
          </GestureDetector>
        </ScrollView>
      </ScrollView>

      {/* Detail Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={!!selectedNode}
        onRequestClose={() => setSelectedNode(null)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{selectedNode?.title}</Text>
              <TouchableOpacity onPress={() => setSelectedNode(null)} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>✕</Text>
              </TouchableOpacity>
            </View>
            
            <ScrollView style={styles.modalBody}>
              {selectedNode?.description && (
                <Text style={styles.modalDesc}>{selectedNode.description}</Text>
              )}
              
              {selectedNode?.details && (
                <View style={styles.modalSection}>
                  <Text style={styles.sectionLabel}>关键点：</Text>
                  <Text style={styles.sectionText}>{selectedNode.details}</Text>
                </View>
              )}

              {selectedNode?.offlineData && (
                <View style={styles.modalSection}>
                  <Text style={styles.sectionLabel}>百科介绍：</Text>
                  <Text style={styles.wikiText}>{selectedNode.offlineData.text}</Text>
                </View>
              )}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative', // For absolute positioning of zoom controls
  },
  scrollContent: {
    padding: 40,
    minWidth: '100%',
  },
  verticalScrollContent: {
    minHeight: '100%',
  },
  zoomContainer: {
    // origin needs to be top-left for predictable scaling inside scrollview
    // Note: 'transformOrigin' is not fully supported in RN Native, but works in RN Web.
    // In pure RN, scaling centers by default. We might need padding or alignment adjustment.
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  mindMapWrapper: {
    // Wrapper for scaling transform
    // transformOrigin: 'top left', // for web
  },
  mindMapContainer: {
    alignItems: 'flex-start',
  },
  
  // Zoom Controls
  zoomControls: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    flexDirection: 'column',
    gap: 5,
    zIndex: 100,
  },
  zoomButton: {
    width: 40,
    height: 40,
    backgroundColor: '#f8f9fa',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  zoomText: {
    fontSize: 24,
    color: '#4a5568',
    fontWeight: 'bold',
    lineHeight: 26,
  },
  zoomTextLabel: {
    fontSize: 12,
    color: '#4a5568',
    fontWeight: 'bold',
  },

  // Node Layout
  nodeWrapper: {
    flexDirection: 'row',
    alignItems: 'center', // This centers the Node vertically relative to children
  },
  nodeContainer: {
    zIndex: 10,
    marginVertical: 10, // Spacing between nodes
  },
  nodeContent: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#4299E1',
    borderRadius: NODE_RADIUS,
    paddingVertical: 12,
    paddingHorizontal: 16,
    minWidth: 140,
    maxWidth: 220,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 4,
    position: 'relative',
  },
  rootNode: {
    backgroundColor: '#2D3748',
    borderColor: '#2D3748',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  childNode: {
    backgroundColor: '#fff',
  },
  collapsedNode: {
    borderStyle: 'dashed',
    opacity: 0.9,
  },
  nodeTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2D3748',
    textAlign: 'center',
  },
  rootTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  expandButton: {
    position: 'absolute',
    right: -12,
    top: -12,
    backgroundColor: '#F56565',
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 20,
    borderWidth: 2,
    borderColor: '#fff',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  expandIcon: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 16,
  },

  // Connectors
  leftConnectorContainer: {
    width: CONNECTOR_WIDTH,
    alignSelf: 'stretch', // Ensures container stretches to full height of flex parent
    position: 'relative',
  },
  connectorLineV: {
    position: 'absolute',
    left: 0,
    width: LINE_WIDTH,
    backgroundColor: LINE_COLOR,
  },
  connectorTop: {
    top: 0,
    height: '50%',
  },
  connectorBottom: {
    top: '50%',
    height: '50%',
  },
  connectorTransparent: {
    backgroundColor: 'transparent',
  },
  connectorLineH: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    height: LINE_WIDTH,
    backgroundColor: LINE_COLOR,
    marginTop: -LINE_WIDTH/2,
  },
  
  // Rounded Corners
  cornerTopLeft: {
    position: 'absolute',
    top: '50%',
    left: 0,
    width: CORNER_RADIUS,
    height: CORNER_RADIUS + LINE_WIDTH / 2,
    borderTopWidth: LINE_WIDTH,
    borderLeftWidth: LINE_WIDTH,
    borderColor: LINE_COLOR,
    borderTopLeftRadius: CORNER_RADIUS,
    marginTop: -LINE_WIDTH/2,
  },
  cornerBottomLeft: {
    position: 'absolute',
    bottom: '50%',
    left: 0,
    width: CORNER_RADIUS,
    height: CORNER_RADIUS + LINE_WIDTH / 2,
    borderBottomWidth: LINE_WIDTH,
    borderLeftWidth: LINE_WIDTH,
    borderColor: LINE_COLOR,
    borderBottomLeftRadius: CORNER_RADIUS,
    marginBottom: -LINE_WIDTH/2,
  },

  rightConnector: {
    width: CONNECTOR_WIDTH,
    height: LINE_WIDTH,
    backgroundColor: LINE_COLOR,
  },
  childrenWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  childrenColumn: {
    flexDirection: 'column',
    justifyContent: 'center',
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: screenHeight * 0.7,
    padding: 20,
    elevation: 10,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 15,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    flex: 1,
  },
  closeButton: {
    padding: 5,
  },
  closeButtonText: {
    fontSize: 24,
    color: '#999',
  },
  modalBody: {
    flex: 1,
  },
  modalDesc: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
    marginBottom: 20,
    lineHeight: 24,
  },
  modalSection: {
    marginBottom: 20,
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
  },
  wikiText: {
    fontSize: 15,
    color: '#333',
    lineHeight: 24,
    textAlign: 'justify',
  },
});
