import React, { useEffect, useState } from 'react'
import CopyToClipboard from "react-copy-to-clipboard"
import axios from "axios"

function LinkResult({ inputValue }) {
    console.log(inputValue)
    const [shortLink, setShortLink] = useState("")
    const [copied, setCopied] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchData = async () => {
        try {
            setLoading(true)
            const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
            setShortLink(res.data.result.full_short_link)
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if(inputValue.length) {
            fetchData()
        }
    }, [inputValue])

    useEffect(() => {
        const timer = setTimeout(() =>  {
            setCopied(false)
        }, 1000)
        return () => clearTimeout(timer)
    }, [copied])

    // console.log(shortLink)

    if(loading) {
        return <p className='noData'>Loading ...</p>
    }

    if(error) {
        return <p className='noData'>Something went wrong</p>
    }

  return (

    <>
        {shortLink && (
            <div className='result'>
            <p>{shortLink}</p>
                <CopyToClipboard
                    text={shortLink}
                    onCopy={() => setCopied(true)}
                >
                <button className={copied ? "copied" : ""}>Copy to clip board</button>
                </CopyToClipboard>
            </div>
        )}
    </>
  )
}

export default LinkResult
