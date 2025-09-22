import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ViewStyle, TextStyle, ImageStyle } from "react-native";

export type ProductCardProps = {
  name: string;
  price: string | number;
  image: string;
  onPress?: () => void;
  style?: ViewStyle;
  imageStyle?: ImageStyle;
  nameStyle?: TextStyle;
  priceStyle?: TextStyle;
  children?: React.ReactNode;
};

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  image,
  onPress,
  style,
  imageStyle,
  nameStyle,
  priceStyle,
  children,
}) => {
  return (
    <TouchableOpacity style={[styles.card, style]} onPress={onPress} activeOpacity={0.8}>
      <Image source={{ uri: image }} style={[styles.image, imageStyle]} />
      <Text style={[styles.name, nameStyle]} numberOfLines={1}>{name}</Text>
      <Text style={[styles.price, priceStyle]}>${price}</Text>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    margin: 8,
    width: 150,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    color: '#222',
    textAlign: 'center',
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2ecc40',
    marginBottom: 4,
  },
});

export default ProductCard;
