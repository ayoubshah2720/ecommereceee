import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductsPage = ({}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);
  const navigation = useNavigation()

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      console.warn('data',data)
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleProduct = (product) => {
    navigation.navigate('SingleProduct',product)
  }
  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <TouchableOpacity onPress={() => handleProduct(item)}>
      <Image
        source={{ uri: item.image }}
        style={styles.productImage}
        resizeMode="cover"
        />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
    </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.productList}
        onpress
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  productList: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  productItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
  productImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
    borderRadius: 5,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#888888',
  },
});

export default ProductsPage;
