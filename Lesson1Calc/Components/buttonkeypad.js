import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export const ButtonKeyPad = ({updateCalculation}) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  //lets make an array to hold all the buttons
  let buttons = [];
  //lets make a for loop that counts 10 times
  for (let i = 0; i < 10; i++) {
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
    backgroundColor: '#569d48',
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
});
