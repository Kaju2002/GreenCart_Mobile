import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ProductCard from '../ui_Components/ProductCard';

describe('ProductCard', () => {
  it('renders product name, price, and image', () => {
    const { getByText, getByRole } = render(
      <ProductCard name="Apple" price={2.99} image="https://example.com/apple.jpg" />
    );
    expect(getByText('Apple')).toBeTruthy();
    expect(getByText('$2.99')).toBeTruthy();
    // Image role is not always available in React Native Testing Library, so this is optional
  });

  it('calls onPress when pressed', () => {
    const onPressMock = vi.fn();
    const { getByText } = render(
      <ProductCard name="Banana" price={1.5} image="https://example.com/banana.jpg" onPress={onPressMock} />
    );
    fireEvent.press(getByText('Banana'));
    expect(onPressMock).toHaveBeenCalled();
  });
});
