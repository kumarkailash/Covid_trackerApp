import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {Picker, Card} from './index';
const axios = require('axios');

// const chartData = [
//   {
//     name: 'Confirmed',
//     color: '#0000FF',
//     legendFontColor: '#0000FF',
//     legendFontSize: 10,
//   },
//   {
//     name: 'Recovered',
//     color: 'green',
//     legendFontColor: 'green',
//     legendFontSize: 10,
//   },
//   {
//     name: 'Deaths',
//     color: 'red',
//     legendFontColor: 'red',
//     legendFontSize: 10,
//   },
// ];

export default class CountriesScreen extends Component {
  constructor() {
    super();
    this.state = {
      contury: '',
      showCard: false,
      data: [
        {
          title: 'Confirmed Cases',
          backgroundColor: '#0000FF',
        },
        {
          title: 'Recovered Cases',
          backgroundColor: 'green',
        },

        {
          title: 'Deaths',
          backgroundColor: 'red',
        },
        {
          title: 'Last Updated',
          backgroundColor: '#0000FF',
        },
      ],
    };
  }

  handelCity = async (itemValue) => {
    let {data} = this.state;
    this.setState({contury: itemValue});
    await fetch(`https://covid19.mathdro.id/api/countries/${itemValue}`, {
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
    let {contury, data, showCard, chartData} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.headingContainer}>
            <Picker language={contury} onValueChange={this.handelCity} />
          </View>

          <Text style={styles.AllCase}>Country Detail of Crona Cases</Text>
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
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingContainer: {
    marginVertical: 20,
  },
  heading: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3465d9',
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
  AllCase: {
    fontSize: 20,
    marginLeft: 56,
  },
});
