import React, {useContext, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import {AppContext} from '../components/AppContext';
import JojoHeader from '../components/JojoHeader';
import JojoMenuComponent from '../components/JojoMenuComponent';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {jojoProducts} from '../helpers/jojoProducts';

const categories = [{label: 'Второе'}, {label: 'Супы'}, {label: 'Десерты'}];

const JojoCategoryButton = ({label, active, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.categoryButton}>
    <Text style={active ? styles.categoryActive : styles.category}>
      {label}
    </Text>
  </TouchableOpacity>
);

export default function JojoHomeScreen() {
  const [category, setCategory] = useState(0);
  const {shouldRefresh, toggleRefresh} = useContext(AppContext);

  const handleCategoryChange = index => {
    setCategory(index);
    toggleRefresh(!shouldRefresh);
  };

  return (
    <View style={styles.container}>
      <JojoHeader />

      <View style={styles.categoryContainer}>
        {categories.map((item, index) => (
          <JojoCategoryButton
            key={index}
            label={item.label}
            active={category === index}
            onPress={() => handleCategoryChange(index)}
            image={item?.image}
          />
        ))}
      </View>

      <ScrollView style={styles.flex} contentContainerStyle={styles.main}>
        {jojoProducts[category].map((product, index) => (
          <JojoMenuComponent key={index} item={product} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    flex: 1,
    backgroundColor: COLORS.white,
  },
  categoryContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width,
    marginVertical: 15,
  },
  categoryButton: {
    width: '30%',
    marginTop: 5,
  },
  category: {
    fontFamily: FONTS.bold,
    color: COLORS.black,
    fontSize: 14,
    textAlign: 'center',
    verticalAlign: 'middle',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.green,
    backgroundColor: COLORS.green,
    height: 40,
  },
  categoryActive: {
    fontFamily: FONTS.bold,
    color: COLORS.white,
    fontSize: 14,
    textAlign: 'center',
    verticalAlign: 'middle',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.main,
    height: 40,
    backgroundColor: COLORS.main,
  },
  main: {
    paddingBottom: 100,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  image: {
    width: '100%',
    height: 80,
    objectFit: 'contain',
  },
});
