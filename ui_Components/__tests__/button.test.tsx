import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../button';

describe('Button', () => {
  it('renders with title', () => {
    const { getByText } = render(<Button title="Checkout" onPress={() => {}} variant="checkout" />);
    expect(getByText('Checkout')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPressMock = vi.fn();
    const { getByText } = render(<Button title="Click Me" onPress={onPressMock} />);
    fireEvent.press(getByText('Click Me'));
    expect(onPressMock).toHaveBeenCalled();
  });
});
