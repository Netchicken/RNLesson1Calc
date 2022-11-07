import {
  SafeAreaView, //The purpose of SafeAreaView is to render content within the safe area boundaries of a device. It is currently only applicable to iOS devices with iOS version 11 or later. https://reactnative.dev/docs/safeareaview
  ScrollView, // ScrollView is to render content within the safe area boundaries of a device. It is currently only applicable to iOS devices with iOS version 11 or later. https://reactnative.dev/docs/scrollview
  StatusBar, //Component to control the app's status bar. The status bar is the zone, typically at the top of the screen, that displays the current time, Wi-Fi and cellular network information, battery level and/or other status icons. https://reactnative.dev/docs/statusbar
  StyleSheet,
  Text,
  useColorScheme, //A hook to get the current color scheme preference of the user. This preference is set in the native OS settings. https://reactnative.dev/docs/usecolorscheme
  View, //The most fundamental component for building a UI, View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls. https://reactnative.dev/docs/view
} from 'react-native';
import {React, useState} from 'react';
import {CalcButtons} from './Components/calcbuttons';

import {ButtonKeyPad} from './Components/buttonkeypad';
import Row from './Components/Row';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Button from './Components/Button';
//https://towardsdev.com/how-to-build-a-calculator-app-using-react-native-a-step-by-step-tutorial-40ae327fae5f

// const Section = ({children, title}) => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

const App = () => {
  const [calculation, setCalculation] = useState('');

  const updateCalculation = value => {
    // alert('updateCalculation' + ' ' + value + ' ' + calculation);
    setCalculation(calculation + String(value)); //add the value to the growing string

    //if you press = then evaluate the calculation
    if (value === '=') {
      // eslint-disable-next-line no-new-func
      setCalculation(new Function('return ' + calculation));
    }
    if (value === 'clear') {
      setCalculation('');
    }
    if (value === 'del') {
      const result = calculation.slice(0, -1); //removes the last element from the string
      console.log('updateCalculation DEL', result);
      setCalculation(result);
    }
  };

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text>Simple Calculator</Text>
          <Text style={styles.output}>{calculation || 'Enter a number'}</Text>
          <Row>
            <CalcButtons updateCalculation={updateCalculation} />
          </Row>

          <Row>
            <Button text="0" onPress={() => updateCalculation(0)} />
            <Button text="1" onPress={() => updateCalculation(1)} />
            <Button text="2" onPress={() => updateCalculation(2)} />
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
          {/* <ScrollView style={'digits'}>
            <ButtonKeyPad updateCalculation={updateCalculation} />
          </ScrollView> */}
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  calcbox: {
    // boxshadow: 0, 0, 100, #06678a,
    padding: 20,
    // margin: 20, auto,
    width: 300 /*width of box */,
  },

  Button: {
    //border: 0.5, solid, #9a9393;
    // color: rgb(182, 241, 240),
    // justifycontent: center,
    // alignitems: center,
    //backgroundcolor: #428e57,
    width: 50,
    height: 50,
    // transition: all 0.4s ease-in-out;
    // cursor: pointer;
  },

  output: {
    height: 50,
    // boxshadow:  0, 0, 20, #d1ffef;
    // display: flex,
    borderRadius: 4,
    fontsize: 30,

    opacity: 46.5,

    border: 1,
    padding: 8,

    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginRight: 10,
    marginBottom: 10,
  },

  preRes: {
    opacity: 26.5,
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

export default App;
