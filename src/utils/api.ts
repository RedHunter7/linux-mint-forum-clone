const api = (() => {
  const BASE_URL = 'https://forum-api.dicoding.dev/v1'

  interface options {
    method: string
    headers: object | null
    body: string | null
  }

  const _fetchWithAuth = async (url: string, options: options = {
    method: 'GET', headers: null, body: null
  }): Promise<object> => {
    return await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`
      }
    })
  }

  const putAccessToken = (token: string): void => {
    localStorage.setItem('accessToken', token)
  }

  const getAccessToken = (): string => {
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken === null) {
      throw new Error('Could not find access token')
    }
    return accessToken
  }

  interface accountRegister {
    id: string
    email: string
    password: string
  }

  const register = async (account: accountRegister): Promise<object> => {
    const response = await fetch(`${BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(account)
    })

    const responseJson = await response.json()
    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const { data: { user } } = responseJson

    return user
  }

  interface accountLogin {
    id: string
    email: string
    password: string
  }

  const login = async (account: accountLogin): Promise<string> => {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(account)
    })

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const { data: { token } } = responseJson

    return token
  }

  const getOwnProfile = async (): Promise<object> => {
    const response = await _fetchWithAuth(`${BASE_URL}/users/me`)

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const { data: { user } } = responseJson

    return user
  }

  const getAllUsers = async (): Promise<object> => {
    const response = await fetch(`${BASE_URL}/users`)

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const { data: { users } } = responseJson

    return users
  }

  const getAllThreads = async (): Promise<object> => {
    const response = await fetch(`${BASE_URL}/talks`)

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const { data: { talks } } = responseJson

    return talks
  }

  const getThreadDetail = async (id: string): Promise<object> => {
    const response = await fetch(`${BASE_URL}/talks/${id}`)

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const { data: { talkDetail } } = responseJson

    return talkDetail
  }

  interface Thread {
    text: string
    replyTo: string
  }

  const createThread = async (Thread: Thread): Promise<object> => {
    const response = await _fetchWithAuth(`${BASE_URL}/talks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Thread)
    })

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const { data: { talk } } = responseJson

    return talk
  }

  const toggleLikeThread = async (id: string): Promise<void> => {
    const response = await _fetchWithAuth(`${BASE_URL}/talks/likes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        talkId: id
      })
    })

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }
  }

  return {
    putAccessToken,
    getAccessToken,
    register,
    login,
    getOwnProfile,
    getAllUsers,
    getAllThreads,
    createThread,
    toggleLikeThread,
    getThreadDetail
  }
})()

export default api
