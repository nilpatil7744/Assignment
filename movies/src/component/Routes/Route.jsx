import React from "react"
import { Route } from "react-router"
import Movies from "../Movies"
import { MoviesDetails } from "../MoviesDetails"

const Router = ()=>{

    return (

    <div>
        <Route exact path="/">
          <Movies />
        </Route>

        <Route exact path="/movies/:id">
            <MoviesDetails/>
        </Route>
    </div>
  
   )
        
}

export {Router}