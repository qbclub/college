import { defineStore } from 'pinia'
import content from '../../public/db/150210040401'

export const useDB = defineStore('db', () => {
  async function getFromCode() {
    return content
  }

  return { getFromCode }
})
