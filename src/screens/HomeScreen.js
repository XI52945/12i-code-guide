import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList, ImageBackground, Pressable, Platform } from 'react-native';
import SearchBar from '../components/SearchBar';
import { commonConcepts, errors, syntax, memes, shortcuts, vibeCoding, roadmap, linux, git, docker, k8s, sql, githubEcosystem } from '../data';

const menuItems = [
  { id: 'Guide', title: '新手引导手册', image: require('../../assets/home/guide.jpg'), route: 'Guide' },
  { id: 'Roadmap', title: '全栈开发导图', image: require('../../assets/home/roadmap.jpg'), route: 'Roadmap' },
  { id: 'CommonConcepts', title: '基础概念速查', image: require('../../assets/home/concepts.jpg'), route: 'CommonConcepts' },
  { id: 'Errors', title: '常见报错解释', image: require('../../assets/home/errors.jpg'), route: 'Errors' },
  { id: 'Syntax', title: '常用语法对比', image: require('../../assets/home/syntax.jpg'), route: 'Syntax' },
  { id: 'AiAgent', title: 'Vibe Coding 指南', image: require('../../assets/home/ai.jpg'), route: 'AiAgent' },
  { id: 'GithubEcosystem', title: 'GitHub 生态指南', image: require('../../assets/home/github.jpg'), route: 'GithubEcosystem' },
  { id: 'Linux', title: 'Linux 命令', image: require('../../assets/home/linux.jpg'), route: 'Linux' },
  { id: 'Git', title: 'Git 命令', image: require('../../assets/home/git.jpg'), route: 'Git' },
  { id: 'Docker', title: 'Docker 命令', image: require('../../assets/home/docker.jpg'), route: 'Docker' },
  { id: 'K8s', title: 'K8s 命令', image: require('../../assets/home/k8s.jpg'), route: 'K8s' },
  { id: 'Sql', title: 'SQL 命令', image: require('../../assets/home/sql.jpg'), route: 'Sql' },
  { id: 'Memes', title: '编程梗', image: require('../../assets/home/memes.jpg'), route: 'Memes' },
  { id: 'Shortcuts', title: '快捷键', image: require('../../assets/home/shortcuts.jpg'), route: 'Shortcuts' },
];

const MenuCard = ({ item, navigation }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Pressable
      style={({ pressed }) => [
        styles.cardContainer,
        (isHovered || pressed) && styles.cardHovered,
      ]}
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}
      onPress={() => navigation.navigate(item.route)}
    >
      <ImageBackground
        source={item.image}
        style={styles.cardBackground}
        imageStyle={{ borderRadius: 20 }}
        resizeMode="cover"
      >
        <View style={[styles.glassOverlay, isHovered && styles.glassOverlayHovered]}>
          <Text style={[styles.label, isHovered && styles.labelHovered]}>{item.title}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (!text.trim()) {
      setSearchResults([]);
      return;
    }

    const lowerText = text.toLowerCase();
    const results = [];

    // Search Common Concepts
    commonConcepts.forEach(item => {
      if (item.term.toLowerCase().includes(lowerText) || item.definition.toLowerCase().includes(lowerText)) {
        results.push({ type: item.type || '常用概念', title: item.term, desc: item.definition, route: 'CommonConcepts' });
      }
    });

    // Search Roadmap
    const searchRoadmap = (node) => {
      const title = node.title || '';
      const description = node.description || '';
      const text = node.offlineData?.text || '';
      const details = node.details || '';
      
      if (title.toLowerCase().includes(lowerText) || 
          description.toLowerCase().includes(lowerText) || 
          text.toLowerCase().includes(lowerText) ||
          details.toLowerCase().includes(lowerText)) {
        results.push({ 
          type: '导图', 
          title: title, 
          desc: description || text.substring(0, 50), 
          route: 'Roadmap',
          params: { nodeId: node.id }
        });
      }
      
      if (node.children) {
        node.children.forEach(child => searchRoadmap(child));
      }
    };
    searchRoadmap(roadmap);

    // Search Errors
    errors.forEach(item => {
      if (item.code.toLowerCase().includes(lowerText) || item.meaning.toLowerCase().includes(lowerText)) {
        results.push({ type: '错误', title: item.code, desc: item.meaning, route: 'Errors' });
      }
    });

    // Search Vibe Coding
    vibeCoding.forEach(item => {
      if (item.title.toLowerCase().includes(lowerText) || 
          item.description.toLowerCase().includes(lowerText) ||
          item.category.toLowerCase().includes(lowerText)) {
        results.push({ type: 'Vibe Coding', title: item.title, desc: item.description, route: 'AiAgent' });
      }
    });

    // Search GitHub Ecosystem
    githubEcosystem.forEach(item => {
      if (item.title.toLowerCase().includes(lowerText) || 
          item.description.toLowerCase().includes(lowerText) ||
          item.tags.some(tag => tag.toLowerCase().includes(lowerText))) {
        results.push({ type: 'GitHub', title: item.title, desc: item.description, route: 'GithubEcosystem' });
      }
    });

    // Search Syntax
    syntax.forEach(item => {
      if (item.concept.toLowerCase().includes(lowerText)) {
        results.push({ type: '语法', title: item.concept, desc: '点击查看多语言对比', route: 'Syntax' });
      }
    });

    // Search SQL
    sql.forEach(item => {
      if (item.command.toLowerCase().includes(lowerText) || 
          item.description.toLowerCase().includes(lowerText) || 
          item.example.toLowerCase().includes(lowerText)) {
        results.push({ type: 'SQL', title: item.command, desc: item.description, route: 'Sql' });
      }
    });

    // Search Memes
    memes.forEach(item => {
      if (item.term.toLowerCase().includes(lowerText)) {
        results.push({ type: '梗', title: item.term, desc: item.explanation, route: 'Memes' });
      }
    });

    // Search Shortcuts
    shortcuts.forEach(item => {
      if (item.action.toLowerCase().includes(lowerText)) {
        results.push({ type: '快捷键', title: item.action, desc: '点击查看键位', route: 'Shortcuts' });
      }
    });

    // Search Linux
    linux.forEach(item => {
      if (item.command.toLowerCase().includes(lowerText) || item.description.toLowerCase().includes(lowerText)) {
        results.push({ type: 'Linux', title: item.command, desc: item.description, route: 'Linux' });
      }
    });

    // Search Git
    git.forEach(item => {
      if (item.command.toLowerCase().includes(lowerText) || item.description.toLowerCase().includes(lowerText)) {
        results.push({ type: 'Git', title: item.command, desc: item.description, route: 'Git' });
      }
    });

    // Search Docker
    docker.forEach(item => {
      if (item.command.toLowerCase().includes(lowerText) || item.description.toLowerCase().includes(lowerText)) {
        results.push({ type: 'Docker', title: item.command, desc: item.description, route: 'Docker' });
      }
    });

    // Search K8s
    k8s.forEach(item => {
      if (item.command.toLowerCase().includes(lowerText) || item.description.toLowerCase().includes(lowerText)) {
        results.push({ type: 'K8s', title: item.command, desc: item.description, route: 'K8s' });
      }
    });

    setSearchResults(results);
  };

  const renderContent = () => {
    if (searchQuery.trim()) {
      return (
        <View style={styles.resultsContainer}>
          <Text style={styles.resultHeader}>找到 {searchResults.length} 个结果</Text>
          {searchResults.map((item, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.resultCard}
              onPress={() => navigation.navigate(item.route)}
            >
              <View style={styles.resultTypeContainer}>
                <Text style={styles.resultType}>{item.type}</Text>
              </View>
              <View style={styles.resultInfo}>
                <Text style={styles.resultTitle}>{item.title}</Text>
                <Text style={styles.resultDesc} numberOfLines={1}>{item.desc}</Text>
              </View>
            </TouchableOpacity>
          ))}
          {searchResults.length === 0 && (
            <Text style={styles.noResult}>未找到相关内容</Text>
          )}
        </View>
      );
    }

    return (
      <>
        <View style={styles.grid}>
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} navigation={navigation} />
          ))}
        </View>
      </>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <SearchBar 
        value={searchQuery} 
        onChangeText={handleSearch} 
        placeholder="搜索全站内容..." 
      />
      {renderContent()}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardContainer: {
    width: '48%',
    height: 160,
    marginBottom: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    transition: 'transform 0.3s ease, shadow-radius 0.3s ease',
  },
  cardHovered: {
    transform: [{ scale: 1.05 }],
    shadowOpacity: 0.25,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 12 },
  },
  cardBackground: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  glassOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Slightly dark overlay for contrast
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
  },
  glassOverlayHovered: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Lighter on hover
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
  label: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  labelHovered: {
    transform: [{ scale: 1.05 }],
  },
  resultsContainer: {
    marginTop: 10,
  },
  resultHeader: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  resultCard: {
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  resultTypeContainer: {
    backgroundColor: '#eee',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 12,
  },
  resultType: {
    fontSize: 12,
    color: '#555',
    fontWeight: 'bold',
  },
  resultInfo: {
    flex: 1,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  resultDesc: {
    fontSize: 14,
    color: '#888',
    marginTop: 2,
  },
  noResult: {
    textAlign: 'center',
    marginTop: 20,
    color: '#999',
    fontSize: 16,
  },
});
