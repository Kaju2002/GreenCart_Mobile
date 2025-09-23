import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ProductCard, { ProductCardProps } from "./ProductCard";
import Button from "./button";

export type CheckoutPageProps = {
  items: ProductCardProps[];
  total: number;
  onCheckout: () => void;
  isLoading?: boolean;
};

const CheckoutPage: React.FC<CheckoutPageProps> = ({
  items,
  total,
  onCheckout,
  isLoading,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <FlatList
        data={items}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item }) => (
          <ProductCard {...item} style={styles.productCard} />
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.summary}>
        <Text style={styles.totalLabel}>Total:</Text>
        <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
      </View>
      <Button
        title={isLoading ? "Processing..." : "Checkout"}
        onPress={onCheckout}
        variant="checkout"
        disabled={isLoading}
        style={styles.checkoutButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 16,
    borderRadius: 16,
    margin: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#222",
    textAlign: "center",
  },
  list: {
    paddingBottom: 12,
  },
  productCard: {
    width: "100%",
    marginVertical: 4,
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 16,
    paddingHorizontal: 8,
  },
  totalLabel: {
    fontSize: 18,
    color: "#555",
  },
  totalValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2ecc40",
  },
  checkoutButton: {
    marginTop: 8,
  },
});

export default CheckoutPage;
