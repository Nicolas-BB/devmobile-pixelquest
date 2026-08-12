import { View, Text, StyleSheet } from 'react-native';

export default function MissionCard({ cristalsQuantityRiquere, description }) {
  return (
    <View style={styles.missionRemains}>
      <View style={styles.iconMission}>
        <Text style={styles.missionIcon}>🏰</Text>
      </View>

      <View style={styles.infoMission}>
        <Text style={styles.cristalsRemain}>
          {cristalsQuantityRiquere} Cristais para abrir este portal
        </Text>
        
        <Text style={styles.missionDescription}>{description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  missionRemains: {
    backgroundColor: '#282a36',
    borderRadius: 16,
    width: '100%',
    flexDirection: 'row',
    padding: 16,
    marginBottom: 106,
    marginTop: 18,
  },
  iconMission: {
    backgroundColor: '#4b4e5c',
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  cristalsRemain: {
    fontWeight: 'bold',
    color: "#f8f8f2",
  },
  missionIcon: {
    fontSize: 24,
  },
  missionDescription: {
    color: '#bfbbcb',
    fontSize: 14,
  },
  infoMission: {
    flex: 1,
    marginTop: 5,
    marginLeft: 12
  },
})
