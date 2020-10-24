import Home from './home.svelte'
import Contact from './contact.svelte'
import NotFound from './404.svelte'

export const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: 'contact',
    component: Contact
  },
  {
    component: NotFound
  }
]