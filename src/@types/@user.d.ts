type Contribution = {
  id: number
  type: string
  actor: {
    id: number
    login: string
    display_login: string
    gravatar_id: number
    url: string
    avatar_url: string
  }
  repo: {
    id: number
    name: string
    url: string
  }
  payload: {
    push_id: number
    size: number
    distinct_size: number
    ref: string
    head: string
    before: string
    commits: [
      {
        sha: string
        author: {
          email: string
          name: string
        }
        message: string
        distinct: boolean
        url: string
      }
    ]
  }
  public: boolean
  created_at: string
}

type User = {
  login: string
  avatar_url: string
  name: string
  email: string
  location: string
  bio: string
  followers: string
  following: string
  collaborators: number
  public_repos: number
  total_private_repos: number
  total_repos: number
  contributions: Contribution
}

export { User, Contribution }
