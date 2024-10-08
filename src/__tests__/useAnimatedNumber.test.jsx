import { act, renderHook} from '@testing-library/react'; 
import useAnimatedNumber from '../hooks/UseAnimatedNumberHook';
import { vi, describe, beforeEach, expect, it } from 'vitest';

describe('useAnimatedNumber', () => {
    beforeEach(() => {
        vi.useFakeTimers(); 
    });

    it('is increase number by timer', () => {
        const targetNumber = 100;
        const duration = 2000;

        const { result } = renderHook(() => useAnimatedNumber(targetNumber, duration));

        expect(result.current).toBe(0);

        act(() => {
            vi.advanceTimersByTime(duration);
        });
    
        expect(result.current).toBe(targetNumber);

    })
});
