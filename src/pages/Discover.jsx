import { useEffect, useState } from "react";
import {genres} from "../assets/constants.js"
import SongCard from "../components/SongCard.jsx";
const Discover = () => {
    const[title, setTitle] = useState({genreTitle: "Pop", co: "POP"});
    const[items, setItems] = useState({})
    const changeTitle = (n) =>{
        const obje = JSON.parse(n.target.value);
        setTitle({genreTitle: obje.title, co: obje.code});
    
    }

    useEffect(() => {
        const url = `https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in_world_by_genre?genre=${title.co}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '53cf488c48mshcd46c1bb968361cp1a1173jsnfa336d9d9092',
                'X-RapidAPI-Host': 'shazam-core7.p.rapidapi.com'
            }
        };
        
        fetch(url, options)
        .then(response => response.json())
        .then(response => setItems(response))
        .catch(err => console.error(err));
    }, [title])
    let arr = items.tracks;
    
    return(
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center sm:flex-row flex-col">
                <h2 className="text-2xl text-emerald-300">Discover {title.genreTitle}</h2>
                <select onChange={(event) => changeTitle(event)}>
                    {genres.map((genre) => {
                        let obj = {code: genre.value, title: genre.title};
                        return <option key={genre.title} value={JSON.stringify(obj)}>{genre.title}</option>
                    })}
                </select>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
                {(arr || []).map((element)=><SongCard key={element.key} song={element} />)}
            </div>
        </div>
    )
}

export default Discover;
 