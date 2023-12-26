import "./PopularFilms.css"
import axios from "axios";
import {useState,useEffect} from "react";
import { useNavigate} from 'react-router-dom';
import LoadingSpinner from "./loading";
import MyLazyLoadedImage from "../details/image-lazy-load";



const PopularFilms = () => {
    const navigate = useNavigate();
    const[list,setList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const goToPage = (id) => {
        navigate(`/movie-detail/${id}`);
    }
    useEffect(() => {
        setIsLoading(true)
        axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=2583f3d8e283bdf711903f84185ca62c')
            .then(function (response) {
                setList(response.data.results);
            })
            .catch(function (error) {
                console.log(error)
            }).finally(() => {
            setIsLoading(false);
        })

  },[])





    return(

        <div className={"container-popular d-flex"}>
            {isLoading ? <LoadingSpinner/>:PopularFilms}

            <h2>Popular Filmler</h2>
            <div className={"films-popular"}>
                {
                    list.length > 0 && list.map((item,index) => {
                        return(   <MyLazyLoadedImage
                            imageSrc={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`}
                            altText="Header Logo"
                            onClick={() => goToPage(item.id)}
                            key={index}
                        />)
                    })
                }
            </div>

        </div>
    )


}

export default PopularFilms