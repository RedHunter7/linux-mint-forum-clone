export {}

declare global {
  interface Window {
    write_thread_modal: fucnction
    write_reply_modal: function
  }
}

interface UserProps {
  id: string
  name: string
  email: string
  avatar: string
}

interface FetchAPIOptions {
  method: string
  headers: object | null
  body: string | null
}

interface AccountRegisterProps {
  name: string
  email: string
  password: string
}

interface AccountLoginProps {
  email: string
  password: string
}

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
  user: UserProps | undefined
}

interface ReplyProps {
  id: string
  content: string
  createdAt: string
  owner: UserProps
  upVotesBy: string[]
  downVotesBy: string[]
}

interface ThreadDetailProps {
  id: string
  title: string
  body: string
  category: string
  createdAt: string
  owner: UserProps
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
  likes: string[]
}

interface ThreadInfoProps {
  threadId: string
  userId: string
}

export type {
  FetchAPIOptions, AccountRegisterProps, AccountLoginProps,
  ThreadContentProps, ThreadInfoProps, ThreadLikeProps,
  UserProps, ThreadProps, ThreadDetailProps, ReplyProps
}
