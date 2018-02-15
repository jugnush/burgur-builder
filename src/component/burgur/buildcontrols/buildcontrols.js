import React from 'react';
import Buildcontrol from './buildcontrol/buildcontrol'

const control = [
    {label:'Meat', type:'meat'},
    {label:'cheese', type:'cheese'},
    {label:'salad', type:'salad'},
    {label:'bacon', type:'bacon'}
];


const buildcontrols = (props)=>{
    return (
        <div>
           
              { control.map((i)=>{
    return <Buildcontrol  
    key={i} 
    label={i.label}
    addt={()=>props.added(i.type)}
    removtt={()=>props.removed(i.type)}
    
    />
})}
          
        </div>
    );
}

export default buildcontrols