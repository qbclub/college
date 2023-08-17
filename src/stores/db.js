import { defineStore } from 'pinia'

export const useDB = defineStore('db', () => {
  async function getFromCode(code) {
		return await (await fetch(`/db/${code || 150210020201}.json`)).json()
	}

  return { getFromCode }
})
