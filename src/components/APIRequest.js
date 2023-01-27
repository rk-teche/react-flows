import { useEffect, useState } from "react";

const query = `
query {
    allLifts {
        name
        elevationGain
    }
}
`

const graphQLEndPoint = 'https://snowtooth.moonhighway.com/';

function RederItem({data, renderData, EmptyData = null}){

    if(!EmptyData) return (<><p>List has no data</p></>)

    return (<>
    {
        data.map(res => {
            <li>{renderData(res)}</li>
        })
    }
    </>)
}

export function APIRequest(){

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const opts = {
        method: "POST",
        headers: { "Content-type" : "application/json"},
        body: JSON.stringify({query})
    }

    useEffect(() => {
        setLoading(false);
        fetch(graphQLEndPoint, opts)
            .then(res => res.json())
            .then(setData)
            .then(res => setLoading(true))
            .catch(setError)

        }, [])
        
        console.log('data', data)    

    // if(!loading) return (<h1>Loading...</h1>)        

    return (
        <>
            <h2>name: {data.name}</h2>
            <RederItem data={data?.data?.allLifts} renderData={(data) => (<><h1>{data.name}</h1><section>{data.elevationGain}</section></>)} EmptyData={loading}></RederItem>
        </>
    )
}