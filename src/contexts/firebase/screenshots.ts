import { storage } from './firebase'
import type { storage as Storage } from 'firebase'
import { writable } from 'svelte/store'

interface Shot {
  name: string
  url: string
}

const { subscribe, set } = writable<Shot[]>([])

const getUrl = (item: Storage.Reference): Promise<string> => item.getDownloadURL()

declare global {
  interface Array<T> {
    randomOrder: () => T[]
  }
}

Array.prototype.randomOrder = function () {
  return this.sort((a, b) => 0.5 - Math.random())
}

export const fetchShots = async () => {
  const res = await storage.ref().child('shots').listAll()
  const { items } = res
  const promises = items.map(async item => ({
    name: item.name,
    url: await getUrl(item)
  }))
  const list = await Promise.all(promises)
  set(list.randomOrder())
}

export const shots = { subscribe }
