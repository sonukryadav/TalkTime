import AsyncStorage from "@react-native-async-storage/async-storage";

const readData = async (key) => {
  return await AsyncStorage.getItem(key);
};

export default readData;
