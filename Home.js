import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={require('./assets/one.jpg')} style={styles.img} />
      </View>
      <View style={styles.clothTextContainer}>
        <Text style={styles.clothText}>Clothe's</Text>
      </View>
      <View>
        <Text style={styles.mainText}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem at
          harum, sequi perspiciatis ipsum tempore unde beatae, similique
          eligendi nesciunt accusamus deserunt adipisci ipsa ipsam quisquam
          eaque suscipit illum repellendus?
        </Text>
      </View>
      <View style={styles.allNav}>
        <View style={[styles.nav, styles.active]}></View>
        <View style={styles.nav}></View>
        <View style={styles.nav}></View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('OnlinePayment')}
          style={styles.btn}
        >
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  imgContainer: {
    paddingTop: 20,
    alignItems: 'center',
  },
  img: {
    width: 350,
    height: 300,
  },
  clothText: {
    paddingVertical: 25,
    fontWeight: 'bold',
    fontSize: 40,
    color: 'orange',
    textAlign: 'center',
  },
  mainText: {
    textAlign: 'center',
    fontSize: 15,
    paddingHorizontal: 5,
  },
  allNav: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 10,
  },
  nav: {
    height: 15,
    width: 15,
    borderRadius: 20,
    backgroundColor: 'silver',
  },

  btn: {
    marginHorizontal: 20,
    marginTop: 85,
  },
  btnText: {
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 25,
    padding: 13,
    backgroundColor: 'orange',
  },
  active: {
    backgroundColor: 'orange',
  },
});
