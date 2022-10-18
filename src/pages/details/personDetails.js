import "./personDetails.css"
import axios from "axios";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";


const PersonDetails = () => {

    const[list,setList] = useState([]);
    const[loading,setLoading] = useState(true);
    const{person_Id} = useParams();
    const navigate = useNavigate();

    const gotoPage = (id) => {
        navigate(`/credit/${id}`);
    }



    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/person/${person_Id}?api_key=2583f3d8e283bdf711903f84185ca62c`)
            .then(function (response) {

                    setList(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(() => {
                setLoading(false)
            })
    },[])

    return(
            <div>
              <div className={"person-details"}>
                  {loading ? <div>...Yükleniyor</div>:
                    <div/>
                  }
                  <img onClick={() => gotoPage(list.id)} src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${list.profile_path}`}/>
                 <div className={"content"}>
                      <h2>{list.name}</h2>
                      <div className={"Blog"}>
                          <div>Biyografi</div>
                          <div className={"text-biography"}>{list.biography}</div>
                      </div>
                 </div>
              </div>



            </div>
    )


}





export default PersonDetails