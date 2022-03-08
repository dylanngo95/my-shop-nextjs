import { useEffect, useState } from "react";

function Profile() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(0);

    useEffect(() => {
        setIsLoading(1)
        
        fetch('https://api.github.com/users/dylanngo95')
        .then((res) => res.json())
        .then((data) => {
            setData(data)
            setIsLoading(0)
        })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No Profile</p>

    console.log(data)

    return (
        <div>
            <h1>{(data as any).name}</h1>
            <p>{(data as any).id}</p>
        </div>
    )
}

export default Profile