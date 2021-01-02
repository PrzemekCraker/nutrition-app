import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={{ marginLeft: "auto", marginRight: "auto" }}>
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.text}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
      <Text style={styles.text}>
        Adres: {result.location.address1}, {result.location.city}
      </Text>
      <Text style={styles.text}>Numer kontaktowy {result.phone}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

ResultsShowScreen.navigationOptions = {
  title: "Restaurant Detail Info",
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
    marginTop: 10,
  },
  name: {
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    textAlign: "center",
  },
});

export default ResultsShowScreen;
