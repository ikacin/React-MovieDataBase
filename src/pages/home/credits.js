import {useNavigate, useParams} from "react-router-dom";
import {useState,useEffect} from "react";
import "./credits.css"
import axios from "axios";
import LoadingSpinner from "../home/loading";

const Credits = () => {
    const {movieId} = useParams();
    const[list,setList] = useState([])
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    const gotoPage = (credit_id) => {
        navigate(`/credit-details/${credit_id}`)
    }

    useEffect(() => {
        setIsLoading(true);
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=2583f3d8e283bdf711903f84185ca62c`)
            .then(function (response) {

                setList(response.data.crew);
                setIsLoading(false);
            })
            .catch(function (error) {
                console.log(error)
            }).finally(() => {
            setIsLoading(false);
        })

    },[])

    return(
        <div>
            {
                isLoading ? <LoadingSpinner/>:Credits
            }
            <div className={"credit-wrap"}>
                {
                    list.length > 0 && list.map((item,index) => {
                            return(
                                <div className={"credit-actor"}>
                                <image onClick={() => gotoPage(item.credit_id)} key={index} src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.profile_path}`}/>
                                 <div>{item.name}</div>
                                </div>
                            )
                    })
                }
            </div>
        </div>
    )

}

export default Credits