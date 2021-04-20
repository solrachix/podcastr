/* eslint-disable camelcase */

export type Repo = {
  id: number
  name: string
  template_url: string
  stars: number
  commitsCount: number
  private: number
}

export type NewRepo = {
  id: number
  name: string
  full_name: string
  logo_url: string
  logo_symbol_url: string
  template_url: string
  description: string
  private: boolean
  fork: boolean
  license: string | null
  readme: string

  open_issues: number
  stars: number
  watchers: number
  forks: number
  language: string
  languages: {
    [name: string]: string
  }
  topics: string[]
  created_at: string
  size: number
  commitsCount: number
}

export type File = {
  name: string
  path: string
  sha: string
  size: number
  url: string
  html_url: string
  git_url: string
  download_url: string
  type: string
  content: string
  encoding: string
  _links: {
    self: string
    git: string
    html: string
  }
}
