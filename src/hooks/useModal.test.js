import useModal from './useModal';

describe('useModal hook', () => {

  it('returns initial state properly', () => {
    {
      const { isVisible } = useModal(true);
      expect( isVisible ).toBeTruthy();
    }
    {
      const { isVisible } = useModal(false);
      expect( isVisible ).toBeFalsy();
    }
  });

  it('close & open & toggle functions works properly', () => {
    const { isVisible, open, close, toggle } = useModal(true);
    expect( isVisible ).toBeTruthy();
    close();
    expect( isVisible ).toBeFalsy();
    open();
    expect( isVisible ).toBeTruthy();
    close();
    close();
    expect( isVisible ).toBeFalsy();
    toggle();
    expect( isVisible ).toBeTruthy();
    toggle();
    expect( isVisible ).toBeFalsy();
  });

});