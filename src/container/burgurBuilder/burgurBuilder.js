import React, { Component } from 'react';
import Aux from '../../hoc/aux';

import Burgur from '../../component/burgur/burgur'
import Buildcontrols from '../../component/burgur/buildcontrols/buildcontrols'

class Burgurbuilder extends Component{
    state={
        ingredient:{
            cheese:0,
            salad:0,
            bacon:0,
            meat:0
        }
    }

    handlerAddIngredient = (type) =>{
    const currentIngredient = this.state.ingredient[type];
    if (currentIngredient>=0){
    const updatedType = currentIngredient + 1;
    const updateIngredient={
            ...this.state.ingredient
        };
        updateIngredient[type] = updatedType;
        this.setState({ingredient:updateIngredient});
    }
        //console.log(currentIngredient,updatedType )
    }

    handlerRemoveIngredient = (type) =>{
        const currentIngredient = this.state.ingredient[type];
        if (currentIngredient>0){
        const updatedType = currentIngredient - 1;

        const updateIngredient={
                ...this.state.ingredient
            };
            updateIngredient[type] = updatedType;
            this.setState({ingredient:updateIngredient});
        }
            //console.log(currentIngredient,updatedType )
        }
    render(){
        return(
            <Aux>
            <Burgur ingredient ={this.state.ingredient} />
            <Buildcontrols added={this.handlerAddIngredient} removed ={this.handlerRemoveIngredient} />
            </Aux>
        );
    }
}

export default Burgurbuilder