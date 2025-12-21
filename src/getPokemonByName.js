import axios from 'axios'
import { useState, useEffect } from 'react'

const useGetPokemon = (url) => {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        if (!url) {
            setIsLoading(false)
            return
        }
        let cancelled = false

        setIsLoading(true)
        setError('')

        axios
            .get(url)
            .then((response) => {
                if (cancelled) return
                setData(response.data)
            })
            .catch((err) => {
                if (cancelled) return
                setError(err && err.message ? err.message : String(err))
            })
            .finally(() => {
                if (cancelled) return
                setIsLoading(false)
            })

        return () => {
            cancelled = true
        }
    }, [url])

    console.log('useGetPokemon ', data)

    return { data, isLoading, error }
}

export default useGetPokemon
