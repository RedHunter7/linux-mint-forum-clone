import { type AccountProfileProps } from './account'

interface ThreadProps {
  id: string
  title: string
  body: string
  category: string
  createdAt: string
  ownerId: string
  upVotesBy: string[]
  downVotesBy: string[]
  totalComments: number
  user: AccountProfileProps | undefined
}

interface ReplyProps {
  id: string
  content: string
  createdAt: string
  owner: AccountProfileProps
  upVotesBy: string[]
  downVotesBy: string[]
}

interface ThreadDetailProps {
  id: string
  title: string
  body: string
  category: string
  createdAt: string
  owner: AccountProfileProps
  upVotesBy: string[]
  downVotesBy: string[]
  comments: ReplyProps[]
}

interface ThreadContentProps {
  text: string
  replyTo: string | undefined
}

interface ThreadLikeProps {
  id: string
  upVotesBy: string[]
}

interface ThreadInfoProps {
  threadId: string
  userId: string
}

export type {
  ThreadProps, ThreadDetailProps, ReplyProps,
  ThreadContentProps, ThreadLikeProps, ThreadInfoProps
}
