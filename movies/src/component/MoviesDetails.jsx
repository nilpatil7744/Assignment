import React,{useState, useEffect} from "react"
import { useParams } from "react-router"
import axios from "axios"
import "../component/Styles/MoviesDetails.css"


const MoviesDetails = ()=>{

  const [info,SetInfo] = useState([])  


  /// Getting the id details from useParams
  const {id} = useParams()

  // Fetching Movies Data with Id

  useEffect(()=>{
      axios.get(`http://www.omdbapi.com/?i=${id}&apikey=a1b5f9ec`)

      .then(function (response) {
      // Request succesful storting data in state
      SetInfo(response.data)
  })
      .catch(function (error) {
      // handle error
      console.log(error);
  })},[])
    
  
    return(

        <div style={{ width:"50%",marginLeft:"20%",float:"left",marginTop:"30px"}} >
            <img src={info.Poster}alt=""  />
            <div className="Head-Container">
  
              <h1 className="Movies-Text" > <a className="Titiles-Name">Title: </a> <a className="Movies-SubText">{info.Title}</a></h1>

              <h3 className="Movies-Text" > <a className="Titiles-Name">Released: </a> <a className="Movies-SubText">{info.Released}</a></h3>

              <h3 className="Movies-Text" > <a className="Titiles-Name">RunTime: </a> <a className="Movies-SubText">{info.Runtime}</a></h3>

              <h3 className="Movies-Text" > <a className="Titiles-Name">Director: </a> <a className="Movies-SubText">{info.Director}</a></h3>
  
              <h3 className="Movies-Text" > <a className="Titiles-Name">Writer: </a> <a className="Movies-SubText">{info.Writer}</a></h3>

              <h3 className="Movies-Text" > <a className="Titiles-Name">Actor: </a><a className="Movies-SubText">{info.Actors}</a> </h3>

              <h3 className="Movies-Text" > <a className="Titiles-Name">Plot: </a> {info.Plot}</h3>

              <h3 className="Movies-Text" > <a className="Titiles-Name">Ratings: </a> {info.Ratings?.map((item)=> 
              <div>
                {item.Source}
                {item.value}
              </div>
              
              )}</h3>

              
              <h3 className="Movies-Text" > <a className="Titiles-Name">imdbRating: </a> {info.imdbRating} ⭐</h3>


              <h3 className="Movies-Text" > <a className="Titiles-Name">imdbID: : </a> {info.imdbID}</h3>

              <h3 className="Movies-Text" > <a className="Titiles-Name">Rated: </a> {info.Rated}</h3>

              <h3 className="Movies-Text" > <a className="Titiles-Name">imdbVotes: </a> {info.imdbVotes}</h3>

              <h3 className="Movies-Text" > <a className="Titiles-Name">Website: </a> {info.Website}</h3>

              <h3 className="Movies-Text" > <a className="Titiles-Name">Type: </a> {info.Type}</h3>

              <h3 className="Movies-Text" > <a className="Titiles-Name">BoxOffice: </a><a className="Movies-SubText">{info.BoxOffice}</a> </h3>

              <h3 className="Movies-Text" > <a className="Titiles-Name">Country: </a> {info.Country}</h3>

              <h3 className="Movies-Text" > <a className="Titiles-Name">Runtime: </a> {info.Runtime}</h3>

              <h3 className="Movies-Text" > <a className="Titiles-Name">Language: </a> {info.Language}</h3>

              <h3 className="Movies-Text" > <a className="Titiles-Name">DVD: </a> {info. DVD }</h3>

              <h3 className="Movies-Text" > <a className="Titiles-Name">Awards: </a> {info.Awards} 🏅</h3>

              <h3 className="Movies-Text" > <a className="Titiles-Name">Metascore: </a> {info.Metascore}</h3>

              <h3 className="Movies-Text" > <a className="Titiles-Name">Type: </a> {info.Type}</h3>
              
            </div>
      
        </div>
    )
}

export {MoviesDetails}