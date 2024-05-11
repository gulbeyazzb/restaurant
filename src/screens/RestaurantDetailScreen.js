import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Linking,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import yelp from "@/api/yelp";

export default function RestaurantDetailScreen({ route }) {
  const [result, setResult] = useState(null);
  const id = route.params.id;

  const getDetail = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getDetail(id);
  }, []);

  if (!result) {
    return null;
  }

  const handleRedirect = () => {
    // Telefon numarasına yönlendirme yapmak için 'tel:' protokolü kullanılır.
    const phoneNumber = result.phone; // Yönlendirilecek telefon numarası

    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <View>
      <Image style={styles.imgStyle} source={{ uri: result?.image_url }} />
      <Text style={styles.name}>{result?.name}</Text>
      <TouchableOpacity onPress={handleRedirect}>
        <Text style={styles.phone}>{result.phone}</Text>
      </TouchableOpacity>
      <Text style={styles.isClosedStyle}>
        {result.is_closed === false ? "Açık" : "Kapalı"}
      </Text>
      <FlatList
        data={result.photos}
        renderItem={({ item }) => {
          return <Image style={styles.imgStyle} source={{ uri: item }} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imgStyle: {
    height: 200,
    margin: 10,
    borderRadius: 30,
  },
  name: {
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 10,
  },
  phone: {
    alignSelf: "center",
    marginBottom: 10,
    fontSize: 17,
    fontWeight: "bold",
    color: "blue",
  },
  isClosedStyle: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 17,
  },
});
