import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Button, Avatar, Icon } from '@rneui/themed';

export default function CameraC(props) {
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

    if (!permission) {
    // Camera permissions are still loading
    return (
      <View style={styles.container0}>
        <Text style={styles.t1}>Camera permissions are still loading...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container0}>
        <Text style={styles.t1}>
          We need your permission to show the camera
        </Text>
        <TouchableOpacity onPress={requestPermission}>
          <Text style={styles.t2}>Grant permission</Text>
        </TouchableOpacity>
      </View>
    );
  }



  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  async function handleSubmit(){
    if(cameraRef){
      let photo = await cameraRef.takePictureAsync();
      props.navigation.navigate("Home",{uri: photo.uri})
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container1}>
      <Camera
        style={styles.camera}
        type={type}
        ref={(ref) => {
          setCameraRef(ref);
        }}
      >
        <View style={styles.buttonContainer}>
          <Icon
            reverse
            name="refresh"
            type="font-awesome"
            color="#0099ff"
            onPress={toggleCameraType}
          />
          <Icon
            reverse
            name="dot-circle-o"
            type="font-awesome"
            color="#0099ff"
            onPress={handleSubmit}
          />
        </View>
      </Camera>
      <TouchableOpacity onPress={handleSubmit}>
        <Text style={styles.t2}>Click photo</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container0: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center",
  },
  t1: {
    fontSize: 20,
    fontWeight: 800,
    textAlign: "center",
    color: "black",
    marginVertical: 25,
    textDecorationColor: "red",
    textShadowColor: "black",
    textShadowRadius: 20,
  },
  t2: {
    fontSize: 22,
    fontWeight: 800,
    textAlign: "center",
    backgroundColor: "teal",
    color: "white",
    paddingHorizontal: 30,
    paddingVertical: 10,
    textDecorationColor: "red",
    textShadowColor: "black",
    textShadowRadius: 10,
    borderRadius:5,
  },
  camera: {
    flex: 0.6,
    width: "60%",
    marginVertical:10
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    justifyContent: "center",
    margin: 10,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});