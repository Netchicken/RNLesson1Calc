//import React, {useEffect} from 'react';
import SQLite from 'react-native-sqlite-2';
//import SQLiteStorage from 'react-native-sqlite-storage';
//https://www.npmjs.com/package/react-native-sqlite-2
//https://github.com/craftzdog/react-native-sqlite-2#readme
//import {StyleSheet, View, Text} from 'react-native';
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

// const openDatabase = () => {
//   const db = SQLite.openDatabase(
//     {
//       name: 'CalcDB',
//       location: 'default',
//     },
//     () => {},
//     error => {
//       console.log(error);
//     },
//   );
// };

// const createTable = () => {
//   db.transaction(tx => {
//     tx.executeSql(
//       'CREATE TABLE IF NOT EXISTS ' +
//         'Answers ' +
//         '(ID INTEGER PRIMARY KEY AUTOINCREMENT, Answer TEXT);',
//     );
//   });
// };
// //https://github.com/mahdi-sharifimehr/RN-Tutorial-Main/blob/RN-Tutorial-25/src/screens/Login.js
// export const getdata = () => {
//   try {
//     let allAnswers = [];
//     db.transaction(tx => {
//       tx.executeSql('SELECT * FROM AllAnswers', [], (_tx, results) => {
//         var len = results.rows.length;
//         if (len > 0) {
//           results.forEach(result => {
//             for (let index = 0; index < len; index++) {
//               allAnswers.push(result.rows.item(index).Answer);
//             }
//           });
//         }
//       });
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
//https://github.com/craftzdog/react-native-sqlite-2#readme 
export const getDbAnswers = calculation => {
  const db = SQLite.openDatabase(databaseName, '1.0', '', 1);
  console.log('getDbAnswers db', db);
  let allAnswers = [];
  db.transaction(function (txn) {
    txn.executeSql('DROP TABLE IF EXISTS AllAnswers', []);
    txn.executeSql(
      'CREATE TABLE IF NOT EXISTS Answers(user_id INTEGER PRIMARY KEY NOT NULL, answer VARCHAR(30))',
      [],
    );
    txn.executeSql('INSERT INTO Answers (answer) VALUES (:answer)', [
      calculation,
    ]);
    txn.executeSql('INSERT INTO Answers (answer) VALUES (:answer)', [
      '2*2=456',
    ]);
    txn.executeSql('SELECT * FROM `Answers`', [], function (tx, res) {
      for (let i = 0; i < res.rows.length; ++i) {
        console.log('item:', res.rows.item(i));
        allAnswers.push(res.rows.item(i));
      }
    });
    return allAnswers;
  });
};

//=============

//   createTable();
//   const db = SQLite.openDatabase(
//     {name: databaseName, location: 'default'},
//     () => {},
//     error => {
//       console.log(error);
//     },
//   );
//   console.log('getDbAnswers db name ', db.databaseName);

//   try {
//     let allAnswers = [];
//     db.transaction(function (txn) {
//       txn.executeSql('SELECT * FROM AllAnswers', [], function (tx, res) {
//         for (let i = 0; i < res.rows.length; ++i) {
//           console.log('item:', res.rows.item(i));
//         }
//       });
//       console.log('getDbAnswers', allAnswers);
//       return allAnswers;
//     });
//   } catch (error) {
//     console.log(error);
//     throw Error('Failed to get allAnswers !!!');
//   }
// };
// const results = txn.executeSql(`SELECT * FROM ${tableName}`);
// results.forEach(result => {
//   for (let index = 0; index < result.rows.length; index++) {
//     allAnswers.push(result.rows.item(index));
//   }
// });
// export const getDBConnection = async () => {

//   return SQLite.openDatabase({name: databaseName, createFromLocation: 1}); // '~android/app/src/main/assets/'
// };

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

// export const saveCalc = async (calc) => {
//   const insertQuery =
//     `INSERT OR REPLACE INTO ${tableName}(rowid, value) values` + calc;

//   return SQLite.executeSql(insertQuery);
// };

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

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     margin: 2,
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // flexDirection: 'column',
//   },

//   UpdateButton: {
//     width: 120,
//     height: 40,
//     borderRadius: 10,
//     backgroundColor: 'green',
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 5,
//   },
//   UpdateButtonText: {
//     color: '#fff',
//   },
//   DeleteButton: {
//     width: 120,
//     height: 40,
//     borderRadius: 10,
//     backgroundColor: 'red',
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 5,
//   },
//   DeleteButtonText: {
//     color: '#fff',
//   },

//   sectionContainer: {
//     marginTop: 10,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     justifyContent: 'center',
//     textAlign: 'center',
//   },
// });
