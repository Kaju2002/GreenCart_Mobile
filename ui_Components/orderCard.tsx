// ui_Components/OrderCard.tsx
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Colors } from "@/constants/colors";
import { Package } from "lucide-react-native";

interface OrderCardProps {
  id: string;
  date: string;
  status: "confirmed" | "processing" | "shipped" | "delivered" | "cancelled";
  totalAmount: number;
  items: {
    image: string;
    quantity: number;
  }[];
}

const OrderCard: React.FC<OrderCardProps> = ({ id, date, status, totalAmount, items }) => {
  const getStatusColor = () => {
    switch (status) {
      case "confirmed":
      case "delivered":
        return Colors.success;
      case "processing":
        return Colors.primary;
      case "shipped":
        return Colors.warning;
      case "cancelled":
        return Colors.error;
      default:
        return Colors.textLight;
    }
  };

  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.orderId}>Order #{id}</Text>
          <Text style={styles.orderDate}>{date}</Text>
        </View>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor() }]}>
          <Text style={styles.statusText}>{status.toUpperCase()}</Text>
        </View>
      </View>

      {/* Items Preview */}
      <View style={styles.itemsPreview}>
        {items.length > 0 ? (
          items.slice(0, 3).map((item, index) => (
            <View key={index} style={styles.itemPreview}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              {item.quantity > 1 && (
                <View style={styles.quantityBadge}>
                  <Text style={styles.quantityText}>{item.quantity}</Text>
                </View>
              )}
            </View>
          ))
        ) : (
          <Package size={40} color={Colors.textLight} />
        )}
        {items.length > 3 && (
          <View style={styles.moreItemsBadge}>
            <Text style={styles.moreItemsText}>+{items.length - 3}</Text>
          </View>
        )}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.itemsCount}>
          {items.reduce((s
