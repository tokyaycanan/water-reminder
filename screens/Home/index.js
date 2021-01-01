import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const Home = props => {
  const {navigation} = props;
  return (
    <View style={styles.center}>
      <Text>This is the home screen</Text>
      <Button
        title="Go to Kayıt Screen"
        onPress={() => navigation.navigate("Kayit")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Home;



