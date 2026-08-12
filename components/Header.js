import {View, Text, StyleSheet} from 'react-native';

export default function Header (level) {
  return (
   <View style={styles.header}>
     <View>
      <Text style={styles.titulo}>PIXEL QUEST</Text>
<Text style={styles.subtitulo}>Sua primeira aventura Mobile!</Text>
      </View>
    <View style={styles.level}>
      <Text style={styles.levelText}>LV {level.level}</Text>
    </View>  

  </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  titulo: {
    color: '#bd93f9',
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 2,
  },
  subtitulo: {
    color: '#808080',
    fontSize: 13,
    letterSpacing: 2,
  },
  level:{
    backgroundColor: '#282a36',
    borderColor: '#50fa7b',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 22
  
  },
  levelText: {
    color: '#50fa7b',
    fontWeight: '700'
  },

});
