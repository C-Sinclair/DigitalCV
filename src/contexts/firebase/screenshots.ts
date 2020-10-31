import { storage } from './firebase'
import type { storage as Storage } from 'firebase'
import { BehaviorSubject, from } from 'rxjs'

interface Shot {
  name: string
  url: string
}

const getUrl = (item: Storage.Reference): Promise<string> => item.getDownloadURL()

const listShots = async (): Promise<Shot[]> => {
  const res = await storage.ref().child('shots').listAll()
  const { items } = res
  const promises = items.map(async item => ({
    name: item.name,
    url: await getUrl(item)
  }))
  return Promise.all(promises)
}

export const shots = new BehaviorSubject<Shot[]>([])

from(listShots()).subscribe(shots)

