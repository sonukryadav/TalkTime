import AsyncStorage from "@react-native-async-storage/async-storage";

const removeData = async (key) => {
  await AsyncStorage.removeItem(key);
};

export default removeData;
