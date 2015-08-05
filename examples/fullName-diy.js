import {
  curry,
} from 'core.lambda'

import {
  Just,
  Nothing,
} from 'data.maybe'

import {
  Left,
  Right,
} from 'data.either'

const map = (fn, functor) => functor.map(fn)
const initial = string => string.split('')[0]
