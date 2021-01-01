import React, {useState, Component} from 'react';
import { StyleSheet,ImageBackground, Image,Text, View ,Button,TouchableOpacity} from 'react-native';


const SuMiktar =props => {
  const {navigation} = props;
  const [count, setCount] = useState(0);
  const[onClick,setClick]=useState(true);

  const handleIncrement = () => {
    setCount(count+ 1);
  };

  function  _kontrol(n) {
    if (count==n){
      return false;
    }
    else{
      return true;
    }
  }
  function  _kontrol2(n) {
    if (count<n){
      return true;
    }
    else{
      return false;
    }
  }


  
  return (
    
    <ImageBackground style={{ flex:1,}} source={{uri: 'https://cdn.pixabay.com/photo/2018/12/03/14/02/water-3853492_960_720.jpg'}}>

    <View style={styles.center}>

      <Text>This is the home screen</Text>
      <Button
        title="Go to About Screen"
        onClick={() => navigation.navigate("About")}

      />
 <Text>count = {count}</Text>
 <View style={styles.controlSpace}>
        <TouchableOpacity 
          onPress={handleIncrement}
          disabled={_kontrol(0)}
          style={ _kontrol2(1) ? styles.btn : styles.buttonFacebookStyle}
          >
              <Image
                source={{
                  uri:
                    'https://cdn.pixabay.com/photo/2014/04/03/10/31/glass-310759_960_720.png',
                }}
                style={styles.buttonImageIconStyle}
              />
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={handleIncrement}
          disabled={_kontrol(1)}
          style={ _kontrol2(2) ? styles.btn : styles.buttonFacebookStyle}
          >
              <Image
                source={{
                  uri:
                    'https://cdn.pixabay.com/photo/2014/04/03/10/31/glass-310759_960_720.png',
                }}
                style={styles.buttonImageIconStyle}
              />
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={handleIncrement}
          disabled={_kontrol(2)}
          style={ _kontrol2(3) ? styles.btn : styles.buttonFacebookStyle}
          >
              <Image
                source={{
                  uri:
                    'https://cdn.pixabay.com/photo/2014/04/03/10/31/glass-310759_960_720.png',
                }}
                style={styles.buttonImageIconStyle}
              />
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={handleIncrement}
          disabled={_kontrol(3)}
          style={ _kontrol2(4) ? styles.btn : styles.buttonFacebookStyle}
          >
              <Image
                source={{
                  uri:
                    'https://cdn.pixabay.com/photo/2014/04/03/10/31/glass-310759_960_720.png',
                }}
                style={styles.buttonImageIconStyle}
              />
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={handleIncrement}
          disabled={_kontrol(4)}
          style={ _kontrol2(5) ? styles.btn : styles.buttonFacebookStyle}
          >
              <Image
                source={{
                  uri:
                    'https://cdn.pixabay.com/photo/2014/04/03/10/31/glass-310759_960_720.png',
                }}
                style={styles.buttonImageIconStyle}
              />
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={handleIncrement}
          disabled={_kontrol(5)}
          style={ _kontrol2(6) ? styles.btn : styles.buttonFacebookStyle}
          >
              <Image
                source={{
                  uri:
                    'https://cdn.pixabay.com/photo/2014/04/03/10/31/glass-310759_960_720.png',
                }}
                style={styles.buttonImageIconStyle}
              />
        </TouchableOpacity>
</View>
       <Button 
        title= "reset"
        onPress={() => setCount(0)}>
      
       </Button>
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
  btnNormal: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    height: 30,
    width: 100,
  },
  btnPress: {
    borderColor: 'blue',
    borderWidth: 1,
    height: 30,
    width: 100,
  },
  buttonFacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 50,
    borderRadius: 5,
    margin: 5,
    opacity:1,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 30,
    width: 25,
    resizeMode: 'stretch',
  },
  btn:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00e6e6',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 50,
    borderRadius: 5,
    margin: 5,
    opacity:0.2,
  },
  controlSpace: {
    flexDirection: 'row',
    justifyContent:"center",
  
  },
});
export default SuMiktar;

