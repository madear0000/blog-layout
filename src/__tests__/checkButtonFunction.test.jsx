import { render, fireEvent } from '@testing-library/react';
import Button from '../components/Button/Button';
import { describe, it, expect, vi } from 'vitest';

describe('checkButtonFunction', () => {

    it ('should check the button to see if it can be pressed', () => {
        const handleCLick = vi.fn();
        const { getByText } = render (
            <Button onClick={handleCLick} isDisabled={false}>
                Click me
            </Button>
        )

        const button = getByText('Click me');
        fireEvent.click(button);

        expect(handleCLick).toHaveBeenCalled(1);
    });

    it('should check the button to see if it cannot be pressed if it disabled', () => {
        const handleCLick = vi.fn();
        const { getByText } = render(
            <Button onClick={handleCLick} isDisabled={false}>
                Can click
            </Button>
        )

        const button = getByText('Can click');
        fireEvent.click(button);

        expect(handleCLick).toHaveBeenCalled(0);
    })
});