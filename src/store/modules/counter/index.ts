import { defineStore } from 'pinia'
import type { CounterState } from './types'

const useCounter = defineStore('counter', {
  state: (): CounterState => ({
    count: 0
  }),
  getters: {
    double: (state: CounterState) => state.count * 2
  },
  actions: {
    increment () {
      this.count++
    },
    decrement () {
      this.count--
    }
  }
})

export default useCounter