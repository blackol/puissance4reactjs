import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "../Inscription/Inscription.css"

export default function Inscription() {
   
  return (
    <div className='Inscription'>
        <div className='Inscription-container'>
            <div className='content'>
                <div className='title'>
                    <h1>Inscription</h1>
                </div>
            </div>
            <div className='contenta'>
                    
            
                <div className='form'>
                    <div className='form-coter'></div>
                    <div className='form-center'>
                        <input type="Pseudo" className="form-control" id="exampleInputEmail1" aria-describedby="Pseudo" placeholder="Pseudo"/>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    <div className='form-coter'></div>
                </div>
                        
                    
            </div>
           <div className='content'></div>
        </div>
       
    </div>
  )
}
