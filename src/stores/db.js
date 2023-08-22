import { defineStore } from 'pinia'
import content from '../../public/db/150210020201_2'

export const useDB = defineStore('db', () => {
  async function getFromCode() {
    return content
  }

  return { getFromCode }
})
