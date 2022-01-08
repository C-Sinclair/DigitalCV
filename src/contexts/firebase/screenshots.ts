import { storage } from "./firebase";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { writable } from "svelte/store";

interface Shot {
  name: string;
  url: string;
}

const { subscribe, set } = writable<Shot[]>([]);

declare global {
  interface Array<T> {
    randomOrder: () => T[];
  }
}

Array.prototype.randomOrder = function () {
  return this.sort((a, b) => 0.5 - Math.random());
};

export const fetchShots = async () => {
  const res = await listAll(ref(storage, "shots"));
  const { items } = res;
  const promises = items.map(async (item) => ({
    name: item.name,
    url: await getDownloadURL(item),
  }));
  const list = await Promise.all(promises);
  set(list.randomOrder());
};

export const shots = { subscribe };
