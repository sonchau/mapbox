

type Media = {
  m: string
}
export interface Photo {
  title: string
  link: string
  media: Media
  date_taken: string
  description: string
  published: string
  author: string
  author_id: string
  tags: string
}

export interface PhotoList {
  photoList: Photo[]
}

export interface City {
  city: string
  population: string
  image:string 
  state:string
  latitude:number
  longitude: number
}
