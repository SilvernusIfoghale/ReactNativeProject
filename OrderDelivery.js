import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function OrderDelivery({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.skipTextContainer}>
        <Text style={styles.skipText}>skip</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image source={require('./assets/three.jpg')} style={styles.img} />
      </View>
      <View style={styles.clothTextContainer}>
        <Text style={styles.clothText}>Order delivery</Text>
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
        <View style={styles.nav}></View>
        <View style={styles.nav}></View>
        <View style={[styles.nav, styles.active]}></View>
      </View>
      <View>
        <View style={styles.rightArrowContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              source={require('./assets/right-arrow.png')}
              style={styles.rightArrow}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  skipTextContainer: {
    paddingVertical: 5,
  },
  skipText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imgContainer: {
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

  rightArrowContainer: {
    alignItems: 'flex-end',
    padding: 20,
    marginTop: 40,
  },
  rightArrow: {
    padding: 25,
    height: 25,
    width: 25,
    borderRadius: 30,
    backgroundColor: 'orange',
  },
  active: {
    backgroundColor: 'orange',
  },
});
