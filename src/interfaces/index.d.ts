export {}

declare global {
  interface Window {
    write_thread_modal: fucnction
    write_reply_modal: function
  }
}

interface AuthUserProps {
  id: string
  photo: string
  name: string
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

interface ThreadContentProps {
  text: string
  replyTo: string
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
  ThreadContentProps, ThreadInfoProps, ThreadLikeProps, AuthUserProps
}
