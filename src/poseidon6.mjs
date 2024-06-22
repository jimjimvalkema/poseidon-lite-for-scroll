import poseidon from './poseidon'
import unstringifyBigInts from './poseidon/unstringify'
import _c from './constants/6'

const c = unstringifyBigInts(_c)

export function poseidon6(inputs, domain) {
  return poseidon(inputs, c, domain)
}
