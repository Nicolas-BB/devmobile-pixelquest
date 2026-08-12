import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import Header from './components/Header'
import HeroCard from './components/HeroCard'
import ProgressCard from './components/ProgressCard'
import MissionCard from './components/MissionCard'

export default function App() {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar barStyle="light-content" />
      <View style={styles.screen}>
        <Text style={styles.sectionTitle}>Progresso da missão</Text>
        <Header level='01' />
        <HeroCard
          nome='Nícolas'
          cristalsNumbers='3'
        />
        <ProgressCard
          emoji='💎'
          valor='03'
          legenda='Cristais'
          cor='#39dff5'
        />
        <MissionCard
          description="Atrás desse portal encontra-se o Mago Implacável! 🦆"
          cristalsQuantityRiquere="3"
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#191a21',
    paddinHorizontal: 22,
    paddingTop: 30
  },
  sectionTitle: {
    color: "#f8f8f2",
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 12,
  },
  screen: {
    flex: 1,
  },
})
