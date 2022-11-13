import React, {useState, useEffect} from 'react';
import SQLite from 'react-native-sqlite-storage';
SQLite.DEBUG(false);
SQLite.enablePromise(true);
import {StyleSheet, View, Text} from 'react-native';
//https://aboutreact.com/example-of-sqlite-database-in-react-native/

//https://github.com/Shahid313/react-native-sqlite-storage/blob/main/screens/HomeScreen.js

//https://github.com/mahdi-sharifimehr/RN-Tutorial-Main/blob/RN-Tutorial-18/src/ScreenB.js

//https://www.youtube.com/watch?v=ANdSdIlgsEw  database creation
//github.com/mahdi-sharifimehr/RN-Tutorial-Main/tree/RN-Tutorial-25 database creation

//https://dev-yakuza.posstree.com/en/react-native/react-native-sqlite-storage/
//execute the command below to bind react-native-sqlite-storage to RN(React Native) project.

//react-native link react-native-sqlite-storage
//https://github.com/react-native-community/cli/blob/master/docs/autolinking.md

const databaseName = 'calcDB.db';
const tableName = 'AllAnswers';
const fieldName = 'answer';

export const getDBConnection = async () => {
  return SQLite.openDatabase({name: databaseName, location: 'default'}); // '~android/app/src/main/assets/'
};

// const selectDB = () => {
//   SQLite.transaction(tx => {
//     tx.executeSql('SELECT answer FROM AllAnswers', [], (tx, results) => {
//       var len = results.rows.length;
//       console.log('Operations selectDataHandler len', len);

//       setCities([]); //empty state
//       for (let i = 0; i < len; i++) {
//         console.log(
//           'Operations selectDataHandler results',
//           results.rows.item(i).City,
//         );
//         //get the city
//         var city = results.rows.item(i).City;
//         //spread the hook, add in the new city
//         setCities(cities => {
//           return [...cities, city];
//         });
//       }
//     });
//   });
// };

export const getDbAnswers = async () => {
  try {
    const allAnswers = [];
    const results = await SQLite.executeSql(`SELECT answer FROM ${tableName}`);
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        allAnswers.push(result.rows.item(index));
      }
    });
    return allAnswers;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get allAnswers !!!');
  }
};

export const saveTodoItems = async () => {
  const insertQuery =
    `INSERT OR REPLACE INTO ${tableName}(rowid, value) values` +
    todoItems.map(i => `(${i.id}, '${i.value}')`).join(',');

  return db.executeSql(insertQuery);
};

//  export const updateDB = () => {
//     db.transaction(tx => {
//       tx.executeSql(
//         'UPDATE Users SET City = ?',
//         [updateCity],
//         () => {
//           Alert.alert('Success!', 'The update was succesful');
//         },
//         error => {
//           console.log(error);
//         },
//       );
//     });
//   };

//   const removeDB = () => {
//     const db = SQLite.openDatabase(
//       {
//         name: 'Store.db',
//         createFromLocation: 1, // '~android/app/src/main/assets/',
//       },
//       () => {
//         console.log('removeDataHandler DB open exists', 'success');
//       },
//       error => {
//         console.log('removeDataHandler DB open error', error);
//       },
//     );

//     console.log('Operations removeData', 'trigger');
//     db.transaction(tx => {
//       tx.executeSql(
//         'DELETE FROM Users',
//         [],
//         () => {
//           setCities([]); //empty state
//           showToastWithGravity('Success! All Cities have been deleted');
//           console.log('Success!', 'All Cities have been deleted');
//         },
//         error => {
//           console.log(error);
//         },
//       );
//     });
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Section
//         style={styles.sectionTitle}
//         title="View and Delete cities in the Database"></Section>

//       <TouchableOpacity
//         onPress={() => selectDataHandler()}
//         style={styles.UpdateButton}>
//         <Text style={styles.UpdateButtonText}>Show Cities</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={() => removeDataHandler()}
//         style={styles.DeleteButton}>
//         <Text style={styles.DeleteButtonText}>Delete All Cities</Text>
//       </TouchableOpacity>

//       <ScrollView>
//         {cities.map((item, index) => {
//           return (
//             <View>
//               <Text key={index} style={styles.text}>
//                 {item}
//               </Text>
//             </View>
//           );
//         })}
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 2,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'column',
  },

  UpdateButton: {
    width: 120,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  UpdateButtonText: {
    color: '#fff',
  },
  DeleteButton: {
    width: 120,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  DeleteButtonText: {
    color: '#fff',
  },

  sectionContainer: {
    marginTop: 10,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
