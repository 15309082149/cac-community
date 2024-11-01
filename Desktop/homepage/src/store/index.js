import {create} from 'zustand'

// define the store
const useStore = create(set => ({
  hook: '',
  sethook:(name) => set(state =>({ hook: name}))
}))

export default useStore
