import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const abortController = new AbortController();
        fetch(url, { signal: abortController.signal })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw Error(`Endpoint ${url} seems to be experiencing and issue. The status code is ${res.status}`)
            })
            .then(data => {
                setData(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log("Fetch Aborted")
                    return
                }
                setIsPending(false)
                setError(err.message)
            })

        return () => abortController.abort();

    }, [url]);

    return { data, isPending, error }

}

export default useFetch