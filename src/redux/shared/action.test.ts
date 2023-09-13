// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { describe, beforeEach, afterEach, it, vi, expect } from 'vitest'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { type AccountProfileProps, type ThreadProps } from '../../interfaces'
import api from '../../utils/api'
import { asyncPopulateUsersAndThreads } from './action'
import { receiveThreadsActionCreator } from '../threads/action'
import { receiveUsersActionCreator } from '../users/action'

const fakeThreadsResponse: ThreadProps[] = [
  {
    id: 'thread-1',
    title: 'Thread Test 1',
    body: 'Zehahahahah',
    category: 'test',
    createdAt: '2022-09-22T10:06:55.588Z',
    ownerId: 'user-1',
    upVotesBy: [],
    downVotesBy: [],
    totalComments: 0,
    user: {
      id: 'user-1',
      avatar: 'https://randomuser.me/api/portraits/med/men/75.jpg',
      name: 'bejo',
      email: 'bejo@gmail.com'
    }
  }
]

const fakeUsersResponse: AccountProfileProps[] = [
  {
    id: 'user-1',
    avatar: 'https://randomuser.me/api/portraits/med/men/75.jpg',
    name: 'bejo',
    email: 'bejo@gmail.com'
  }
]

const fakeErrorResponse = new Error('Ups, something went wrong')

describe('asyncPopulateUsersAndThreads thunk', () => {
  beforeEach(() => {
    api._getAllUsers = api.getAllUsers
    api._getAllThreads = api.getAllThreads
  })

  afterEach(() => {
    api.getAllUsers = api._getAllUsers
    api.getAllThreads = api._getAllThreads

    // delete backup data
    delete api._getAllUsers
    delete api._getAllThreads
  })

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.getAllUsers = async () => await Promise.resolve(fakeUsersResponse)
    api.getAllThreads = async () => await Promise.resolve(fakeThreadsResponse)

    // mock dispatch
    const dispatch = vi.fn()

    // action
    await asyncPopulateUsersAndThreads()(dispatch)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(receiveThreadsActionCreator(fakeThreadsResponse))
    expect(dispatch).toHaveBeenCalledWith(receiveUsersActionCreator(fakeUsersResponse))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.getAllUsers = async () => await Promise.reject(fakeErrorResponse)
    api.getAllThreads = async () => await Promise.reject(fakeErrorResponse)
    // mock dispatch
    const dispatch = vi.fn()
    // mock console
    console.error = vi.fn()

    // action
    await asyncPopulateUsersAndThreads()(dispatch)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(console.error).toHaveBeenCalledWith(fakeErrorResponse)
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })
})
