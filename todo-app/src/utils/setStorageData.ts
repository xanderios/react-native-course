import AsyncStorage from "@react-native-async-storage/async-storage";

const setStorageData = async (storageKey: string, value: string | object) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export default setStorageData;
