import {
  Button, //A basic button component that should render nicely on any platform. Supports a minimal level of customization.  https://reactnative.dev/docs/button
  View, //The most fundamental component for building a UI, View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls. https://reactnative.dev/docs/view
} from 'react-native';

export const CalcButtons = props => {
  return (
    <View>
      <Button onPress={() => props.updateCalculation('+')} title="+" />
      <Button onPress={() => props.updateCalculation('-')} title="-" />
      <Button onPress={() => props.updateCalculation('*')} title="X" />
      <Button onPress={() => props.updateCalculation('/')} title="/" />
      <Button onPress={() => props.updateCalculation('=')} title="=" />
      <Button onPress={() => props.updateCalculation('clear')} title="Clear" />
    </View>
  );
};
// export default CalcButtons;
