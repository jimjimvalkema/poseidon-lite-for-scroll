import poseidon from '../poseidon'
import unstringifyBigInts from '../poseidon/unstringify'
import _c from '../constants_opt/6'

const c = unstringifyBigInts(_c)

export function poseidon6(inputs) { return poseidon (inputs, c) }