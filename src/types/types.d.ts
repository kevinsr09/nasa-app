export interface NasaPost {
  copyright: string
  date: string
  explanation: string
  hdurl: string
  media_type: string
  service_version: string
  title: string
  url: string
}

export interface useFetchApiNasa {
  isLoading: boolean
  isError: boolean
  data: NasaPost[]
}
