BlockEvents.rightClicked( event => {
    // Check if the right-clicked block is dirt
    if(event.block.id === 'minecraft:dirt' || event.item=='kubejs:skill_add_point') {
        // Run the skill point addition command for the player who clicked the block
        event.server.runCommandSilent(`/puffish_skills points add ${event.player.name} main 1`);
        event.getServer.runCommandSilent(`/puffish_skills points add ${event.player.name} main 1`);
        
        // If the player is holding an item, reduce its count by 1
        if(event.item) {
            event.item.setCount(event.item.getCount() - 1);
        }
        
        // Replace the dirt block with air
        event.block.set('minecraft:air');
        
        // Output a message to the server console
        console.info('Skill point added!');
        
        // Send a message to the player
        event.player.tell(Text.gold('Skills updated!'));
        
        // Prevent the default right-click action
        event.cancel();
    }
})

ItemEvents.rightClicked( event => {
    // Check if the right-clicked block is dirt
    if(event.item=='kubejs:skill_add_point') {
        // Run the skill point addition command for the player who clicked the block
        event.server.runCommandSilent(`/puffish_skills points add ${event.player.name} main 1`);
        event.getServer.runCommandSilent(`/puffish_skills points add ${event.player.name} main 1`);
        
        // If the player is holding an item, reduce its count by 1
        if(event.item) {
            event.item.setCount(event.item.getCount() - 1);
        }
        
        // Replace the dirt block with air
        event.block.set('minecraft:air');
        
        // Output a message to the server console
        console.info('Skill point added!');
        
        // Send a message to the player
        event.player.tell(Text.gold('Skills updated!'));
        
        // Prevent the default right-click action
        event.cancel();
    }
})

