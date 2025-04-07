import React from 'react';
import {Jukerstone, useJukerstone} from 'jukerstone-react-native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function Section({children, title}: any): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {color: isDarkMode ? Colors.white : Colors.black},
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {color: isDarkMode ? Colors.light : Colors.dark},
        ]}>
        {children}
      </Text>
    </View>
  );
}

// 🎛️ Simple functional controls using the SDK
const JukerstoneControls = () => {
  const {load, pause} = useJukerstone();

  return (
    <View style={{padding: 16}}>
      <Button
        title="Load Penny Lane by the beatles"
        onPress={() => load({isrc: 'GBAYE0601641'})}
      />
      <Button title="▶️ Play" onPress={pause} />
      <Button title="⏸ Pause" onPress={pause} />
    </View>
  );
};

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <Jukerstone.Provider
        developerToken="sk_ud7C9uUlpeyjedomEsmRDIPB4757922WDyVE"
        jukerstoneId="TvauQsMtXJSeZyLhRHj3RV8FjjH2">
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Header />
          <Section title="Welcome to JukePod™">Stream. Play. Repeat.</Section>
          <JukerstoneControls />
        </ScrollView>
      </Jukerstone.Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
