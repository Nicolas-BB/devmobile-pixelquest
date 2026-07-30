import { StyleSheet, View, SafeAreaView, StatusBar, Text } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={batata.container}>
      <StatusBar barStyle="light-content" />
      <View style={batata.header}>
        <View>
          <Text style={batata.logo}>Pixel Quest</Text>
          <Text style={batata.subtitle}>Sua primeira aventura mobile</Text>
        </View>
        <View style={batata.level}>
          <Text style={batata.txtLevel}>Lvl.01</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const batata = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 22,
    paddingVertical: 30,
    backgroundColor: '#191a21',
  },
  header: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: '#bd93f9',
  },
  subtitle: {
    color: '#a5a1b2',
  },
  level: {
    backgroundColor: '#282a36',
    borderColor: '#50fa7b',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  txtLevel: {
    color: '#50fa7b',
    fontWeight: 'bold',
  },
});
