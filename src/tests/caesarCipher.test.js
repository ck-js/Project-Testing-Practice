import {caesarCipher} from '../caesarCipher';


test('caesarCipher Hello, Jest! to be Khoor, MhvW!', () => {
    expect(caesarCipher('Hello, JesT!',3)).toBe('Khoor, MhvW!')
})


 