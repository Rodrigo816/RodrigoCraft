ServerEvents.recipes(event => {

    event.recipes.createSequencedAssembly([
        Item.of('create_dd:inductive_mechanism').withChance(50.0),
    ], 'create_dd:andesite_sheet', [
		event.recipes.create.deploying('create_dd:incomplete_inductive_mechanism', ['create_dd:incomplete_inductive_mechanism', '#minecraft:wooden_slabs']),
        event.recipes.create.deploying('create_dd:incomplete_inductive_mechanism', ['create_dd:incomplete_inductive_mechanism', 'create:cogwheel']),
        event.recipes.create.deploying('create_dd:incomplete_inductive_mechanism', ['create_dd:incomplete_inductive_mechanism', 'create:cogwheel']),
        event.recipes.create.deploying('create_dd:incomplete_inductive_mechanism', ['create_dd:incomplete_inductive_mechanism', 'createaddition:biomass_pellet'])
    ]).transitionalItem('create_dd:incomplete_inductive_mechanism').loops(0).id('create:sequenced_assembly/inductive_mechanism')

	/*e.recipes.create.sequenced_assembly([
		Item.of('create:precision_mechanism').withChance(130.0), // this is the item that will appear in JEI as the result
		Item.of('create:golden_sheet').withChance(8.0), // the rest of these items will be part of the scrap
		Item.of('create:andesite_alloy').withChance(8.0),
		Item.of('create:cogwheel').withChance(5.0),
		Item.of('minecraft:diamond').withChance(2.0),
		Item.of('create:crushed_gold_ore').withChance(2.0),
		Item.of('2x gold_nugget').withChance(2.0),
		'iron_ingot',
		'clock'
	], 'create:golden_sheet', [ // 'create:golden_sheet' is the input
		// the transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
		e.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel']),
		// like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		e.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:large_cogwheel']),
		e.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:iron_nugget'])
	]).transitionalItem('create:incomplete_precision_mechanism').loops(2) // set the transitional item and the number of loops

	// for this code to work, kubejs:incomplete_spore_blossom needs to be added to the game
	let inter = 'kubejs:mystic_coal_block' // making a variable to store the transitional item makes the code more readable
	e.recipes.create.sequenced_assembly([
		Item.of('spore_blossom').withChance(16.0), // this is the item that will appear in JEI as the result
		Item.of('flowering_azalea_leaves').withChance(16.0), // the rest of these items will be part of the scrap
		Item.of('azalea_leaves').withChance(2.0),
		'oak_leaves',
		'spruce_leaves',
		'birch_leaves',
		'jungle_leaves',
		'acacia_leaves',
		'dark_oak_leaves'
	], 'flowering_azalea_leaves', [ // 'flowering_azalea_leaves' is the input
		// the transitional item is a variable, that is 'kubejs:incomplete_spore_blossom' and is used during the intermediate stages of the assembly
		e.recipes.createPressing(inter, inter),
		// like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		e.recipes.createDeploying(inter, [inter, 'minecraft:hanging_roots']),
		e.recipes.createFilling(inter, [inter, Fluid.water(420)]),
		e.recipes.createDeploying(inter, [inter, 'minecraft:moss_carpet']),
		e.recipes.createCutting(inter, inter)
	]).transitionalItem(inter).loops(2) // set the transitional item and the number of loops

    e.recipes.createSequencedAssembly([ // start the recipe
        Item.of('6x create:large_cogwheel').withChance(32.0), // have this item be an output with a certain chance
        Item.of('create:brass_ingot').withChance(2.0), // have this item be an output with a certain chance
        'minecraft:andesite', // have this item be a guaranteed output
        'create:cogwheel', // have this item be a guaranteed output
        'minecraft:stick', // have this item be a guaranteed output
        'minecraft:iron_nugget' // have this item be a guaranteed output
        ], 'create:brass_ingot', [ // 'create:brass_ingot' is the input.
        // the transitional item set by "transitionalItem('create:incomplete_large_cogwheel')" is the item that will be used during the recipe as the item that the input is using to transition to the output.
        e.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', '#minecraft:planks']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
        e.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', '#minecraft:wooden_buttons']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
        e.recipes.createCutting('create:incomplete_large_cogwheel', 'create:incomplete_large_cogwheel').processingTime(50) // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
    ]).transitionalItem('create:incomplete_large_cogwheel').loops(6) // set the transitional item and the loops (amount of repetitions)*/
})