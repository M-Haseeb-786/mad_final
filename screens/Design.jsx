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
} from "react-native";
import { TouchableOpacity } from "react-native-web";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "red", flexDirection: "row" }}>
        <View
          style={{
            flex: 0.334,
            backgroundColor: "yellow",
            flexDirection: "column",
          }}
        >
          {" "}
          <Text>IMG 1</Text>
        </View>

        <View
          style={{
            flex: 0.334,
            backgroundColor: "yellow",
            flexDirection: "column",
          }}
        >
          {" "}
          <Text>IMG 2</Text>
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: "red", flexDirection: "row" }}>
        <View
          style={{
            flex: 0.334,
            backgroundColor: "yellow",
            flexDirection: "column",
          }}
        >
          {" "}
          <Text>IMG 1</Text>
        </View>

        <View
          style={{
            flex: 0.334,
            backgroundColor: "yellow",
            flexDirection: "column",
          }}
        >
          {" "}
          <Text>IMG 2</Text>
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
