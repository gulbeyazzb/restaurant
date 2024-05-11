import { ScrollView, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import SearchBar from "../../components/compounds/SearchBar";
import ResultsList from "../../components/compounds/ResultsList";
import useResult from "../../hooks/useResult";

export default function SearchScreen() {
  const [searchApi, results, errorMessage] = useResult();
  const [term, setTerm] = useState("");

  const filterRestaurantsByPrice = (price) => {
    return results.filter((r) => {
      return r.price === price;
    });
  };

  return (
    <ScrollView>
      <SearchBar
        changeTermHandle={setTerm}
        submitHandle={() => searchApi(term)}
        term={term}
      />
      {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <>
          {results.length > 0 ? (
            <>
              <ResultsList
                title="En Uygun Restoranlar"
                results={filterRestaurantsByPrice("₺")}
              />
              <ResultsList
                title="Uygun Restoranlar"
                results={filterRestaurantsByPrice("₺₺")}
              />
              <ResultsList
                title="Pahalı Restoranlar"
                results={filterRestaurantsByPrice("₺₺₺")}
              />
              <ResultsList
                title="En Pahalı Restoranlar"
                results={filterRestaurantsByPrice("₺₺₺₺")}
              />
            </>
          ) : (
            <Text>Hiç bir sonuç bulunamadı.</Text>
          )}
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
