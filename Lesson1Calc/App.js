import {
  SafeAreaView, //The purpose of SafeAreaView is to render content within the safe area boundaries of a device. It is currently only applicable to iOS devices with iOS version 11 or later. https://reactnative.dev/docs/safeareaview
  ScrollView, // ScrollView is to render content within the safe area boundaries of a device. It is currently only applicable to iOS devices with iOS version 11 or later. https://reactnative.dev/docs/scrollview
  StatusBar, //Component to control the app's status bar. The status bar is the zone, typically at the top of the screen, that displays the current time, Wi-Fi and cellular network information, battery level and/or other status icons. https://reactnative.dev/docs/statusbar
  StyleSheet,
  Text, //Text is a React component for displaying text. https://reactnative.dev/docs/text
  View, //The most fundamental component for building a UI, View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls. https://reactnative.dev/docs/view
  ImageBackground, //A React component for displaying different types of images, including network images, static resources, temporary local images, and images from local disk, such as the camera roll. https://reactnative.dev/docs/imagebackground  https://www.sitereq.com/post/two-easy-ways-to-add-react-native-background-image
  FlatList, //A React component for rendering large lists of data. https://reactnative.dev/docs/flatlist
} from 'react-native';
import {React, useState} from 'react';
import {CalcButtons} from './Components/calcbuttons';
import {Row} from './Components/Row';
import {NumberButtons} from './Components/NumberButtons';
import bgImage from './Assets/waterdrops.jpg';
import {getDBConnection, getDbAnswers} from './Operations/DbOperations';
import {DbButtons} from './Components/DbButtons';

const BackGroundImage = {bgImage};
//https://towardsdev.com/how-to-build-a-calculator-app-using-react-native-a-step-by-step-tutorial-40ae327fae5f

const App = () => {
  const [calculation, setCalculation] = useState('');
  const [DbDisplay, setDbDisplay] = useState([]);

  const updateCalculation = value => {
    // alert('updateCalculation' + ' ' + value + ' ' + calculation);
    setCalculation(calculation + String(value)); //add the value to the growing string
    console.log('updateCalculation all', calculation);
    //if you press = then evaluate the calculation
    if (value === '=') {
      let calc = calculation;
      // eslint-disable-next-line no-new-func
      let answer = new Function('return ' + calc)();

      setCalculation(calc + '=' + answer);
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
  //Database functions
  const sqlOperation = value => {
    if (value === 'Display') {
      setDbDisplay(getDbAnswers);
    }
  };

  return (
    <ImageBackground
      resizeMode="cover"
      source={require('./Assets/waterdrops.jpg')}
      style={styles.image}>
      <View style={styles.container}>
        <SafeAreaView>
          <ScrollView>
            <View>
              <Text style={styles.sectionTitle}>Simple Calculator</Text>
              <View style={styles.calcBox}>
                <Text style={styles.outputText}>
                  {calculation || 'Enter a number'}
                </Text>
              </View>
              <Row>
                <CalcButtons updateCalculation={updateCalculation} />
              </Row>
              <NumberButtons updateCalculation={updateCalculation} />
              <Row>
                <DbButtons sqlOperation={sqlOperation} />
              </Row>
              <FlatList
                data={DbDisplay}
                renderItem={({item}) => (
                  <Text style={styles.item}>{item.key}</Text>
                )}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  tinyLogo: {
    width: '10%',
    height: '10%',
  },

  container: {
    fontSize: 40,
    flex: 1,
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
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  // },
  // highlight: {
  //   fontWeight: '700',
  // },
});

export default App;
