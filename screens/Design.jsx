import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
  navigation,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-web";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "red", flexDirection: "row" }}>
        <View
          style={{
            flex: 0.5,
            backgroundColor: "yellow",
            flexDirection: "column",
          }}
        >
          {" "}
          <Image
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
        </View>

        <View
          style={{
            flex: 0.5,
            backgroundColor: "red",
            flexDirection: "column",
          }}
        >
          {" "}
          <Image
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: "red", flexDirection: "row" }}>
        <View
          style={{
            flex: 0.5,
            backgroundColor: "yellow",
            flexDirection: "column",
          }}
        >
          {" "}
          <Image
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
        </View>

        <View
          style={{
            flex: 0.5,
            backgroundColor: "red",
            flexDirection: "column",
          }}
        >
          {" "}
          <Image
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
