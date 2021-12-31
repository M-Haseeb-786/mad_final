import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";

import { StatusBar } from "expo-status-bar";
import file from "../Books.txt";
import { firebase } from "@react-native-firebase/firestore";
import app from "../firebaseConfig";
const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [chapter, setChapter] = useState([]);
  const [data, setData] = useState([]);

  const getTextFromData = useRef(null);
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
  }
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
}

  getTextFromData.current = async () => {
    const rawData = await fetch(file);
    let text = await rawData.text();
    let books = [];
    while (text.indexOf("@", text.indexOf("@") + 1) !== -1) {
      let book = text.slice(
        text.indexOf("@"),
        text.indexOf("@", text.indexOf("@") + 1)
      );
      books.push(book);
      text = text.replace(book, "");
    }
    books = books.filter((book) => book !== "@\r\n\r\n\r\n\r\n\r\n\r\n\r\n");
    setData(books);
    console.log(books);
  };

  useEffect(() => {
    getTextFromData.current();
  }, []);

  const handleSearch = () => {
    if (!search) return setError("Please enter and item to search");
    let temp = data.filter((item) => item.indexOf(search) !== -1);
    if (temp.length < 1) return setError("No items were found");
    setData(temp);
  };

  const handleReset = () => {
    getTextFromData.current();
  };
  const handleFirestore = (book) => {
 
      data.map((book, index) => (
        book.slice(book.indexOf("@") + 1, book.indexOf("&"));
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
      
      app
        .firestore()
        .collection(book.slice(book.indexOf("@") + 1, book.indexOf("&")))
        .add({
          title:obj[chapter][index],
          decription:obj[chapter][index],
          key:index

        })
        .then(() => {
          console.log("Book added!");
        });
    };
 
  

  return (
    <>
      <View style={styles.container}>
        <TextInput
          value={search}
          placeholder="Search for a book"
          onChangeText={(text) => {
            setSearch(text);
            setError("");
          }}
          style={styles.textInput}
        />
        <View style={styles.btns}>
          <Button title="Search" style={styles.btn} onPress={handleSearch} />
          <View style={styles.space}></View>
          <Button title="Reset" style={styles.btn} onPress={handleReset} />
        </View>
        {error && <Text style={styles.err}>{error}</Text>}
        {data.map((book, index) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("BookDetail", { book })}
            key={index}
          >
            <Text>{book.slice(book.indexOf("@") + 1, book.indexOf("&"))}</Text>
            <Button title="Add Book" onPress={handleFirestore(book)} />
          </TouchableOpacity>
        ))}
        <StatusBar style="auto" />
        <Button
          style={styles.btns}
          title="Design"
          onPress={() => navigation.navigate("Design")}
        />
      </View>
      
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    marginBottom: 5,
  },
  err: {
    color: "red",
    fontWeight: "bold",
    marginTop: 5,
  },
  btns: {
    flex: 0.3,
    alignItems: "center",
    flexDirection: "row",
  },
  space: {
    width: 50,
    height: 50,
  },
});
