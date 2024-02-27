import { sum, dateFormat } from './functions'

describe('cek fungsi sum', () => {
  it('sum(1, 2) = 3', () => { expect(sum(1, 2)).toBe(3) })
  it('sum(4, 9) = 13', () => { expect(sum(4, 9)).toBe(13) })
  it('sum(20, 100) = 120', () => { expect(sum(20, 100)).toBe(120) })
  it('sum(3, 4) = 7', () => { expect(sum(3, 4)).toBe(7) })
})

describe('cek fungsi dateFormat', () => {
  it('country = sg', () => {
    expect(dateFormat('sg')).toBe('MM-DD-YYYY')
  })

  it('country = asia', ()=> {
    expect(dateFormat('asia')).toBe('DD-MM-YYYY')
  })

  it('country = america',()=> {
    expect(dateFormat('america')).toBe('YYYY-MM-DD')
  })
})
