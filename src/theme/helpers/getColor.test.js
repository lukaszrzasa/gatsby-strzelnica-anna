import getColor from './getColor'
import { color } from '../theme'

describe('getColor helper function', () => {

  it('Should returns color properly', () => {
    expect( getColor('violet') ).toBe(color.violet);
    expect( getColor('green') ).toBe(color.green);
  });

  it('Should returns default color when get wrong argument', () => {
    expect( getColor() ).toBe(color.default);
    expect( getColor('some weird color') ).toBe(color.default);
    expect( getColor(false) ).toBe(color.default);
    expect( getColor({}) ).toBe(color.default);
    expect( getColor(()=>{}) ).toBe(color.default);
    expect( getColor([]) ).toBe(color.default);
    expect( getColor(null) ).toBe(color.default);
    expect( getColor(undefined) ).toBe(color.default);
    expect( getColor(22.2) ).toBe(color.default);
  })

})