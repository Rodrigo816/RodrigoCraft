/* 
 * ServerEvents.recipes() is a function that accepts another function,
 * called the "callback", as a parameter. The callback gets run when the 
 * server is working on recipes, and then we can make our own changes.
 * When the callback runs, it is also known as the event "firing". 
*/

ServerEvents.recipes(event => { //listen for the "recipes" server event.
    // You can replace `event` with any name you like, as 
    // long as you change it inside the callback too!
    
    // This part, inside the curly braces, is the callback.
    // You can modify as many recipes as you like in here,
    // without needing to use ServerEvents.recipes() again.
    ///// ADD ////    

    ///// MODIFY ////

    ///// REMOVE ////
    // Create
    event.remove({ id: 'create:crafting/kinetics/belt_connector' })
    event.remove({ id: 'create:crafting/kinetics/mechanical_press' })
    event.remove({ id: 'create:crafting/kinetics/empty_blaze_burner' })

    event.remove({ id: 'create_dd:crafting/gearbox_from_vertical_gearbox' })
    event.remove({ id: 'create_dd:crafting/gearbox' })

    event.remove({ id: 'create_dd:crafting/vertical_gearbox_from_gearbox' })
    event.remove({ id: 'create_dd:crafting/vertical_gearbox' })
    event.remove({ id: 'create_dd:crafting/adj_chain_gearshift' })
    



    //Twilight Forest
    event.remove({id:'twilightforest:uncrafting_table'})

    event.remove({ id: 'ad_astra:hammering/iron_plate' })
  })