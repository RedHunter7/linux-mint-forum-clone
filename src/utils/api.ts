import {
  type AccountLoginProps, type AccountRegisterProps,
  type ThreadContentProps, type FetchAPIOptions
} from '../interfaces'

const api = (() => {
  const BASE_URL = 'https://forum-api.dicoding.dev/v1'

  const _fetchWithAuth = async (url: string, options: FetchAPIOptions = {
    method: 'GET', headers: null, body: null
  }): Promise<any> => {
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

  const register = async (account: AccountRegisterProps): Promise<object> => {
    const response = await fetch(`${BASE_URL}/register`, {
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

  const login = async (account: AccountLoginProps): Promise<string> => {
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
    const response = await fetch(`${BASE_URL}/threads`)

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const { data: { talks } } = responseJson

    return talks
  }

  const getThreadDetail = async (id: string): Promise<object> => {
    const response = await fetch(`${BASE_URL}/threads/${id}`)

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const { data: { talkDetail } } = responseJson

    return talkDetail
  }

  const createThread = async (thread: ThreadContentProps): Promise<object> => {
    const response = await _fetchWithAuth(`${BASE_URL}/threads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(thread)
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
    const response = await _fetchWithAuth(`${BASE_URL}/threads/likes`, {
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
