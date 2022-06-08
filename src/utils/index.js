const URL = "https://api.github.com/users/"


async function getUsers(name) {
    const response = await fetch(`${URL}${name}`)
    const json = await response.json()
    return json
  }

  export default getUsers;