import { defineStore } from 'pinia'

export const useDB = defineStore('db', () => {
  async function getFromCode(code) {
		return await (await fetch(`/db/${code || 150216050501}.json`)).json()
	}

  return { getFromCode }
})
