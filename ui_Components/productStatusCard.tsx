// ui_Components/ProductStatusCard.tsx
import { Colors } from '@/constants/Colors';
import { CheckCircle, Clock, XCircle } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ProductStatusCardProps {
  name: string;
  category: string;
  price: number;
  status: 'approved' | 'pending' | 'rejected';
}

const ProductStatusCard: React.FC<ProductStatusCardProps> = ({ name, category, price, status }) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'approved':
        return <CheckCircle size={18} color={Colors.success} />;
      case 'pending':
        return <Clock size={18} color={Colors.warning} />;
      case 'rejected':
        return <XCircle size={18} color={Colors.error} />;
      default:
        return null;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'approved':
        return Colors.success;
      case 'pending':
        return Colors.warning;
      case 'rejected':
        return Colors.error;
      default:
        return Colors.textLight;
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.category}>{category}</Text>
        </View>
        <View style={styles.status}>
          {getStatusIcon()}
          <Text style={[styles.statusText, { color: getStatusColor() }]}>{status}</Text>
        </View>
      </View>
      <Text style={styles.price}>${price.toFixed(2)}</Text>
    </View>
  );
};

export default ProductStatusCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  info: {
    flex: 1,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
  },
  category: {
    fontSize: 14,
    color: Colors.primary,
    marginTop: 2,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  price: {
    marginTop: 8,
    fontSize: 15,
    fontWeight: '700',
    color: Colors.primary,
  },
});
