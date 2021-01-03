import React, { useState } from 'react'
import { Text, View,ImageBackground,TouchableOpacity,TextInput,StyleSheet} from 'react-native'
import Firebase from '../../config/Firebase';


//disable yellow warnings on EXPO client!
console.disableYellowBox = true;

const ForgotPassword =props=> {

    const {navigation} = props;
    const [email, setemail] = useState('');

    
      forgotPassword = () => {
        Firebase.auth().sendPasswordResetEmail(email)
          .then(function (user) {
            alert('Lütfen e-mail adresinizi kontrol edin')
          })
          .then(() => navigation.navigate('Login'))
          .catch(function (e) {
            console.log(e)
          })
      }


    return (
      <ImageBackground style={{flex: 1, opacity: 0.9,}} source={{uri: 'https://cdn.pixabay.com/photo/2013/07/25/11/56/padlock-166882_960_720.jpg'}}>
      <View style={styles.container}>
        <Text style={styles.txt}>Lütfen e-mail adresinizi girin</Text>
        <View style={styles.inputView}>
        <TextInput  
      style={styles.inputText}
      placeholder="Email..." 
      placeholderTextColor="#003f5c"
      onChangeText={email => setemail(email)}
      defaultValue={email}/>
      </View>
        <TouchableOpacity style={styles.resetbtn}
      onPress={forgotPassword}>
    <Text style={styles.resetbtntxt}>Reset</Text>
  </TouchableOpacity>
      </View>
      </ImageBackground>
    )
}
const styles = StyleSheet.create({
  container:{ 
    justifyContent:'center',
    alignItems:'center' ,
    },
    txt:{
      fontSize:30,
      fontWeight:"bold",
      marginTop:"45%"
    },
    inputView:{
      width:"80%",
      backgroundColor:"#e3dcce",
      borderRadius:25,
      height: "8%",
      marginBottom:"5%",
      justifyContent:"center",
      padding:"7%",
      alignSelf: 'center',
      marginTop:"20%",
    },
    inputText:{
      height:50,
      color:"black",
      marginTop:"10%",
      alignSelf: 'center',
    },

    resetbtn:{
      width:"60%",
      backgroundColor:"#fb5b5a",
      borderRadius:25,
      height:"8%",
      alignSelf: 'center',
  
      marginTop:"10%",
      marginBottom:"10%"
    },
    resetbtntxt:{
      alignSelf:"center",
      marginTop:"2%", 
      fontWeight:"bold",
      fontSize:20,
    }
  
  
  });

export default ForgotPassword