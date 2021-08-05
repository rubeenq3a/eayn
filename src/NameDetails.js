import React, { useRef } from "react";
import { useState } from "react";

// Changing from Class Component to Function Component


    
function NameDetails(props) {

    const [names, setNames] = useState([]);
    const [buttonState, setButtonState] = useState(true)
    const nameRef = useRef();

    function getNameDetails() {
        fetch('https://api.nationalize.io?name='+nameRef.current.value)
          .then(res => res.json())
          .then((json) => setNames(json.country));
      }


    const callsetButtonState = (e) => 
    {
        if (e.target.value.length >= 3)
        {
            setButtonState(false)
        }
        else
        {
            setButtonState(true)
        }

    }

    const imgStyle = {
        position: 'relative' ,
        top: '5px'
    }

    return(
        <>
            <input data-testid="nameInput" type="text" placeholder="Insert your name here" onChange={callsetButtonState} ref={nameRef}></input>
            <button data-testid="getInfoButton" disabled={buttonState} onClick={getNameDetails}>I want to know everything about my Name</button>
            <ul>
                {names.map((item) => {
                    const country = 'https://www.countryflags.io/'+item.country_id+'/shiny/64.png'
                    const roundedProb = Number((item.probability*100).toFixed(2));
                    return <li>
                        There are %{roundedProb} of chances that your name comes from {item.country_id}
                        <img src={country} alt="Flag" width="25" height="25" style={imgStyle}></img>
                        </li>})}
            </ul>
        </>    
        )
}

export default NameDetails;



/* class NameDetails extends React.Component {
    constructor(props){
        super();
        this.nameRef = React.createRef();
        this.state = {
            names : [],
            disabled : true
        }

    this.getNameDetails = this.getNameDetails.bind(this);    

    }

    enableButton = (e) => {
        if(e.target.value.length >= 3){
            this.setState({disabled : false})
        }
        else
        {
            this.setState({disabled : true})
        }
    }
    

    getNameDetails() {
        fetch('https://api.nationalize.io?name='+this.nameRef.current.value)
          .then(res => res.json())
          .then(json => this.setState({ names: json.country }));
      }
    
    

    render(){
        const imgStyle = {
            position: 'relative' ,
            top: '5px'
        }

        const { names } = this.state
        return(
            <>
            <input type='text' placeholder='Insert your Name here' ref={this.nameRef} onChange={this.enableButton}></input>
            <button onClick={this.getNameDetails} disabled={this.state.disabled}>I want to know everything about my Name</button>
            <ul>
                {names.map((item) => {
                    const country = 'https://www.countryflags.io/'+item.country_id+'/shiny/64.png'
                    const roundedProb = Number((item.probability*100).toFixed(2));
                    console.log(country);
                    //'https://www.countryflags.io/'+{item.country_id}+'/shiny/64.png'
                    return <li>
                        There are %{roundedProb} of chances that your name comes from {item.country_id}
                        <img src={country} alt="Flag" width="25" height="25" style={imgStyle}></img>
                        </li>
                })}
            </ul>
            </>
        
        )
    }
}

export default NameDetails; */