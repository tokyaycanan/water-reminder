import React, {useRef} from "react";
import { View,ImageBackground, Button, Text, StyleSheet } from "react-native";
import Firebase from '../../config/Firebase';
import AsyncStorage from '@react-native-community/async-storage';

const Logout = props => {
  const {navigation} = props;

handlelogout = async()=>{
  try{
        await Firebase.auth().signOut()
       .then(() => navigation.navigate("Login"));
       
    AsyncStorage.clear();
       

  }catch( error ){
        console.error(error);
  }
}
  return (
    <ImageBackground style={{flex: 1, opacity: 0.87,}} source={{uri: 'https://cdn.pixabay.com/photo/2018/09/03/23/56/sea-3652697_960_720.jpg'}}>

    <View style={styles.center}>

      <Text style={styles.txt}>çıkış yapmak istediğinizden emin misiniz?</Text>
      
    <View style={styles.button}>
      <Button
        title="EVET"
        onPress={()=>handlelogout()}
      />
      <Button
        title="HAYIR"
        onPress={() => navigation.navigate('SuMiktar')}
      />
      </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  
  },
  button:{
    flexDirection:'row',
    alignContent:'space-between'
  },
  txt:{
    marginBottom:"20%",
    fontSize:30,
    color:"#003399",
    fontWeight:"bold",
    textAlign: "center",

  }
});

export default Logout;
