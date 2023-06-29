const storage = {
  save: (name, data) => {
    const dataJSON = JSON.stringify(data)
    localStorage.setItem(name, dataJSON)
  },
  get: (name) => {
    if (localStorage.getItem(name)) {
      const dataJSON = localStorage.getItem(name)
      const data = JSON.parse(dataJSON)
      return data
    }
    return undefined
  },
  clear: (name) => {
    localStorage.removeItem(name)
  },
}

export default storage
