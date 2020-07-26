import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
class Card extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.card1}>
          <Text style={styles.txt}> 765878698</Text>
          <Text style={styles.txt}> Confirmed</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  card1: {
    marginTop: 20,
    width: 300,
    height: 100,
    backgroundColor: 'green',
    marginLeft: 30,
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    borderRadius: 11,
  },
  txt: {
    textAlign: 'center',
    fontSize: 24,
    marginTop: 12,
  },
});
export default Card;
