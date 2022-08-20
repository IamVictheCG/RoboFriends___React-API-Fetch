import React, { useEffect } from 'react'
import { useState } from 'react';
// import { Component } from 'react'

const ErrorHanddler2 = () => {
    const [errorhanddle, setErrorHandle] = useState({error: false});
    
    useEffect((err, info) => {
        // console.log(err.message)
        // console.log(info)
        setErrorHandle({error: true})
    },[])


    // if(errorhanddle) {
    //     const newErr = (e) => {
    //        let newErr1 = <h2 style={color}>Something has gone wrong</h2>
    //        setErrorHandle(true, newErr1)
            
    //     }
    // }
  return (
    <div>
      {errorhanddle && <h2 style={color}>Something has gone wrong</h2>}
    </div>
  )

}


const color = {
   color: "red"
}


export default ErrorHanddler2
