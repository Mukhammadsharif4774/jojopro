import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {useNavigation} from '@react-navigation/native';
import JojoHeader from '../components/JojoHeader';
import JojoComponent from '../components/JojoComponent';
import Icon from '../assets/reserve_success.png';

export default function () {
  const navigation = useNavigation();

  const handleNavigateHome = () => {
    navigation.navigate('DrawerNavigator', {screen: 'JojoHomeScreen'});
  };

  return (
    <View style={styles.container}>
      <JojoHeader />

      <Image source={Icon} style={styles.image} />

      <Text style={styles.description}>
        Столик забронирован! {'\n'} Спасибо
      </Text>

      <JojoComponent
        text="На главную"
        style={styles.button}
        onPress={handleNavigateHome}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: COLORS.white,
  },
  button: {
    position: 'absolute',
    bottom: 50,
  },
  description: {
    paddingVertical: 15,
    textAlign: 'center',
    color: COLORS.black,
    fontFamily: FONTS.black,
    fontSize: 20,
    paddingHorizontal: 50,
    alignSelf: 'center',
    marginTop: '15%',
  },
  image: {
    width: width * 0.35,
    height: width * 0.35,
    alignSelf: 'center',
    objectFit: 'contain',
    marginTop: '25%',
  },
});
