/* eslint-env mocha */
'use strict'

const assert = require('assert')
const initState = require('../../../../lib/ococo/meta/init_state')

describe('ococo:meta:init_state', () => {
  it('starts up with initial-order-fill flag set to false', () => {
    assert.strictEqual(initState().initialOrderFilled, false)
  })
})
