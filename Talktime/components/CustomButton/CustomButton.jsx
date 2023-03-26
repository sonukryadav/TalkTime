import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./Style";

export default function CustomButton({ bg, textColor, title, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: bg || "#44cefc" }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor || "black" }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
