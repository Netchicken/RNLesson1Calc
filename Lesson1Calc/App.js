import {
  SafeAreaView, //The purpose of SafeAreaView is to render content within the safe area boundaries of a device. It is currently only applicable to iOS devices with iOS version 11 or later. https://reactnative.dev/docs/safeareaview
  ScrollView, // ScrollView is to render content within the safe area boundaries of a device. It is currently only applicable to iOS devices with iOS version 11 or later. https://reactnative.dev/docs/scrollview
  StatusBar, //Component to control the app's status bar. The status bar is the zone, typically at the top of the screen, that displays the current time, Wi-Fi and cellular network information, battery level and/or other status icons. https://reactnative.dev/docs/statusbar
  StyleSheet,
  Text,
  useColorScheme, //A hook to get the current color scheme preference of the user. This preference is set in the native OS settings. https://reactnative.dev/docs/usecolorscheme
  View, //The most fundamental component for building a UI, View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls. https://reactnative.dev/docs/view
  ImageBackground, //A React component for displaying different types of images, including network images, static resources, temporary local images, and images from local disk, such as the camera roll. https://reactnative.dev/docs/imagebackground  https://www.sitereq.com/post/two-easy-ways-to-add-react-native-background-image
  Image, //A React component for displaying different types of images, including network images, static resources, temporary local images, and images from local disk, such as the camera roll. https://reactnative.dev/docs/image
} from 'react-native';
import {React, useState} from 'react';
import {CalcButtons} from './Components/calcbuttons';
import {Row} from './Components/Row';
import {NumberButtons} from './Components/NumberButtons';
import bgImage from './Assets/waterdrops.jpg';

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
  // const image ={ require('../assets/waterdrops.jpg')};
  const updateCalculation = value => {
    // alert('updateCalculation' + ' ' + value + ' ' + calculation);
    setCalculation(calculation + String(value)); //add the value to the growing string
    console.log('updateCalculation all', calculation);
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

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <View>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />

            <Text style={styles.sectionTitle}>Simple Calculator</Text>
            <View style={styles.calcBox}>
              <Text style={styles.outputText}>
                {calculation || 'Enter a number'}
              </Text>
            </View>

            <View style={{backgroundColor: 'blue', flex: 0.3}}>
              <Text>Hello World!</Text>
            </View>

            <Row>
              <CalcButtons updateCalculation={updateCalculation} />
            </Row>
            <NumberButtons updateCalculation={updateCalculation} />
            <ImageBackground
              resizeMode="cover"
              source={bgImage}
              style={styles.image}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  container: {
    fontSize: 40,
  },

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

  calcBox: {
    height: 50,
    borderRadius: 40,
    paddingLeft: 20,
    paddingTop: 10,
    backgroundColor: 'oldlace',
    marginBottom: 10,
    borderWidth: 1,
  },
  outputText: {
    fontWeight: 'bold',
    textAlignVertical: 'center',
    textAlignment: 'right',
    fontSize: 30,
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
