import {
  Button, //A basic button component that should render nicely on any platform. Supports a minimal level of customization.  https://reactnative.dev/docs/button
  View, //The most fundamental component for building a UI, View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls. https://reactnative.dev/docs/view
} from 'react-native';
import React from 'react';

export const ButtonKeyPad = props => {
  //lets make an array to hold all the buttons
  let buttons = [];
  //lets make a for loop that counts 10 times
  for (let i = 0; i < 10; i++) {
    let istring = String(i); //i must be a string
    buttons.push(
      //add new buttons to the array
      <Button
        onPress={() => props.updateCalculation(i)}
        Key={istring}
        title={istring}
      />,
    );
  }

  return (
    <View>
      {buttons}
      <Button
        onPress={() => props.updateCalculation('.')}
        Key={'dot'}
        title="."
      />
      <Button
        onPress={() => props.updateCalculation('del')}
        Key={'del'}
        title="Del"
      />
    </View>
  );
};
