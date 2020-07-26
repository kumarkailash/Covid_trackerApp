import React, {Component} from 'react';
import {StyleSheet, Picker} from 'react-native';
import {Item} from 'native-base';

const data = [
  {
    name: 'Afghanistan',
    code: 'AF',
  },
  {
    name: 'Pakistan',
    code: 'PAK',
  },

  {
    name: 'India',
    code: 'IND',
  },

  {
    name: 'Bangladesh',
    code: 'BNG',
  },
];

export default class CustomPicker extends Component {
  render() {
    return (
      <Item rounded style={styles.item}>
        <Picker
          style={styles.pickerStyle}
          selectedValue={this.props.language}
          onValueChange={this.props.onValueChange}>
          {data &&
            data.map((val, i) => {
              return <Picker.Item key={i} label={val.name} value={val.name} />;
            })}
        </Picker>
      </Item>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
    // borderColor: '#3465d9',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 25,
  },
  textStyle: {
    margin: 10,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pickerStyle: {
    width: '100%',
    color: '#344953',
  },
});
