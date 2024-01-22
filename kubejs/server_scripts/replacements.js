ServerEvents.recipes(event => {
  event.replaceInput(
    { input: 'minecraft:stick' }, // Arg 1: the filter
    'minecraft:stick',            // Arg 2: the item to replace
    '#minecraft:saplings'         // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  )

  event.replaceInput(
    { input: 'toms_storage:ts.inventory_connector' }, // Arg 1: the filter
    'minecraft:diamond',            // Arg 2: the item to replace
    'minecraft:stick'         // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  )
})