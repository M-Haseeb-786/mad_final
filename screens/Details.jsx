import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  TextInput,
  Button,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const Details = ({ navigation, route }) => {
  const [data, setData] = useState([]);
  const [oldData, setOldData] = useState([]);
  const [search, setSearch] = useState("");
  const [chaps, setChaps] = useState([]);
  const [error, setError] = useState("");
  const QueryReturnReact = () => {
    //Search
    firestore()
      .collection("React Native for Beginners")
      // Filter results
      .where("description", "in", ["react", "native"])
      .get()
      .then((querySnapshot) => {
        console.log("Search data using");

        querySnapshot.forEach((documentSnapshot) => {
          console.log(
            "Chapter titles where this search is in :",
            documentSnapshot.data().key,
            documentSnapshot.data().title,
            documentSnapshot.data().description
          );
        });
      });
  };
  const QueryReturnFlutter = () => {
    //Search
    firestore()
      .collection("Flutter for Beginners")
      // Filter results
      .where("description", "in", ["react", "native"])
      .get()
      .then((querySnapshot) => {
        console.log("Search data using");

        querySnapshot.forEach((documentSnapshot) => {
          console.log(
            "Chapter titles where this search is in :",
            documentSnapshot.data().key,
            documentSnapshot.data().title,
            documentSnapshot.data().description
          );
        });
      });
  };

  useEffect(() => {
    let { book } = route.params;
    let chapters = book.split("&");
    chapters = chapters.filter((p) => p !== "\r\n\r\n");
    chapters = chapters.map((p) => p.split("$"));
    let obj = [];
    chapters.map(
      (chapter, index) =>
        index !== 0 && obj.push({ title: chapter[0], data: [chapter[1]] })
    );
    setChaps(obj);
    setData(chapters);
  }, []);

  const handleSearch = () => {
    if (!search) return setError("Please enter and item to search");
    let temp = chaps.filter(
      (ch) =>
        ch.title.indexOf(search) !== -1 ||
        ch.data.join("").indexOf(search) !== -1
    );
    if (temp.length < 1) return setError("No items were found");
    setOldData(chaps);
    setChaps(temp);
  };

  const handleReset = () => {
    if (oldData && oldData.length) setChaps(oldData);
  };

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <View>
      <TextInput
        value={search}
        placeholder="Search for a book"
        onChangeText={(text) => {
          setSearch(text);
          setError("");
        }}
        style={styles.textInput}
      />
      <Button title="Search" style={styles.btn} onPress={handleSearch} />
      <Button title="Reset" style={styles.btn} onPress={handleReset} />
      <Text>{error && <Text style={styles.err}>{error}</Text>}</Text>
      <SectionList
        sections={chaps}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
  textInput: {
    height: 50,
    padding: 10,
  },
  err: {
    color: "red",
    fontWeight: "bold",
    marginTop: 5,
  },
});
