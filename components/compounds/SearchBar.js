import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function SearchBar({ changeTermHandle, submitHandle, term }) {
  return (
    <View style={styles.containerStyle}>
      <AntDesign
        style={styles.iconStyle}
        name="search1"
        size={30}
        color="black"
      />
      <TextInput
        style={[styles.inputStyle]}
        placeholder="Ara"
        autoCapitalize={false} //büyük harfle başlama zorunluluğunu kapatır.
        autoCorrected={false} //önerileri kapatır.
        placeholderTextColor="gray"
        value={term}
        onChangeText={changeTermHandle}
        onEndEditing={submitHandle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: "lightgray",
    margin: 10,
    borderRadius: 20,
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
  },
  iconStyle: {
    marginHorizontal: 10,
  },
  inputStyle: {
    fontSize: 18,
    flex: 1,
  },
});
