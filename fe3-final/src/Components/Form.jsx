import React from "react";
import {useState, useContext} from 'react';
import Message from "./Message";
import {ContextGlobal} from '../Components/utils/global.context.jsx';

const Form = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const {themeState} = useContext(ContextGlobal);
  
  const onChangeName = (e) => setName(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);
  
  const validateName = (name) => {
    const withoutSpaces = name.trim();
    
    if(withoutSpaces.length > 5) {
      return true;
    }
    else {
      return false;
    }
  }
  
  const validateEmail = (email) => {
    
    if(!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      return false;
    }
    else {
      return true;
    }
  }
  
  const onSubmitForm = (e) => {
    e.preventDefault();
    
    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);
    
    if(!isNameValid || !isEmailValid) {
      setMessage("Por favor, verifique su información nuevamente");
    }
    else {
      setMessage(`Gracias ${name}, te contactaremos cuanto antes vía mail`);
      console.log({name, email});
      setName("");
      setEmail("");
    }
  }
  
  return (
    <div>
      <form id="form" onSubmit={onSubmitForm}>
        <input className={themeState ? "input-dark" : undefined} type="text" placeholder="Name" value={name} onChange={onChangeName}/>
        <input className={themeState ? "input-dark" : undefined} type="email" placeholder="Email" value={email} onChange={onChangeEmail}/>
        <button type="submit" className={themeState ? "nav-button-dark a-dark" : "nav-button"}>Submit</button>
        {message ? <Message message={message}/> : null}
      </form>
    </div>
  );
};

export default Form;