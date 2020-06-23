import { useState, useEffect } from 'react'
import axios from 'axios'

interface IUserURLLoader<T> {
  (url: string, deps?: any[]): T
} 

interface IShowResult {
  message: string
  status: number
}

const useURLLoader: IUserURLLoader<{ data: IShowResult | null, loading: boolean }> = (url, deps = []) => {
  const [data, setData] = useState<IShowResult | null>(null)
  const [loading, setLoading] = useState(false)
  async function fetchData() {
    setLoading(true)
    const { data } = await axios.get(url)
    setData(data as IShowResult)
    setLoading(false)
  }
  useEffect(() => {
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return {
    data, 
    loading
  }
}

export default useURLLoader