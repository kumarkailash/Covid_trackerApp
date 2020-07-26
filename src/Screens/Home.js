import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
class Home extends React.Component {
  render() {
    return (
      <View>
        <Image style={styles.covidImage} source={require('../Images/w.png')} />

        <Text style={styles.covid}>Covid-19</Text>

        <Text style={styles.covidinfo}>
          Coronavirus disease (COVID-19) is an infectious disease caused by a
          newly discovered coronavirus. Protect yourself and others around you
          by knowing the facts and taking appropriate precautions
        </Text>

        <View>
          <Image
            style={styles.img}
            source={require('../Images/washhand.png')}
          />
          <Text style={styles.cardpics}> Wash Hand</Text>
        </View>

        <View>
          <Image
            style={styles.img}
            source={require('../Images/facemask.png')}
          />
          <Text style={styles.cardpics}> Use Face Mask</Text>
        </View>

        <TouchableOpacity
          style={styles.GetStarted}
          onPress={() => this.props.navigation.navigate('DashBoard')}>
          <Text style={styles.startedButton}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  home: {
    color: 'red',
    fontSize: 25,
    marginTop: 50,
    marginLeft: 45,
  },
  covidImage: {
    marginTop: 12,
    width: 360,
    height: 150,
    marginLeft: 2,
  },
  GetStarted: {
    width: 150,
    backgroundColor: 'red',
    padding: 12,
    marginTop: 12,
    marginLeft: 110,
  },
  startedButton: {
    color: 'white',
    textAlign: 'center',
  },
  card: {
    // marginTop:20,
    width: 300,
    height: 100,
    backgroundColor: 'gray',
    marginLeft: 20,
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  img: {
    width: 120,
    height: 120,
    marginLeft: 120,
    marginTop: 20,
  },
  cardpics: {
    textAlign: 'center',
    fontSize: 20,
  },
  covidinfo: {
    marginLeft: 15,
    fontSize: 15,
    marginTop: 4,
  },
  covid: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 5,
  },
});
export default Home;
