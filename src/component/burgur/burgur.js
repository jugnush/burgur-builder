import React from 'react';
import Classes from './Burgur.css';

import Burguringredients from './burguringredients/burguringredients'

const Burgur = (props)=>{
    //transerformed parent state to array to use here
    console.log('hii');
    let transesformedIngredent = Object.keys(props.ingredient).map(inK => {
        //ink is partucular ingredents like meat
        console.log(inK);
        //debugger
        //this will coverted numbers of array, and each array have inside number of values according to thir keys
            return [...Array(props.ingredient[inK])].map((_, i) => {
                //console.log(inK);
               return <Burguringredients key={inK + i} type={inK}/>;
            });
        }).reduce((arr, el)=>{
            return arr.concat(el)
        },[]);

        if (transesformedIngredent.length ===0){
            transesformedIngredent = <p>Please select ingredents</p>
        }
        console.log(transesformedIngredent.length);

        

    return(
        <div className={Classes.Burger}>
            <Burguringredients type="bread-top"/>
            {transesformedIngredent}
           <Burguringredients type="bread-bottom"/>
        </div>
    );

}
export default Burgur;