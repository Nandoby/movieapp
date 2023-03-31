export interface MovieCredit {
  cast: Cast[]
  crew: Crew[]
  id: number
}

interface Cast {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  vote_average: number
  character: string
  poster_path: string
  title: string
}

interface Crew {

}

