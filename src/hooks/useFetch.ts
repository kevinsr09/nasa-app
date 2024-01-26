import { useEffect, useState } from 'react'

import { NasaPost, useFetchApiNasa } from '@/types/types'

export const useFetch = ({ url }: { url: string }): useFetchApiNasa => {
  const [data, setData] = useState<NasaPost[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
      })
      .catch(() => {
        setIsError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [url])

  return { isLoading, isError, data: data instanceof Array ? data : [data] }
}
