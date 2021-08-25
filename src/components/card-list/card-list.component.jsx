import React from 'react';
import './card-list.style.css'
import { Card } from '../card/card.component'

export const CardList = ({monister}) => (

<div className="card-list"> 
{  monister.map((m)=>(   
      <Card key={m.id} monister ={m}/>
    )) }
  
</div> 

);