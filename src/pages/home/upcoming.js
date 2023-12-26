import "./upcoming.css";
import axios from "axios";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import MyLazyLoadedImage from "../details/image-lazy-load";


const UpComing = () => {
        const[list,setList] = useState([]);
        const[loading,setLoading] = useState(true);
        const navigate = useNavigate();

        const goToPage = (id) => {
            navigate(`/movie-detail/${id}`);
        }


    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=2583f3d8e283bdf711903f84185ca62c')
            .then(function (response) {
                setList(response.data.results)

            })

            .catch(function (error) {
                console.log(error)
            })
            .finally(function (){
                setLoading(false);
            })

    },[])


    return(
        <div>
            {
                loading ? <div>...yükleniyor</div>:
                 <h2>Yakında Gelecek Filmler</h2>
            }
            <div className={"upcoming-films"}>
                {
                 list.length > 0 &&  list.map((item,index) => {
                        return(
                            <div>
                              <MyLazyLoadedImage
                                imageSrc={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`}
                                altText="Header Logo"
                                onClick={() => goToPage(item.id)}
                                key={index}
                            />
                                <h2 className={"text-truncate"}>{item.title}</h2>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}
export default UpComing