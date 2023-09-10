export {}

declare global {
  interface Window {
    write_thread_modal: fucnction
    write_reply_modal: function
    auth_user_modal: function
  }
}

interface FetchAPIOptions {
  method: string
  headers: object | null
  body: string | null
}

export type {
  FetchAPIOptions
}

export type {
  AccountProfileProps, AccountLoginProps,
  AccountRegisterProps, AccountScoreProps
} from './account'

export type {
  ThreadProps, ThreadDetailProps, ReplyProps,
  ThreadContentProps, ThreadLikeProps, ThreadInfoProps
} from './thread'
