import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ElevatedCard from './components/ElevatedCard';
import CharacterList from './components/CharacterList'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <FlatCard />
        <ElevatedCard />
        <FancyCard />
        <CharacterList/>
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
