import {
  View, //The most fundamental component for building a UI, View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls. https://reactnative.dev/docs/view
  StyleSheet, //StyleSheet.create returns a stylesheet object. https://reactnative.dev/docs/stylesheet
  Dimensions, //Dimensions provides access to the window's width and height. https://reactnative.dev/docs/dimensions
  Pressable,
  Text, //A React component for displaying text which supports nesting, styling, and touch handling. https://reactnative.dev/docs/text
} from 'react-native';
import React from 'react';
import {PressableButton} from './Button';
// import {Row} from './Row';

export const CalcButtons = ({updateCalculation}) => {
  return (
    <View style={styles.rowcontainer}>
      <PressableButton onPress={updateCalculation} symbol="+" />
      <PressableButton onPress={updateCalculation} symbol="*" />
      <PressableButton onPress={updateCalculation} symbol="/" />
      <PressableButton onPress={updateCalculation} symbol="-" />

      {/* <Pressable onPress={() => updateCalculation('-')} style={styles.button}>
        <Text style={styles.text}>{'-'}</Text>
      </Pressable>
      <Pressable onPress={() => updateCalculation('*')} style={styles.button}>
        <Text style={styles.text}>{'X'}</Text>
      </Pressable>
      <Pressable onPress={() => updateCalculation('/')} style={styles.button}>
        <Text style={styles.text}>{'/'}</Text>
      </Pressable> */}
      {/* <View style={{backgroundColor: 'blue', flex: 0.3}}>
        <Text>Hello World!</Text>
      </View> */}
    </View>
  );
};

// set dimensions
const screen = Dimensions.get('window');
const buttonWidth = screen.width / 3;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#23e25c',
    backgroundColor: '#f06464',

    // height: Math.floor(buttonWidth - 150),
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },

  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },

  rowcontainer: {
    flexDirection: 'row',
    width: '100%', //you need this to see the buttons
    alignContent: 'flex-start',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
