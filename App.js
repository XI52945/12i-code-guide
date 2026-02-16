import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import CommonConceptsScreen from './src/screens/CommonConceptsScreen';
import ErrorsScreen from './src/screens/ErrorsScreen';
import SyntaxScreen from './src/screens/SyntaxScreen';
import MemesScreen from './src/screens/MemesScreen';
import ShortcutsScreen from './src/screens/ShortcutsScreen';
import AiAgentScreen from './src/screens/AiAgentScreen';
import RoadmapScreen from './src/screens/RoadmapScreen';
import LinuxScreen from './src/screens/LinuxScreen';
import GitScreen from './src/screens/GitScreen';
import DockerScreen from './src/screens/DockerScreen';
import K8sScreen from './src/screens/K8sScreen';
import SqlScreen from './src/screens/SqlScreen';
import GithubEcosystemScreen from './src/screens/GithubEcosystemScreen';
import GuideScreen from './src/screens/GuideScreen';

const Stack = createNativeStackNavigator();

const linking = {
  prefixes: ['https://XI52945.github.io/12i-code-guide', 'expo-linking-scheme://', '/'],
  config: {
    screens: {
      Home: '',
      Guide: 'guide',
      Roadmap: 'roadmap',
      CommonConcepts: 'concepts',
      Errors: 'errors',
      Syntax: 'syntax',
      Linux: 'linux',
      Git: 'git',
      Docker: 'docker',
      K8s: 'k8s',
      Sql: 'sql',
      Memes: 'memes',
      Shortcuts: 'shortcuts',
      AiAgent: 'vibe-coding',
      GithubEcosystem: 'github',
    },
  },
};

function LogoTitle() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
      <Image
        style={{ width: 32, height: 32, marginRight: 8 }}
        source={require('./assets/logo.png')}
        resizeMode="contain"
      />
      <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#333' }}>12i Code</Text>
    </View>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
        <StatusBar style="auto" />
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#fff',
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 1,
              borderBottomColor: '#f0f0f0',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            headerTitleAlign: 'center',
            headerTintColor: '#333',
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ 
              headerTitle: (props) => <LogoTitle {...props} />,
              title: '12i Code' 
            }}
          />
          <Stack.Screen name="CommonConcepts" component={CommonConceptsScreen} options={{ title: '基础概念速查' }} />
          <Stack.Screen name="Errors" component={ErrorsScreen} options={{ title: '常见报错解释' }} />
          <Stack.Screen name="Syntax" component={SyntaxScreen} options={{ title: '常用语法对比' }} />
          <Stack.Screen name="Memes" component={MemesScreen} options={{ title: '编程梗百科' }} />
          <Stack.Screen name="Shortcuts" component={ShortcutsScreen} options={{ title: '快捷键速查' }} />
          <Stack.Screen name="AiAgent" component={AiAgentScreen} options={{ title: 'Vibe Coding 指南' }} />
          <Stack.Screen name="Roadmap" component={RoadmapScreen} options={{ title: '全栈开发导图' }} />
          <Stack.Screen name="Linux" component={LinuxScreen} options={{ title: 'Linux 命令' }} />
          <Stack.Screen name="Git" component={GitScreen} options={{ title: 'Git 命令' }} />
          <Stack.Screen name="Docker" component={DockerScreen} options={{ title: 'Docker 命令' }} />
          <Stack.Screen name="K8s" component={K8sScreen} options={{ title: 'K8s 命令' }} />
          <Stack.Screen name="Sql" component={SqlScreen} options={{ title: 'SQL 命令' }} />
          <Stack.Screen name="GithubEcosystem" component={GithubEcosystemScreen} options={{ title: 'GitHub 生态指南' }} />
          <Stack.Screen name="Guide" component={GuideScreen} options={{ title: '新手引导手册' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
