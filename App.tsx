import { Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Text>App</Text> */}
        <FlatCards />
        <ElevatedCards />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FancyCard />
          <FancyCard />
          <FancyCard />
        </ScrollView>
      <ActionCard />
      <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
