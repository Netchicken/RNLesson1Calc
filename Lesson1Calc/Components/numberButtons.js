import {
  Dimensions, // get the screen dimensions
  StyleSheet, // CSS-like styles
  Text, // Renders text
  TouchableOpacity, // Handles row presses
} from 'react-native';
import React from 'react';
import Row from 'Row';
import Button from 'Button';

export const numberButtons = ({onPress, text}) => {
  return (
     <Row>
            <Button
              style={styles.Button}
              text="0"
              onPress={() => updateCalculation(0)}
            />
            <Button
              style={styles.Button}
              text="1"
              onPress={() => updateCalculation(1)}
            />
            <Button
              style={styles.Button}
              text="2"
              onPress={() => updateCalculation(2)}
            />
          </Row>
          <Row>
            <Button text="3" onPress={() => updateCalculation(3)} />
            <Button text="4" onPress={() => updateCalculation(4)} />
            <Button text="5" onPress={() => updateCalculation(5)} />
          </Row>
          <Row>
            <Button text="6" onPress={() => updateCalculation(6)} />
            <Button text="7" onPress={() => updateCalculation(7)} />
            <Button text="8" onPress={() => updateCalculation(8)} />
          </Row>
          <Row>
            <Button text="9" onPress={() => updateCalculation(6)} />
            <Button text="." onPress={() => updateCalculation('.')} />
            <Button text="Clear" onPress={() => updateCalculation('clear')} />
          </Row>
          <Row>
            <Button text="=" onPress={() => updateCalculation('=')} />
            <Button text="Del" onPress={() => updateCalculation('del')} />
          </Row>
  )
}

const styles = StyleSheet.create({
  calcbox: {
    // boxshadow: 0, 0, 100, #06678a,
    padding: 20,
    // margin: 20, auto,
    width: 300 /*width of box */,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  Button: {
    borderWidth: 3,
    borderRadius: 50,
    borderColor: '#64dded',
    backgroundColor: '#ffffff',
    // justifycontent: center,
    // alignitems: center,
    width: 50,
    height: 50,
    // transition: all 0.4s ease-in-out;
    // cursor: pointer;
  },
  container: {},

  containerText: {
    marginTop: 5,
    height: 50,
    marginBottom: 50,
    flex: 0.3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'beige',
    // borderWidth: 5,
  },

  output: {
    // alignSelf: 'flex-start',
    height: 50,
    borderRadius: 40,
    fontsize: 220,
    fontWeight: 'bold',
    // opacity: 46.5,
    border: 1,
    paddingLeft: 10,
    paddingTop: 10,
    backgroundColor: 'oldlace',
    textAlignVertical: 'center',
    textAlignment: 'right',
    // marginRight: 10,
    marginBottom: 10,
    // marginLeft: 10,
  },

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});