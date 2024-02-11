import axios from "axios";
import {useEffect, useState} from "react";
import { useParams,useNavigate  } from 'react-router-dom';
import "./details.css"
import {} from "react-router-dom";
import LoadingSpinner from "../home/loading";
import Modal from "../home/modal";

const Details = () => {
    const {movieId} = useParams();
    const[movieDetails,setMovieDetails] = useState([]);
    const[genres,setGenres] = useState([]);
    const[product,setProduct] = useState([]);
    const[actors,setActor] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const navigate = useNavigate();
    const gotoPage = (id) => {
        navigate(`/person-detail/${id}`)
    }


    const fetchData = () => {

        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=2583f3d8e283bdf711903f84185ca62c`)
            .then(function (response) {
            if (response.data){
                    setMovieDetails(response.data)
                    setGenres(response.data.genres)
                    setProduct(response.data.production_companies)
                }else{
                    alert("Filmler Çekilemedi")
              }
            })
            .catch(function (error) {
                   console.log(error);
                setIsLoading(false);
            })
            .finally(function (){
                setIsLoading(false);
         });
    }


    const fetchPerson = () => {
        setIsLoading(true);
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=2583f3d8e283bdf711903f84185ca62c`)
            .then(function (response) {
                if (response.data){
                    setActor(response.data.cast)

                }
                else{
                    alert("Filmler Çekilemedi")
                }
            })
            .catch(function (error) {
                console.log(error);
                setIsLoading(false);
            })
            .finally(function (){
                setIsLoading(false);
            });
    }

    useEffect(()=> {
        fetchData();
        fetchPerson();
    },[])




    return(

        <div className={"details-page"}>
            {isLoading ?<LoadingSpinner/>:Details   }


          <div className={"wrap"}>
           <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movieDetails.poster_path}`}/> <Modal photo={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movieDetails.poster_path}`}/>
              <div className={"header-poster"}>
                  {

                          <h1>{movieDetails.title}</h1>
                  }
                  <div className={"films-kind"}>
                          {
                              genres.map((item,index) => {
                                  return (<li key = {index}>{item.name}</li>)
                              })
                          }
                          <li>{movieDetails.runtime}</li>
                      </div>
                      <div className={"tagline"}>{movieDetails.tagline}</div>
                      <h2>Özet</h2>
                      <div className={"overview"}>{movieDetails.overview}</div>
                      <div className={"product-list"}>{
                          product.map((result,index) => {
                              return(<li key={index}>{result.name}

                                      <li key={index}>{result.origin_country}</li>
                              </li>
                              )
                          })
                      }</div>
                      <div>{movieDetails.release_date}</div>
              </div>
          </div>
            <h2>Başrol Oyuncuları</h2>
            <div className={"actors"}>
                {
              actors.length > 0 &&  actors.map((actor,index) => {
                    return(
                        <div className={"actors-list"}>
                            <img onClick={() => gotoPage(actor.id)} src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${actor.profile_path}`}/>
                            <div>{actor.character}</div>
                            <div>{actor.name}</div>
                        </div>
                    )
                })
            }</div>

        </div>
    )
}

export default Details