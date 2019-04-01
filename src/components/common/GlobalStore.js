import {AsyncStorage} from 'react-native';

exports.setStoreData = function(key, value) {
  try {
    AsyncStorage.setItem(key, value);
  } catch (error) {
    // Error saving data
    console.log('err=>', error)
    return;
  }
};

exports.getStoreData = async function(key) {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {

      console.log('value=>', value);
      return value;
    }
  } catch (error) {
    // Error retrieving data
    console.log('err=>', error)
  }
};