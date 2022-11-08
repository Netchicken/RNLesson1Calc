import {
  Dimensions, // get the screen dimensions
  StyleSheet, // CSS-like styles
  Text, // Renders text
  TouchableOpacity, // Handles row presses
} from 'react-native';
import {React} from 'react';

export const SingleButton = ({onPress, text}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const screen = Dimensions.get('window');
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  button: {
    borderWidth: 3,
    borderColor: '#64dded',
    backgroundColor: '#ffffff',
    flex: 1,
    height: Math.floor(buttonWidth - 50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
  text: {
    color: '##060606',
    fontSize: 24,
  },
});
