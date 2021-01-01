import React, {useEffect,useState} from 'react';
import { View, ImageBackground,Button, Text, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import Firebase from '../../config/Firebase';


const Home = props => {
  const {navigation} = props;

  const [email, setemail] = useState('x@x.com');
  const [password, setpassword] = useState('......');


  useEffect(() => {

    AsyncStorage.getItem('any_key_here').then(
      (value) =>
        //AsyncStorage returns a promise so adding a callback to get the value
      setemail(value)
      //Setting the value in Text
    );

    AsyncStorage.getItem('any_key_here2').then(
      (value) =>
        //AsyncStorage returns a promise so adding a callback to get the value
       setpassword(value)
      //Setting the value in Text
    );

    if(email!=null && password!=null && email!="x@x.com" && password!="......"){
      Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigation.navigate('deneme',{
        screen: 'SuMiktar',
        params: {
          screen: 'SuMiktar',
          params: {
            caption:email,
          },
        },
      }
       ))
      .catch(error => alert(error))
    }
  });

  return (
    <View style={styles.center}>
    <ImageBackground style={{flex: 1, opacity: 0.87,}} source={{uri: 'https://cdn.pixabay.com/photo/2017/02/09/15/10/sea-2052650_960_720.jpg'}}>
      <Text style={styles.logo}>HOŞGELDİN...</Text>
      <View style={styles.buttonContainer}>
      <View style={styles.devam}>
    <Text 
         onPress={() => navigation.navigate('Login')}
        style={styles.textButton}>Devam etmek için tıklayınız</Text>
    </View>
    </View>
      </ImageBackground>

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
  logo:{
    marginTop: "5%",
    fontWeight:"bold",
    fontSize:80,
    color:"#fb5b5a",
    marginBottom:"30%",
    textAlign: "center",
  },
  buttonContainer:{
    justifyContent:'space-between',
    width:'80%',
    height:'20%',
    alignSelf: 'center',
  },
  devam:{
   
    backgroundColor: 'rgba(0,0,0,0.65)',
    
    borderWidth: 2,
    borderRadius: 50,
    justifyContent:"space-around",
    fontSize: 50,
    opacity:0.8
  },
  textButton:{
    fontSize:30,
    textAlign: "center",
    color:"#f7f7f7",
   
  },
});

export default Home;



