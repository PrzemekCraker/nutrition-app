import React, { useState } from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../context/useResults";
import ResultsList from "../components/ResultsList";
import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer";
import LocBar from "../components/LocBar";

const YelpScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();
  console.log(results);
  const filterResultsByPrice = (price) => {
    return results.filter((results) => {
      return results.price === price;
    });
  };

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text
        style={{
          fontSize: 30,
          marginLeft: "auto",
          marginRight: "auto",
          alignContent: "center",
        }}
      >
        Search something to eat!
      </Text>
      <Spacer />
      <LocBar />
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView style={styles.scrollView}>
        <Text style={styles.result}>
          We have found {results.length} results
        </Text>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Const Effective"
        />
        <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

YelpScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  result: {
    textAlign: "center",
  },
  scrollView: {
    marginBottom: 200,
  },
});

export default YelpScreen;
