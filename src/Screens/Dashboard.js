import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Picker,
} from 'react-native';

class DashBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      confirmed: '',
      recovered: '',
      deaths: '',
    };
  }
  componentDidMount = async () => {
    await fetch('https://covid19.mathdro.id/api', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          confirmed: json.confirmed.value,
          recovered: json.recovered.value,
          deaths: json.deaths.value,
        });
        this.setState({});
      })
      .catch((err) => console.log('new error', err));
  };

  render() {
    return (
      <View>
        <Image
          style={styles.covidlogoImg}
          source={require('../Images/cronalogo.jpg')}
        />

        <Text style={styles.AllCase}>World Wide Corona Cases</Text>
        <View style={styles.card1}>
          <Text style={styles.txt}> {this.state.confirmed}</Text>
          <Text style={styles.txt}> Confirmed</Text>
        </View>

        <View style={styles.card2}>
          <Text style={styles.txt}> {this.state.recovered}</Text>
          <Text style={styles.txt}> recovered</Text>
        </View>

        <View style={styles.card3}>
          <Text style={styles.txt}> {this.state.deaths}</Text>
          <Text style={styles.txt}> Deaths</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },

  card1: {
    marginTop: 20,
    width: 300,
    height: 100,
    backgroundColor: 'gray',
    marginLeft: 30,
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    borderRadius: 11,
  },
  card2: {
    marginTop: 20,
    width: 300,
    height: 100,
    backgroundColor: 'red',
    marginLeft: 30,
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    borderRadius: 11,
  },
  card3: {
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
  selectCounrty: {
    textAlign: 'center',
    fontSize: 20,
  },
  covidlogoImg: {
    marginTop: 50,
    width: 150,
    height: 150,
    marginLeft: 100,
    borderRadius: 70,
  },
  AllCase: {
    textAlign: 'center',
    fontSize: 25,
  },
});

export default DashBoard;
