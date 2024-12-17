import React, {useContext, useEffect, useState, useCallback} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppContext} from './AppContext';
import {COLORS, FONTS} from '../helpers/colors';

export default function ({item}) {
  const {shouldRefresh, toggleRefresh} = useContext(AppContext);
  const [added, setAdded] = useState(false);

  const updateCart = useCallback(async () => {
    const cartList = await AsyncStorage.getItem('cartList');
    const cartArray = cartList ? JSON.parse(cartList) : [];
    const isProductInCart = cartArray.some(cart => cart.name === item.name);
    setAdded(isProductInCart);
  }, [item.name]);

  const handleCartUpdate = async action => {
    const cartList = await AsyncStorage.getItem('cartList');
    let cartArray = cartList ? JSON.parse(cartList) : [];

    if (action === 'add') {
      if (!cartArray.some(cart => cart.name === item.name)) {
        cartArray.push({...item, count: 1});
      }
    } else if (action === 'remove') {
      cartArray = cartArray.filter(cart => cart.name !== item.name);
    }

    await AsyncStorage.setItem('cartList', JSON.stringify(cartArray));
    toggleRefresh(prev => !prev);
  };

  const toggleCart = () => {
    added ? handleCartUpdate('remove') : handleCartUpdate('add');
  };

  useEffect(() => {
    updateCart();
  }, [updateCart, shouldRefresh]);

  return (
    <View style={styles.main}>
      <ImageBackground
        source={item?.image}
        style={{flex: 1, borderRadius: 12}}
        imageStyle={{objectFit: 'contain'}}>
        <View
          style={{
            width: '100%',
            justifyContent: 'space-between',
            height: '100%',
            paddingVertical: 20,
            paddingHorizontal: 10,
          }}>
          <Text style={styles.title}>{item?.name}</Text>

          <View style={styles.row}>
            <Text style={styles.price}>{item?.price} $</Text>

            <TouchableOpacity onPress={toggleCart}>
              <Text style={styles.button}>{added ? '-' : '+'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: '47%',
    alignSelf: 'center',
    height: 200,
    marginTop: 20,
    justifyContent: 'space-between',
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    width: '100%',
    marginBottom: 5,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    textAlign: 'center',
    verticalAlign: 'middle',
    color: COLORS.white,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  button: {
    fontFamily: FONTS.black,
    textAlign: 'center',
    fontSize: 16,
    color: COLORS.white,
    backgroundColor: COLORS.main,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 8,
  },
});
