import {StyleSheet, View} from 'react-native';
//in the row component, there is 1 prop that we need, namely: children
const Row = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

// create styles of Row
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default Row;
