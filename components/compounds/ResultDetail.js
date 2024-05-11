import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ResultDetail({ result }) {
  return (
    <View>
      <Image
        style={styles.imgStyle}
        source={result.image_url ? { uri: result.image_url } : null}
      />
      <Text style={styles.name}>{result?.name}</Text>
      <Text>{result?.rating} yıldızlı restoran</Text>
      <Text>{result?.review_count} kişi bu restoranı değerlendirdi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imgStyle: {
    width: 250,
    height: 120,
    borderRadius: 10,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
});
