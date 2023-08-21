import { defineStore } from 'pinia'
import content from '../../public/db/130110020202'

export const useDB = defineStore('db', () => {
  async function getFromCode() {
    return content
  }

  return { getFromCode }
})
