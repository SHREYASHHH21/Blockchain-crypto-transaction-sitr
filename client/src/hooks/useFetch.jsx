import {useEffect , useState} from 'react';

const API_KEY = import.meta.env.GIFY_API;

const useFetch = ({keyword}) => {
    const [gifUrl,setgifUrl] = useState("");

    const fetchGifs = async () => {
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&q=${keyword.split(" ").join("")}&limit=1`)
            
        const {data} = await response.json();
         setgifUrl(data[0]?.images?.downsized_mediun?.url)

        } catch (error) {
             setgifUrl("https://media4.popsugar-assets.com/files/2013/11/07/832/n/1922398/eb7a69a76543358d_28.gif")
        }
    }

    useEffect(()=>{
      if(keyword) fetchGifs();
    },[keyword])

    return gifUrl;
}

export default useFetch;