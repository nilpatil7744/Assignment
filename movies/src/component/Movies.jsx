import React, {useState,useEffect}from "react"
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import "../component/Styles/Movies.css"
import axios from "axios"
import { Link, Router } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function Movies(){

  const [query,setQuery] = useState("")

  const[data,setData] = useState([])

  const handleAdd = ()=>{

    axios.get(`http://www.omdbapi.com/?type=movie&apikey=a1b5f9ec&&s=${query}`)
    .then(function (response) {
      // Request succesful storting data in state
      setData(response.data.Search)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
   
  }

  

  return (
    <div>
      <div className="Navbar-head">
        OmdbSearch Client
      </div><br/>
      
      <div>

          <TextField id="standard-basic" label="Search By Movies" onChange={(e)=>setQuery(e.target.value)} />

          <Button onClick={handleAdd}>Search</Button>

      </div>

      <div className="Movies-HeadContainer" >

        {data.map((item)=>

        <div style={{width:"40%",float:"left"}} >

        <Link  to={`/movies/${item.imdbID}`}>
           <div  >
              <img  src={item.Poster} alt=""/>

              <div style={{textAlign:"left",width:"70%",marginLeft:"25%"}}>

                  <h3>Title: {item.Title}</h3>
                  <h2>Type: {item.Type}</h2>
                  <h2>Year: {item.Year}</h2>

              </div>

            </div>
        </Link>
      
      </div>
      )}
 
        </div>
   
    </div>

  )

}

export default Movies

