// Blocks
StartupEvents.registry("block", (event) => {
    event.create("mystic_coal_block")
    .displayName("Mystic Coal Block §bMagical") 
   // .soundType("coal") 
    .hardness(1.0) 
    .resistance(1.0)
    .requiresTool(true) 
    .tagBlock("mineable/pickaxe") 
    .tagBlock('minecraft:needs_diamond_tool')
   // .rarity('Rare')
})


// Items
StartupEvents.registry('item', event => {
	event.create('skill_add_point')
        .maxStackSize(64)
        .displayName("+1 Skill Point")
        .tooltip("Adds one skill point to your talent tree on use")
        .texture("kubejs:item/skill_point")
        //.rarity('Epic')
    event.create('skill_reset')
        .maxStackSize(64)
        .displayName("Talent Tree Reset")
        .tooltip("Resets all your skill points")
        .texture("kubejs:item/reset_points")
       // .rarity('Epic')
    
   /*     .food(food => {
            food
            .hunger(6)
    		.saturation(6)//This value does not directly translate to saturation points gained
      		.fastToEat()//Like dried kelp
      		.eaten(ctx => {//runs code upon consumption
                console.log("PORRA-------->",ctx)
        		ctx.player.tell(Text.gold('Yummy Yummy!'))
                ctx.server.runCommandSilent(`/puffish_skills points add ${ctx.player.name} main 1`);
                event.server.runCommandSilent(`/puffish_skills points add ${ctx.player.name} main 1`);
                //event.player.give('minecraft:air'); // Consumes the item
        })
            
	})*/
  
})

