import {View, Text, StyleSheet} from 'react-native';

export default function ProgressCard({emoji, cor, legenda, valor}) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statEmoji}>{emoji}</Text>
      <Text style={[styles.statValue, { color: cor }]}>{valor}</Text>
      <Text style={styles.statLabel}>{legenda} </Text>
    </View>
  );
  }

const styles = StyleSheet.create({
  statCard:{
    flex: 1,
    backgroundColor: '#282a36',
    borderRadius: 16,
    alignItems: 'center',
    paddingVertical: 14,
  },
  statEmoji:{
    fontSize: 22,
  },
  statValue:{
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 4,
  },
  statLabel:{
    color: '#a5a1b2',
    fontSize: 11,
    marginTop: 2,
  },
}
)