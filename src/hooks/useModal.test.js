import useModal from './useModal';
import { renderHook, act } from '@testing-library/react-hooks'

describe('useModal hook', () => {

  it('returns initial state properly', () => {
    {
      const { result } = renderHook(() => useModal(true));
      expect( result.current.isVisible ).toBeTruthy();
    }
    {
      const { result } = renderHook(() => useModal(false));
      expect( result.current.isVisible ).toBeFalsy();
    }
  });

  it('close & open & toggle functions works properly', () => {
    const { result } = renderHook(() => useModal(true));
    expect( result.current.isVisible ).toBeTruthy();
    act(() => result.current.close());
    expect( result.current.isVisible ).toBeFalsy();
    act(() => result.current.open());
    expect( result.current.isVisible ).toBeTruthy();
    act(() => result.current.close());
    act(() => result.current.close());
    expect( result.current.isVisible ).toBeFalsy();
    act(() => result.current.toggle());
    expect( result.current.isVisible ).toBeTruthy();
    act(() => result.current.toggle());
    expect( result.current.isVisible ).toBeFalsy();
  });

});