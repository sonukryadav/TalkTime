import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key, value) => {
  await AsyncStorage.setItem(key, value);
};

export default storeData;
