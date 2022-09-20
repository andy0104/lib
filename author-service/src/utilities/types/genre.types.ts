export type GenreInputs = {
  genId?: string,
  name: string,
  status: boolean
}

export type GenreResultError = {
  code: number,
  message: string
}

export type GenreFilter = {
  genId?: string,
  name?: string,
  status?: boolean
}

export type FilterOptions = {
  genreName?: any
}