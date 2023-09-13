import { describe, it, expect } from 'vitest'
import threadsReducer from './reducer'
import { type ThreadProps } from '../../interfaces'

describe('threadsReducers function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState: any[] = []
    const action = { type: 'UNKNOWN' }

    // action
    const nextState = threadsReducer(initialState, action)

    // assert
    expect(nextState).toEqual(initialState)
  })

  it('should return the talks when given by RECEIVE_THREADS action', () => {
    // arrange
    const initialState: any[] = []
    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        threads: [
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
          },
          {
            id: 'thread-2',
            title: 'Thread Test 2',
            body: 'xixixixixixixxi',
            category: 'test',
            createdAt: '2022-09-22T10:06:56.588Z',
            ownerId: 'user-2',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
            user: {
              id: 'user-2',
              avatar: 'https://randomuser.me/api/portraits/med/men/75.jpg',
              name: 'budi',
              email: 'budi@gmail.com'
            }
          }
        ]
      }
    }

    // action
    const nextState = threadsReducer(initialState, action)

    // assert
    expect(nextState).toEqual(action.payload.threads)
  })

  it('should return the threads with the new thread when given by ADD_THREAD action', () => {
    // arrange
    const initialState: ThreadProps[] = [
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

    const action = {
      type: 'ADD_THREAD',
      payload: {
        thread: {
          id: 'thread-2',
          title: 'Thread Test 2',
          body: 'xixixixixixixxi',
          category: 'test',
          createdAt: '2022-09-22T10:06:56.588Z',
          ownerId: 'user-2',
          upVotesBy: [],
          downVotesBy: [],
          totalComments: 0,
          user: {
            id: 'user-2',
            avatar: 'https://randomuser.me/api/portraits/med/men/75.jpg',
            name: 'budi',
            email: 'budi@gmail.com'
          }
        }
      }
    }

    // action
    const nextState = threadsReducer(initialState, action)

    // assert
    expect(nextState).toEqual([action.payload.thread, ...initialState])
  })
})
