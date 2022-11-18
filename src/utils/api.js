import axios from 'axios'

const urlBase = 'https://hacker-news.firebaseio.com/v0/'
const urlSuffix = '.json?print=pretty'

export async function getData(resource, type = 'live') {
  const fullURL =
    type === 'live'
      ? `${urlBase}${resource}${urlSuffix}`
      : type === 'user'
      ? `${urlBase}user/${resource}${urlSuffix}`
      : `${urlBase}item/${resource}${urlSuffix}`
  const res = await axios.get(fullURL)
  return res.data
}
