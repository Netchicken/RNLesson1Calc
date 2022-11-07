import {
  Button, //A basic button component that should render nicely on any platform. Supports a minimal level of customization.  https://reactnative.dev/docs/button
  View, //The most fundamental component for building a UI, View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls. https://reactnative.dev/docs/view
  StyleSheet, //StyleSheet.create returns a stylesheet object. https://reactnative.dev/docs/stylesheet
  Dimensions, //Dimensions provides access to the window's width and height. https://reactnative.dev/docs/dimensions
} from 'react-native';
import React from 'react';
import Row from './Row';

export const CalcButtons = ({updateCalculation}) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  return (
    <View>
      <Row>
        <Button
          onPress={() => updateCalculation('+')}
          style={styles.button}
          title="+"
        />
        <Button
          onPress={() => updateCalculation('-')}
          style={buttonStyles}
          title="-"
        />
        <Button
          onPress={() => updateCalculation('*')}
          style={buttonStyles}
          title="X"
        />

        <Button
          onPress={() => updateCalculation('/')}
          style={buttonStyles}
          title="/"
        />
        <Button
          onPress={() => updateCalculation('=')}
          style={buttonStyles}
          title="="
        />
        <Button
          onPress={() => updateCalculation('clear')}
          style={styles.button}
          title="Clear"
        />
      </Row>
    </View>
  );
};
// export default CalcButtons;
// set dimmenstion
const screen = Dimensions.get('window');
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#333333',
    flex: 1,
    height: Math.floor(buttonWidth - 50),
    alignItems: 'center',
    justifyContent: 'stretch',
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
});
