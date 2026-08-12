import { View, Text, StyleSheet } from 'react-native';

export default function HeroCard({ nome, cristalsNumbers }) {
  return (
    <View style={styles.HeroCard}>
      <Text style={styles.heroEmoji}>👽</Text>
      <Text style={styles.heroTitle}>Olá, {nome}</Text>

      <Text style={styles.heroDescription}>
        Colete os cristais perdidos e desbloqueie o portal da programação.
      </Text>

      <View style={styles.heroProgressBackgroud}>
        <View style={styles.progressValue} />
      </View>

      <Text style={styles.progressText}>{cristalsNumbers} de 5 cristais encontrados</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  HeroCard: {
    backgroundColor: '#282A36',
    borderColor: '#44475a',
    borderWidth: 1,
    borderRadius: 24,
    alignItems: 'center',
    padding: 22,
    marginTop: 22,
    marginBottom: 21,
  },
  heroEmoji: {
    fontSize: 65,
  },
  heroTitle: {
    color: '#f8f8f2',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  heroDescription: {
    color: '#bfbbcb',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 8,
  },
  heroProgressBackgroud: {
    width: '100%',
    height: 10,
    backgroundColor: '#44475a',
    borderRadius: 5,
    marginTop: 20,
    overflow: 'hidden',
  },
  progressValue: {
    width: '60%',
    height: '100%',
    backgroundColor: '#50fa7b',
    borderRadius: 5,
  },
  progressText: {
    color: '#50fa7b',
    fontSize: 12,
    marginTop: 8,
  },
})
