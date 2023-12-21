import axios from "axios";
import {useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import "./creditsDetails.css";

const CreditsDetails = () => {
    const {credit_id} = useParams();
    const[list,setList] = useState([]);
    const[basket,setBasket] = useState([]);
    const[wrap,setWrap] = useState([])

    useEffect(() => {

        axios.get(`https://api.themoviedb.org/3/credit/${credit_id}?api_key=2583f3d8e283bdf711903f84185ca62c`)
            .then(function (response) {
                console.log(response.data)
                setList(response.data.person);
                setBasket(response.data.media);
                setWrap(response.data)
            })
            .catch(function (error) {

            }).finally(() => {

        })

    },[])

    return(
        <div>
            <div className={"credit-details"}>

            <div className={"credit-films"}>
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${basket.poster_path}`}/>
              <div className={"credit-info"}>
                <div>{basket.original_title}</div>
                <div>{basket.release_date}</div>
                <h2>{basket.title}</h2>
                <div className={"credit-bio"}>{basket.overview}</div>

              </div>
            </div>

              <div className={"credit-person"}>
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${list.profile_path}`}/>
                <div>{list.department}</div>
                <div>{list.original_name}</div>
                <div>{list.known_for_department}</div>
                 <div>{basket.popularity}</div>
                 <div>{wrap.job}</div>
                 <div>{wrap.department}</div>
              </div>
            </div>



        </div>


    )
}

export default CreditsDetails