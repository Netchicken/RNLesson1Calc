import {
  SafeAreaView, //The purpose of SafeAreaView is to render content within the safe area boundaries of a device. It is currently only applicable to iOS devices with iOS version 11 or later. https://reactnative.dev/docs/safeareaview
  ScrollView,
  StatusBar, //Component to control the app's status bar. The status bar is the zone, typically at the top of the screen, that displays the current time, Wi-Fi and cellular network information, battery level and/or other status icons. https://reactnative.dev/docs/statusbar
  Button, //A basic button component that should render nicely on any platform. Supports a minimal level of customization.  https://reactnative.dev/docs/button
  StyleSheet,
  Text,
  useColorScheme,
  View, //The most fundamental component for building a UI, View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls. https://reactnative.dev/docs/view
} from 'react-native';
import {React, useState} from 'react';
//import './App.css';
// import {React, useState} from 'react';
import {CalcButtons} from './Components/calcbuttons';
//import Inputs from './Components/inputs';
import {ButtonKeyPad} from './Components/buttonkeypad';

import {Colors} from 'react-native/Libraries/NewAppScreen';

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
    console.log('updateCalculation', value + ' ' + calculation);
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

        <Text className="output">{calculation || 'Enter a number'}</Text>

        <CalcButtons updateCalculation={updateCalculation} />
        <View className="digits">
          <ButtonKeyPad updateCalculation={updateCalculation} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
