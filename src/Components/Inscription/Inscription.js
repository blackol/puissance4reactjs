import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "../Inscription/Inscription.css";

export default function Inscription() {
    //on déclare les variables
    const [pseudo,setPseudo] = useState("");
    const [identifiant,setidentifiant] = useState("");
    const [erreur,setErreur] = useState(false);
    const [message,setMessage] = useState("");


// on récupere le pseudo saisi par l'utilisateur
    function inputHandler(e) {
        setPseudo(e.target.value);
    }
    // on envoie le pseudo saisi par l'utilisateur au serveur
    async function register() {
        const response = await fetch(`https://trankillprojets.fr/P4/?inscription&pseudo=${pseudo}`);
        const data = await response.json();
        console.log(data);
        if(data.etat ==="OK"){
            setidentifiant(data.identifiant);
            setErreur(false);
            console.log(data.identifiant);
        }
        else{
            setErreur(true);
            // le serveur répond KO car le pseudo est déjà affecté
            setMessage("Pseudo deja utilisé");
            setPseudo("Erreur");
        }
    }

   
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
                        <input type="Pseudo" className="form-control" id="exampleInputEmail1" aria-describedby="Pseudo" placeholder="Pseudo" onChange={inputHandler} value={pseudo}/>
                        <button type="submit" className="btn btn-primary" onClick={register}>Submit</button>
                        <p>{message}</p>
                        <p>Votre identifiant est :  {identifiant} </p>
                    
                    </div>
                    <div className='form-coter'></div>
                    
                </div>
                        
                    
            </div>
           <div className='content'></div>
        </div>
       
    </div>
  )
}
