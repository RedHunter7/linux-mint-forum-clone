interface AccountProfileProps {
  id: string
  name: string
  email: string
  avatar: string
}

interface AccountLoginProps {
  email: string
  password: string
}

interface AccountRegisterProps extends AccountLoginProps {
  name: string
}

interface AccountScoreProps {
  user: AccountProfileProps
  score: number
}

export type {
  AccountProfileProps, AccountLoginProps,
  AccountRegisterProps, AccountScoreProps
}
