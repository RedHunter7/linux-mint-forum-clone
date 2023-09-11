import toast from 'react-hot-toast'
import {
  type AccountLoginProps, type AccountRegisterProps, type ThreadContentProps,
  type ThreadDetailProps, type FetchAPIOptions, type ThreadProps,
  type AccountProfileProps, type AccountScoreProps, type ReplyProps
} from '../interfaces'
import { type ReplyContentProps } from '../interfaces/thread'

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
      toast.error('Could not find access token')
      throw new Error('Could not find access token')
    }
    return accessToken
  }

  const register = async (
    account: AccountRegisterProps,
    onSuccess: () => void
  ): Promise<object> => {
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
      toast.error('Register Acoount Failed!!')
      throw new Error(message)
    }

    const { data: { user } } = responseJson

    onSuccess()

    return user
  }

  const login = async (
    account: AccountLoginProps,
    onSuccess: () => void
  ): Promise<string> => {
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
      toast.error('Login Failed!!')
      throw new Error(message)
    }

    const { data: { token } } = responseJson

    onSuccess()

    return token
  }

  const getOwnProfile = async (): Promise<AccountProfileProps> => {
    const response = await _fetchWithAuth(`${BASE_URL}/users/me`)

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const { data: { user } } = responseJson

    return user
  }

  const getAllUsers = async (): Promise<AccountProfileProps[]> => {
    const response = await fetch(`${BASE_URL}/users`)

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const { data: { users } } = responseJson

    return users
  }

  const getAllThreads = async (): Promise<ThreadProps[]> => {
    const response = await fetch(`${BASE_URL}/threads`)

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const { data: { threads } } = responseJson

    return threads
  }

  const getThreadDetail = async (id: string): Promise<ThreadDetailProps> => {
    const response = await fetch(`${BASE_URL}/threads/${id}`)

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const { data: { detailThread: threadDetail } } = responseJson

    return threadDetail
  }

  const createThread = async (
    threadContent: ThreadContentProps,
    onSuccess: () => void
  ): Promise<ThreadProps> => {
    const response = await _fetchWithAuth(`${BASE_URL}/threads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(threadContent)
    })

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status !== 'success') {
      toast.error('Create Thread Failed!!')
      throw new Error(message)
    }

    const { data: { thread } } = responseJson

    onSuccess()

    return thread
  }

  const createReply = async (
    replyContent: ReplyContentProps,
    onSuccess: () => void
  ): Promise<ReplyProps> => {
    const response = await _fetchWithAuth(
      `${BASE_URL}/threads/${replyContent.threadId}/comments`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content: replyContent.content
        })
      })

    const responseJson = await response.json()

    const { status, message } = responseJson
    console.log(responseJson)

    if (status !== 'success') {
      toast.error('Create Reply Failed!!')
      throw new Error(message)
    }

    const {
      data: {
        comment: reply
      }
    } = responseJson

    onSuccess()

    return reply
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

  const getLeaderboards = async (): Promise<AccountScoreProps[]> => {
    const response = await fetch(`${BASE_URL}/leaderboards`)

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const { data: { leaderboards } } = responseJson

    return leaderboards
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
    createReply,
    toggleLikeThread,
    getThreadDetail,
    getLeaderboards
  }
})()

export default api
