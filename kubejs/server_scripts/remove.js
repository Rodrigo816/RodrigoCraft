ServerEvents.recipes(event => {
    //Remove by recipe ID
    [
       // 'minecraft:iron_ingot_from_smelting_iron_ore'
        
        

    ].forEach((recipeID) => event.remove({id: recipeID}));

    //Remove all recipes an item is related to. For example putting 'minecraft:bonemeal' here would remove the recipe for bone blocks as well.
    [
        //'minecraft:diamond'

    ].forEach((ingredientID) => event.remove({input: ingredientID}));
    
    //Remove by item ID
    [
        //'minecraft:gold_ingot'

    ].forEach((itemID) => event.remove({output: itemID}));

})