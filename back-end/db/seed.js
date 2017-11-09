const DB = require('../models');

const seedBeers1 = [
	{
		photoUrl: 'http://www.iconarchive.com/download/i97927/flat-icons.com/flat/Beer.ico', 
		name: 'Bears Breath',
		style: 'Stout',
		abv: '7.2',
		ibus: '24',
		description: 'Hop Back Salamanzar Chill Haze Chill Haze Crystal malt, Racking. Stick, Oxidized Kilderkin Biere de garde. Nebuchadnezzar Mead Flute Double Magnum Amber, ” Draugh Wort Wort Chiller Mug.” Pub glass Bottle Conditioning Oxidized Ethanol or Ethyl Alcohol. Brew Kettle Grist Ale Aroma Hops Bottom-fermenting Yeast Ale Noble Hops Aroma Hops Brewhouse, Hydrometer.',
		recipe: `
			For 5 gallons (19 L)\n
			4.5 lb. (2 kg) German or other light or amber malt extract syrup\n
			3.3. lb. (1.5 kg) plain dark malt extract syrup\n
			1 lb. (450 g) black malt\n
			1.5 oz. (42 g) Northern Brewer hops (boiling), 13 HBU\n
			1 oz. (28 g) Tettnang or Santiam hops (aroma)\n
			0.25 tsp. (1 g) powdered Irish moss\n
			American Ale yeast or White Labs Cry Havoc yeast\n
			0.75 cup (175 mL) corn sugar or 1.25 cup (300 mL) dried malt extract (for bottling)'`
	},
	{
		photoUrl: 'http://www.iconarchive.com/download/i97927/flat-icons.com/flat/Beer.ico', 
		name: 'Dancing Unicorn',
		style: 'Gose',
		abv: '4.5',
		ibus: '20',
		description: 'Hop Back Salamanzar Chill Haze Chill Haze Crystal malt, Racking. Stick, Oxidized Kilderkin Biere de garde. Nebuchadnezzar Mead Flute Double Magnum Amber, ” Draugh Wort Wort Chiller Mug.” Pub glass Bottle Conditioning Oxidized Ethanol or Ethyl Alcohol. Brew Kettle Grist Ale Aroma Hops Bottom-fermenting Yeast Ale Noble Hops Aroma Hops Brewhouse, Hydrometer.',
		recipe: `
			For 5 gallons (19 L)\n
			4.5 lb. (2 kg) German or other light or amber malt extract syrup\n
			3.3. lb. (1.5 kg) plain dark malt extract syrup\n
			1 lb. (450 g) black malt\n
			1.5 oz. (42 g) Northern Brewer hops (boiling), 13 HBU\n
			1 oz. (28 g) Tettnang or Santiam hops (aroma)\n
			0.25 tsp. (1 g) powdered Irish moss\n
			American Ale yeast or White Labs Cry Havoc yeast\n
			0.75 cup (175 mL) corn sugar or 1.25 cup (300 mL) dried malt extract (for bottling)'`
	},
	{
		photoUrl: 'http://www.iconarchive.com/download/i97927/flat-icons.com/flat/Beer.ico', 
		name: 'Bong Water',
		style: 'IPA',
		abv: '6.2',
		ibus: '99',
		description: 'Hop Back Salamanzar Chill Haze Chill Haze Crystal malt, Racking. Stick, Oxidized Kilderkin Biere de garde. Nebuchadnezzar Mead Flute Double Magnum Amber, ” Draugh Wort Wort Chiller Mug.” Pub glass Bottle Conditioning Oxidized Ethanol or Ethyl Alcohol. Brew Kettle Grist Ale Aroma Hops Bottom-fermenting Yeast Ale Noble Hops Aroma Hops Brewhouse, Hydrometer.',
		recipe: `
			For 5 gallons (19 L)\n
			4.5 lb. (2 kg) German or other light or amber malt extract syrup\n
			3.3. lb. (1.5 kg) plain dark malt extract syrup\n
			1 lb. (450 g) black malt\n
			1.5 oz. (42 g) Northern Brewer hops (boiling), 13 HBU\n
			1 oz. (28 g) Tettnang or Santiam hops (aroma)\n
			0.25 tsp. (1 g) powdered Irish moss\n
			American Ale yeast or White Labs Cry Havoc yeast\n
			0.75 cup (175 mL) corn sugar or 1.25 cup (300 mL) dried malt extract (for bottling)'`
	}
];

const seedBeers2 = [
	{
		photoUrl: 'http://www.iconarchive.com/download/i97927/flat-icons.com/flat/Beer.ico', 
		name: 'Mowhawk Black IPA',
		style: 'IPA',
		abv: '7.2',
		ibus: '92',
		description: 'Hop Back Salamanzar Chill Haze Chill Haze Crystal malt, Racking. Stick, Oxidized Kilderkin Biere de garde. Nebuchadnezzar Mead Flute Double Magnum Amber, ” Draugh Wort Wort Chiller Mug.” Pub glass Bottle Conditioning Oxidized Ethanol or Ethyl Alcohol. Brew Kettle Grist Ale Aroma Hops Bottom-fermenting Yeast Ale Noble Hops Aroma Hops Brewhouse, Hydrometer.',
		recipe: `
			For 5 gallons (19 L)\n
			4.5 lb. (2 kg) German or other light or amber malt extract syrup\n
			3.3. lb. (1.5 kg) plain dark malt extract syrup\n
			1 lb. (450 g) black malt\n
			1.5 oz. (42 g) Northern Brewer hops (boiling), 13 HBU\n
			1 oz. (28 g) Tettnang or Santiam hops (aroma)\n
			0.25 tsp. (1 g) powdered Irish moss\n
			American Ale yeast or White Labs Cry Havoc yeast\n
			0.75 cup (175 mL) corn sugar or 1.25 cup (300 mL) dried malt extract (for bottling)'`
	},
	{
		photoUrl: 'http://www.iconarchive.com/download/i97927/flat-icons.com/flat/Beer.ico', 
		name: 'Budwisest',
		style: 'Lager',
		abv: '4.5',
		ibus: '20',
		description: 'Hop Back Salamanzar Chill Haze Chill Haze Crystal malt, Racking. Stick, Oxidized Kilderkin Biere de garde. Nebuchadnezzar Mead Flute Double Magnum Amber, ” Draugh Wort Wort Chiller Mug.” Pub glass Bottle Conditioning Oxidized Ethanol or Ethyl Alcohol. Brew Kettle Grist Ale Aroma Hops Bottom-fermenting Yeast Ale Noble Hops Aroma Hops Brewhouse, Hydrometer.',
		recipe: `
			For 5 gallons (19 L)\n
			4.5 lb. (2 kg) German or other light or amber malt extract syrup\n
			3.3. lb. (1.5 kg) plain dark malt extract syrup\n
			1 lb. (450 g) black malt\n
			1.5 oz. (42 g) Northern Brewer hops (boiling), 13 HBU\n
			1 oz. (28 g) Tettnang or Santiam hops (aroma)\n
			0.25 tsp. (1 g) powdered Irish moss\n
			American Ale yeast or White Labs Cry Havoc yeast\n
			0.75 cup (175 mL) corn sugar or 1.25 cup (300 mL) dried malt extract (for bottling)'`
	},
	{
		photoUrl: 'http://www.iconarchive.com/download/i97927/flat-icons.com/flat/Beer.ico', 
		name: 'Leftover Tacos',
		style: 'Lager',
		abv: '6.2',
		ibus: '14',
		description: 'Hop Back Salamanzar Chill Haze Chill Haze Crystal malt, Racking. Stick, Oxidized Kilderkin Biere de garde. Nebuchadnezzar Mead Flute Double Magnum Amber, ” Draugh Wort Wort Chiller Mug.” Pub glass Bottle Conditioning Oxidized Ethanol or Ethyl Alcohol. Brew Kettle Grist Ale Aroma Hops Bottom-fermenting Yeast Ale Noble Hops Aroma Hops Brewhouse, Hydrometer.',
		recipe: `
			For 5 gallons (19 L)\n
			4.5 lb. (2 kg) German or other light or amber malt extract syrup\n
			3.3. lb. (1.5 kg) plain dark malt extract syrup\n
			1 lb. (450 g) black malt\n
			1.5 oz. (42 g) Northern Brewer hops (boiling), 13 HBU\n
			1 oz. (28 g) Tettnang or Santiam hops (aroma)\n
			0.25 tsp. (1 g) powdered Irish moss\n
			American Ale yeast or White Labs Cry Havoc yeast\n
			0.75 cup (175 mL) corn sugar or 1.25 cup (300 mL) dried malt extract (for bottling)'`
	}
];


