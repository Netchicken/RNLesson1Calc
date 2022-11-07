import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Row from './Row';
export const ButtonKeyPad = ({
  onPress,
  text,
  size,
  theme,
  updateCalculation,
}) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  //  const rowStart = ({i}) => {
  //    return ((i % 4 === 0) ? <Row>: null)};

  if (size === 'double') {
    buttonStyles.push(styles.buttonDouble);
  }

  if (theme === 'secondary') {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === 'accent') {
    buttonStyles.push(styles.buttonAccent);
  }

  //lets make an array to hold all the buttons
  let buttons = [];
  //lets make a for loop that counts 10 times
  for (let i = 0; i < 10; i++) {
    //  rowStart({i});
    let istring = String(i); //i must be a string
    buttons.push(
      //add new buttons to the array
      <TouchableOpacity
        onPress={() => updateCalculation(i)}
        Key={istring}
        title={istring}
        style={buttonStyles}>
        <Text style={textStyles}>{istring}</Text>
      </TouchableOpacity>,
      //  rowEnd({i}),
    );
  }

  return (
    <View>
      {buttons}

      <TouchableOpacity
        onPress={() => updateCalculation('.')}
        Key={'dot'}
        title="."
        style={buttonStyles}
      />
      <TouchableOpacity
        onPress={() => updateCalculation('del')}
        Key={'del'}
        title="Del"
        style={buttonStyles}
      />
    </View>
  );
};

// set dimmenstion
const screen = Dimensions.get('window');
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#333333',
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
  textSecondary: {
    color: '#060606',
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: 'flex-start',
    paddingLeft: 40,
  },
  buttonSecondary: {
    backgroundColor: '#a6a6a6',
  },
  buttonAccent: {
    backgroundColor: '#ffc107',
  },
});
