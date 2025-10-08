import React from 'react';
import { View, Text ,StyleSheet, Image } from 'react-native';

import logo from '../assets/img/logo light.jpg'
const Home = () => {
  return (
    <View style={styles.container}>
        <image source={logo} style={styles.img}/>

      <Text style={styles.title}>The Number 1</Text>

      <Text style={{marginTop:10, marginBottom: 30}}>
        Reading List App
      </Text>

    

        

    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    img:{
        marginVertical: 20,

    },
    
})