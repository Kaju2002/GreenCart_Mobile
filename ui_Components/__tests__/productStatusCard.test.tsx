// __tests__/ProductStatusCard.test.tsx
import { Colors } from '@/constants/Colors';
import ProductStatusCard from '@/ui_Components/ProductStatusCard';
import { render } from '@testing-library/react-native';
import React from 'react';

describe('ProductStatusCard', () => {
  it('renders product name, category, and price correctly', () => {
    const { getByText } = render(
      <ProductStatusCard
        name="Organic Tomatoes"
        category="Vegetables"
        price={4.99}
        status="approved"
      />
    );

    expect(getByText('Organic Tomatoes')).toBeTruthy();
    expect(getByText('Vegetables')).toBeTruthy();
    expect(getByText('$4.99')).toBeTruthy();
  });

  it('shows "Approved" status with correct color', () => {
    const { getByText } = render(
      <ProductStatusCard
        name="Apples"
        category="Fruits"
        price={2.5}
        status="approved"
      />
    );

    const statusText = getByText('approved');
    expect(statusText.props.style.find((s: any) => s.color === Colors.success)).toBeTruthy();
  });

  it('shows "Pending" status with correct color', () => {
    const { getByText } = render(
      <ProductStatusCard
        name="Eggs"
        category="Dairy"
        price={6.99}
        status="pending"
      />
    );

    const statusText = getByText('pending');
    expect(statusText.props.style.find((s: any) => s.color === Colors.warning)).toBeTruthy();
  });

  it('shows "Rejected" status with correct color', () => {
    const { getByText } = render(
      <ProductStatusCard
        name="Honey"
        category="Beverages"
        price={12.99}
        status="rejected"
      />
    );

    const statusText = getByText('rejected');
    expect(statusText.props.style.find((s: any) => s.color === Colors.error)).toBeTruthy();
  });
});
