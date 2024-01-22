/* 
 * ServerEvents.recipes() is a function that accepts another function,
 * called the "callback", as a parameter. The callback gets run when the 
 * server is working on recipes, and then we can make our own changes.
 * When the callback runs, it is also known as the event "firing". 
*/

ServerEvents.recipes(event => { //listen for the "recipes" server event.

  event.recipes.create.mixing(Fluid.of('create:builders_tea',500),[
		Fluid.of('milk',250),
 	 	Fluid.of('water',250),
		'#leaves'
	]).heated()

  event.recipes.create.mixing(Fluid.of('ad_astra:fuel',500),[
		Fluid.of('tfmg:gasoline',250),
 	  'twilightforest:ironwood_ingot'
	]).heated()



    // You can replace `event` with any name you like, as 
    // long as you change it inside the callback too!
    
    // This part, inside the curly braces, is the callback.
    // You can modify as many recipes as you like in here,
    // without needing to use ServerEvents.recipes() again.
    ///// ADD ////    
    // Define the result ItemStack


    // Define the crafting recipe
    /*event.shaped(resultItem, [
        'RRR',
        'R R',
        'RRR'
    ], {
        R: 'create_dd:industrial_iron_sheet'
    }); */
    ///// MODIFY ////

    ///// REMOVE ////
    // Create
    //event.remove({ id: 'create:crafting/kinetics/belt_connector' })
    //event.remove({ id: 'create:crafting/kinetics/mechanical_press' })
    //event.remove({ id: 'create:crafting/kinetics/empty_blaze_burner' })
    event.remove({ id: 'minecraft:andesite' })

    event.remove({ id: 'create:crafting/materials/andesite_alloy_from_zinc' })

    // Create DD
    event.remove({ id: 'create_dd:industrial_iron/mechanical_drill' })
    event.remove({ id: 'create_dd:industrial_iron/chute' })
    event.remove({ id: 'create_dd:industrial_iron/mechanical_press' })
    event.remove({ id: 'create_dd:industrial_iron/andesite_alloy' })
    event.remove({ id: 'create_dd:sequenced_assembly/logistics_mechanism' })
    event.remove({ id: 'create_dd:sequenced_assembly/inductive_mechanism' })
    event.remove({ id: 'create_dd:crafting/gearbox_from_vertical_gearbox' })
    event.remove({ id: 'create_dd:crafting/gearbox_from_vertical_gearbox' })
    event.remove({ id: 'create_dd:crafting/gearbox' })
    event.remove({ id: 'create_dd:crafting/vertical_gearbox_from_gearbox' })
    event.remove({ id: 'create_dd:crafting/vertical_gearbox' })
    event.remove({ id: 'create_dd:crafting/adj_chain_gearshift' })
    //event.remove({ id: 'create_dd:industrial_iron/empty_blaze_burner' })
    



    //Twilight Forest
    event.remove({id:'twilightforest:uncrafting_table'})

    //Ad Astra
    event.remove({ id: 'ad_astra:hammering/iron_plate' })
    event.remove({ output: "ad_astra:fuel_refinery" })
    event.remove({ output: "ad_astra:coal_generator" })
    event.remove({ output: "ad_astra:desh_fluid_pipe" })
    event.remove({ output: "ad_astra:ostrum_fluid_pipe" })
    event.remove({ type: "ad_astra:fuel_conversion" })

    //Hostile Netowrks
    event.remove({ id: "hostilenetworks:living_matter/overworldian/carrot" })
    event.remove({ id: "hostilenetworks:living_matter/overworldian/potato" })
    event.remove({ id: "hostilenetworks:living_matter/overworldian/iron_ingot" })
    event.remove({ id: "hostilenetworks:living_matter/overworld_to_nether" })
    //event.remove({ id: "hostilenetworks:living_matter/hellish/ghast_tear" })
    event.remove({ id: "hostilenetworks:living_matter/hellish/blaze_rod" })
    event.remove({ id: "hostilenetworks:living_matter/hellish/blaze_powder" })
    event.remove({ id: "hostilenetworks:living_matter/hellish/gold_ingot" })
    event.remove({ id: "hostilenetworks:living_matter/nether_to_ender" })
    event.remove({ id: "hostilenetworks:living_matter/extraterrestrial/nether_star" })

    /*

{
  "type": "ad_astra:fuel_conversion",
  "input": "#ad_astra_platform:oil",
  "output": "ad_astra:fuel",
  "conversion_ratio": 1.0
}*/


  })


/* EXEMPLE FOR RECIPES OF NASA WORKBENCH
ServerEvents.recipes(event => {
    event.recipes.ad_astra.nasa_workbench({
    "output": "minecraft:golden_apple",
    ingredients: [
      { "ingredient": { "item": "ad_astra:rocket_nose_cone" } },
      { "ingredient": { "tag": "forge:ingots/gold" } },
      { "ingredient": { "tag": "forge:ingots/gold" } },
      { "ingredient": { "tag": "forge:ingots/gold" } },
      { "ingredient": { "tag": "forge:ingots/gold" } },
      { "ingredient": { "tag": "forge:ingots/gold" } },
      { "ingredient": { "tag": "forge:ingots/gold" } },
      { "ingredient": { "item": "ad_astra:rocket_fin" } },
      { "ingredient": { "tag": "forge:ingots/gold" } },
      { "ingredient": { "tag": "forge:ingots/gold" } },
      { "ingredient": { "item": "ad_astra:rocket_fin" } },
      { "ingredient": { "item": "ad_astra:rocket_fin" } },
      { "ingredient": { "item": "minecraft:apple" } },
      { "ingredient": { "item": "ad_astra:rocket_fin" } }
    ]
  })
})

*/

