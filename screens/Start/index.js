import React from "react";
import { View,ImageBackground, Button, Text, StyleSheet } from "react-native";
import Firebase from '../../config/Firebase';

const Start = props => {
  const {navigation} = props;

handlelogout =()=>{
  Firebase.auth()   
  .signOut()
  .then(() => navigation.navigate("Home"));

}
  return (
    <View style={styles.center}>

      <Text>This is the home screen</Text>
      <Button
        title="Go to About Screen"
        onPress={handlelogout}
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

export default Start;
