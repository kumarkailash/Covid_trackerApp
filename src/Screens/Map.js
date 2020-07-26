import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
//  import Navigation from "../HackathonProject/src/Navigation/Navigation"
class Map extends React.Component {
  render() {
    return (
      <View>
        <Image
          style={styles.covidImage}
          source={require('../Images/cronalogo.jpg')}
        />

        <Text style={styles.covid}>Covid-19</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  covid: {
    textAlign: 'center',
  },
  covidImage: {
    marginLeft: 65,
  },
});
export default Map;
