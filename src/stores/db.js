import { defineStore } from 'pinia'
import content from '../../public/db/220205020201'

export const useDB = defineStore('db', () => {
  async function getFromCode() {
    return content
  }

  return { getFromCode }
})
