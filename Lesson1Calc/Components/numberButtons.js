import {StyleSheet, View} from 'react-native';
import React from 'react';
// import {Row} from './Row';
import {SingleButton} from './Button';

export const NumberButtons = ({updateCalculation}) => {
  return (
    <View>
      <View style={styles.rowcontainer}>
        <SingleButton
          style={styles.button}
          text="0"
          onPress={() => updateCalculation('0')}
        />
        <SingleButton
          style={styles.button}
          text="1"
          onPress={() => updateCalculation('1')}
        />
        <SingleButton
          style={styles.button}
          text="2"
          onPress={() => updateCalculation('2')}
        />
      </View>
      <View style={styles.rowcontainer}>
        <SingleButton text="3" onPress={() => updateCalculation('3')} />
        <SingleButton text="4" onPress={() => updateCalculation('4')} />
        <SingleButton text="5" onPress={() => updateCalculation('5')} />
      </View>
      <View style={styles.rowcontainer}>
        <SingleButton text="6" onPress={() => updateCalculation('6')} />
        <SingleButton text="7" onPress={() => updateCalculation('7')} />
        <SingleButton text="8" onPress={() => updateCalculation('8')} />
      </View>
      <View style={styles.rowcontainer}>
        <SingleButton text="9" onPress={() => updateCalculation('6')} />
        <SingleButton text="." onPress={() => updateCalculation('.')} />
        <SingleButton text="Clear" onPress={() => updateCalculation('clear')} />
      </View>
      <View style={styles.rowcontainer}>
        <SingleButton text="=" onPress={() => updateCalculation('=')} />
        <SingleButton text="Del" onPress={() => updateCalculation('del')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 3,
    borderRadius: 50,
    borderColor: '#64dded',
    backgroundColor: '#ffffff',
    width: 50,
    height: 50,
  },

  rowcontainer: {
    flexDirection: 'row',
    alignContent: 'flex-start',
    flexWrap: 'wrap',
  },
});
