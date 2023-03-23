import React from 'react';
import { View, Text, Dimensions, StyleSheet} from "react-native";
import Animated, { interpolate, useSharedValue, useAnimatedStyle, withSpring} from 'react-native-reanimated';
import { Gesture, GestureDetector } from "react-native-gesture-handler";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const PtoAnim = () => {

    const start = useSharedValue({ x: 0, y: 0 });
    const gesture = Gesture.Pan()
        .onBegin(() => {
            // isPressed.value = true;
        })
        .onUpdate((e) => {
            // offset.value = {
            //     x: e.translationX + start.value.x,
            //     y: e.translationY + start.value.y,
            // };
        })
        .onEnd(() => {
            // start.value = {
            //     x: offset.value.x,
            //     y: offset.value.y,
            // };
        })
        .onFinalize(() => {
            // isPressed.value = false;
        });

    return (
        <GestureDetector gesture={gesture}>
            <Animated.View style={styles.v1}>
                <View >
                    <Text style={ styles.t1}>I am bottom to top slider</Text>
                </View>
            </Animated.View>
        </GestureDetector>
    )
}


const styles = StyleSheet.create({
    v1: {
        // position:"absolute",
        height:windowHeight,
        backgroundColor: "teal",
        top: windowHeight - 700,
        zIndex:2,
        // bottom: -250,
    },
    t1: {
        textAlign:"center",
    }
});


export default PtoAnim;
