import React, {useEffect, useState} from 'react';
import Groceries from './Groceries';

function GroceriesContainer({ markets, ingredients }) {

    console.log("MARKETS IN GROCERIES CONTAINER", markets)
    console.log("INGREDIENTS IN GROCIERS CONTAINERS", ingredients)
    return (
        <div className="market-container">
            {markets.map((market) => 
                <Groceries 
                    market={market} 
                    ingredients={ingredients.filter(ingredient => ingredient.market_id === market.id)} 
                />
            )}    
        </div>   
    );
}

export default GroceriesContainer;
