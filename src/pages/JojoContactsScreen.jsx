import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {useNavigation} from '@react-navigation/native';
import JojoHeader from '../components/JojoHeader';
import JojoComponent from '../components/JojoComponent';

export default function () {
  const navigation = useNavigation();

  const handleNavigateHome = () => {
    navigation.navigate('DrawerNavigator', {screen: 'JojoHomeScreen'});
  };

  const renderTextInput = placeholder => (
    <View style={styles.textInputContainer}>
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        placeholderTextColor={COLORS.white}
        editable={false}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <JojoHeader />

      <Text style={styles.title}>Контакты</Text>

      <View style={styles.main}>
        {renderTextInput('Номер')}
        {renderTextInput('Адрес')}
        {renderTextInput('Данные')}
        {renderTextInput('Индекс')}
      </View>

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
  flex: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontFamily: FONTS.bold,
    color: COLORS.main,
    margin: 20,
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    color: COLORS.placeholder,
    width: '100%',
    paddingLeft: 30,
    marginVertical: 10,
  },
  main: {
    paddingBottom: 50,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
    width: width * 0.95,
    alignSelf: 'center',
    borderRadius: 25,
    height: height * 0.55,
  },
  textInputContainer: {
    width: '100%',
  },
  textInput: {
    height: 50,
    width: '100%',
    fontSize: 14,
    fontFamily: FONTS.medium,
    textAlign: 'left',
    color: COLORS.white,
    paddingLeft: 20,
    borderBottomWidth: 1,
    borderColor: COLORS.main,
    backgroundColor: COLORS.main,
    marginTop: 10,
    borderRadius: 8,
  },
  button: {
    position: 'absolute',
    bottom: 50,
  },
});
