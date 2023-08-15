import { defineStore } from 'pinia'

export const useDB = defineStore('db', () => {
  async function getFromCode(code) {
		return await (await fetch(`/db/${code || 220105030301 }.json`)).json()
	}

  return { getFromCode }
})
