const DB = require('../models').models;

const seedUser1 = {
	username: 'Downslope Brewing', 
	email: 'down@slope.co',
	firstName: 'Rick',
	lastName: 'Sanches',
	zipcode: '80211',
	photoUrl: 'https://members.nationalgeographic.com/static-media/images/css_images/nationalGeographic_default_avatar.jpg'
};

const seedUser2 = {
	username: 'Old Belgium', 
	email: 'oldb@aol.com',
	firstName: 'Mary',
	lastName: 'White',
	zipcode: '80211',
	photoUrl: 'https://members.nationalgeographic.com/static-media/images/css_images/nationalGeographic_default_avatar.jpg'
};

const seedUser3 = {
	username: 'Wes', 
	email: 'wes@wes.wes',
	firstName: 'Wes',
	lastName: 'Wes',
	zipcode: '80211',
	photoUrl: 'https://members.nationalgeographic.com/static-media/images/css_images/nationalGeographic_default_avatar.jpg'
};

const seedUser4 = {
	username: 'Pickle Rick', 
	email: 'rick@rick.rick',
	firstName: 'Rick',
	lastName: 'Sanchez',
	zipcode: '80211',
	photoUrl: 'http://iconshow.me/media/images/ui/ios7-icons/png/128/contact.png'
};

const seedUser5 = {
	username: 'Morty', 
	email: 'morty@morty.morty',
	firstName: 'Morty',
	lastName: 'Smith',
	zipcode: '80211',
	photoUrl: 'http://iconshow.me/media/images/ui/ios7-icons/png/128/contact.png'
};

const seedBeers1 = [
	{
		photoUrl: 'http://hopworksbeer.com/wp-content/uploads/2015/07/HUB_Site_Pint_STOUT.jpg', 
		name: 'Bears Breath',
		style: 'Stout',
		abv: '7.2',
		ibus: '24',
		description: 'Hop Back Salamanzar Chill Haze Chill Haze Crystal malt, Racking. Stick, Oxidized Kilderkin Biere de garde. Nebuchadnezzar Mead Flute Double Magnum Amber, ” Draugh Wort Wort Chiller Mug.” Pub glass Bottle Conditioning Oxidized Ethanol or Ethyl Alcohol. Brew Kettle Grist Ale Aroma Hops Bottom-fermenting Yeast Ale Noble Hops Aroma Hops Brewhouse, Hydrometer.',
		recipe: `For 5 gallons (19 L)\n4.5 lb. (2 kg) German or other light or amber malt extract syrup\n3.3. lb. (1.5 kg) plain dark malt extract syrup\n1 lb. (450 g) black malt\n1.5 oz. (42 g) Northern Brewer hops (boiling), 13 HBU\n1 oz. (28 g) Tettnang or Santiam hops (aroma)\n0.25 tsp. (1 g) powdered Irish moss\nAmerican Ale yeast or White Labs Cry Havoc yeast\n0.75 cup (175 mL) corn sugar or 1.25 cup (300 mL) dried malt extract (for bottling)`,
		userId: ''
	},
	{
		photoUrl: 'https://cdnimg.webstaurantstore.com/uploads/buying_guide/2017/2/berliner-weisse.jpg', 
		name: 'Dancing Unicorn',
		style: 'Gose',
		abv: '4.5',
		ibus: '20',
		description: 'Hop Back Salamanzar Chill Haze Chill Haze Crystal malt, Racking. Stick, Oxidized Kilderkin Biere de garde. Nebuchadnezzar Mead Flute Double Magnum Amber, ” Draugh Wort Wort Chiller Mug.” Pub glass Bottle Conditioning Oxidized Ethanol or Ethyl Alcohol. Brew Kettle Grist Ale Aroma Hops Bottom-fermenting Yeast Ale Noble Hops Aroma Hops Brewhouse, Hydrometer.',
		recipe: `For 5 gallons (19 L)\n4.5 lb. (2 kg) German or other light or amber malt extract syrup\n3.3. lb. (1.5 kg) plain dark malt extract syrup\n1 lb. (450 g) black malt\n1.5 oz. (42 g) Northern Brewer hops (boiling), 13 HBU\n1 oz. (28 g) Tettnang or Santiam hops (aroma)\n0.25 tsp. (1 g) powdered Irish moss\nAmerican Ale yeast or White Labs Cry Havoc yeast\n0.75 cup (175 mL) corn sugar or 1.25 cup (300 mL) dried malt extract (for bottling)`,
		userId: ''
	},
	{
		photoUrl: 'https://www.ritebrew.com/v/vspfiles/photos/851316-2.jpg', 
		name: 'Great Scott!',
		style: 'Scottish Ale',
		abv: '6.2',
		ibus: '14',
		description: 'Hop Back Salamanzar Chill Haze Chill Haze Crystal malt, Racking. Stick, Oxidized Kilderkin Biere de garde. Nebuchadnezzar Mead Flute Double Magnum Amber, ” Draugh Wort Wort Chiller Mug.” Pub glass Bottle Conditioning Oxidized Ethanol or Ethyl Alcohol. Brew Kettle Grist Ale Aroma Hops Bottom-fermenting Yeast Ale Noble Hops Aroma Hops Brewhouse, Hydrometer.',
		recipe: `For 5 gallons (19 L)\n4.5 lb. (2 kg) German or other light or amber malt extract syrup\n3.3. lb. (1.5 kg) plain dark malt extract syrup\n1 lb. (450 g) black malt\n1.5 oz. (42 g) Northern Brewer hops (boiling), 13 HBU\n1 oz. (28 g) Tettnang or Santiam hops (aroma)\n0.25 tsp. (1 g) powdered Irish moss\nAmerican Ale yeast or White Labs Cry Havoc yeast\n0.75 cup (175 mL) corn sugar or 1.25 cup (300 mL) dried malt extract (for bottling)`,
		userId: ''
	},
	{
		photoUrl: 'https://www.mrbeer.com/media/catalog/product/cache/2/thumbnail/9df78eab33525d08d6e5fb8d27136e95/b/e/beer-amber-pintulw_4.jpg', 
		name: 'Bong Water',
		style: 'American IPA',
		abv: '6.2',
		ibus: '99',
		description: 'Hop Back Salamanzar Chill Haze Chill Haze Crystal malt, Racking. Stick, Oxidized Kilderkin Biere de garde. Nebuchadnezzar Mead Flute Double Magnum Amber, ” Draugh Wort Wort Chiller Mug.” Pub glass Bottle Conditioning Oxidized Ethanol or Ethyl Alcohol. Brew Kettle Grist Ale Aroma Hops Bottom-fermenting Yeast Ale Noble Hops Aroma Hops Brewhouse, Hydrometer.',
		recipe: `For 5 gallons (19 L)\n4.5 lb. (2 kg) German or other light or amber malt extract syrup\n3.3. lb. (1.5 kg) plain dark malt extract syrup\n1 lb. (450 g) black malt\n1.5 oz. (42 g) Northern Brewer hops (boiling), 13 HBU\n1 oz. (28 g) Tettnang or Santiam hops (aroma)\n0.25 tsp. (1 g) powdered Irish moss\nAmerican Ale yeast or White Labs Cry Havoc yeast\n0.75 cup (175 mL) corn sugar or 1.25 cup (300 mL) dried malt extract (for bottling)`,
		userId: ''
	},
	{
		photoUrl: 'https://www.ritebrew.com/v/vspfiles/photos/851316-2.jpg', 
		name: 'The Big Bad Brown',
		style: 'Brown Ale',
		abv: '6.2',
		ibus: '99',
		description: 'Hop Back Salamanzar Chill Haze Chill Haze Crystal malt, Racking. Stick, Oxidized Kilderkin Biere de garde. Nebuchadnezzar Mead Flute Double Magnum Amber, ” Draugh Wort Wort Chiller Mug.” Pub glass Bottle Conditioning Oxidized Ethanol or Ethyl Alcohol. Brew Kettle Grist Ale Aroma Hops Bottom-fermenting Yeast Ale Noble Hops Aroma Hops Brewhouse, Hydrometer.',
		recipe: `For 5 gallons (19 L)\n4.5 lb. (2 kg) German or other light or amber malt extract syrup\n3.3. lb. (1.5 kg) plain dark malt extract syrup\n1 lb. (450 g) black malt\n1.5 oz. (42 g) Northern Brewer hops (boiling), 13 HBU\n1 oz. (28 g) Tettnang or Santiam hops (aroma)\n0.25 tsp. (1 g) powdered Irish moss\nAmerican Ale yeast or White Labs Cry Havoc yeast\n0.75 cup (175 mL) corn sugar or 1.25 cup (300 mL) dried malt extract (for bottling)`,
		userId: ''
	}
];

const seedBeers2 = [
	{
		photoUrl: 'http://cervezacasera.com.mx/wp-content/uploads/2016/02/Kit_Todo_Grano_T_54c1743c49f7e.jpg', 
		name: 'Banana Split',
		style: 'Hefeweizen',
		abv: '6.2',
		ibus: '14',
		description: 'Hop Back Salamanzar Chill Haze Chill Haze Crystal malt, Racking. Stick, Oxidized Kilderkin Biere de garde. Nebuchadnezzar Mead Flute Double Magnum Amber, ” Draugh Wort Wort Chiller Mug.” Pub glass Bottle Conditioning Oxidized Ethanol or Ethyl Alcohol. Brew Kettle Grist Ale Aroma Hops Bottom-fermenting Yeast Ale Noble Hops Aroma Hops Brewhouse, Hydrometer.',
		recipe: `For 5 gallons (19 L)\n4.5 lb. (2 kg) German or other light or amber malt extract syrup\n3.3. lb. (1.5 kg) plain dark malt extract syrup\n1 lb. (450 g) black malt\n1.5 oz. (42 g) Northern Brewer hops (boiling), 13 HBU\n1 oz. (28 g) Tettnang or Santiam hops (aroma)\n0.25 tsp. (1 g) powdered Irish moss\nAmerican Ale yeast or White Labs Cry Havoc yeast\n0.75 cup (175 mL) corn sugar or 1.25 cup (300 mL) dried malt extract (for bottling)`,
		userId: ''
	},
	{
		photoUrl: 'https://www.mrbeer.com/media/catalog/product/cache/2/thumbnail/9df78eab33525d08d6e5fb8d27136e95/b/e/beer-amber-pintulw_4.jpg', 
		name: 'Mowhawk Black IPA',
		style: 'American IPA',
		abv: '7.2',
		ibus: '92',
		description: 'Hop Back Salamanzar Chill Haze Chill Haze Crystal malt, Racking. Stick, Oxidized Kilderkin Biere de garde. Nebuchadnezzar Mead Flute Double Magnum Amber, ” Draugh Wort Wort Chiller Mug.” Pub glass Bottle Conditioning Oxidized Ethanol or Ethyl Alcohol. Brew Kettle Grist Ale Aroma Hops Bottom-fermenting Yeast Ale Noble Hops Aroma Hops Brewhouse, Hydrometer.',
		recipe: `For 5 gallons (19 L)\n4.5 lb. (2 kg) German or other light or amber malt extract syrup\n3.3. lb. (1.5 kg) plain dark malt extract syrup\n1 lb. (450 g) black malt\n1.5 oz. (42 g) Northern Brewer hops (boiling), 13 HBU\n1 oz. (28 g) Tettnang or Santiam hops (aroma)\n0.25 tsp. (1 g) powdered Irish moss\nAmerican Ale yeast or White Labs Cry Havoc yeast\n0.75 cup (175 mL) corn sugar or 1.25 cup (300 mL) dried malt extract (for bottling)`,
		userId: ''
	},
	{
		photoUrl: 'https://www.displayfakefoods.com/store/pc/catalog/2359-lg.jpg', 
		name: 'Budwisest',
		style: 'Pilsner',
		abv: '4.5',
		ibus: '20',
		description: 'Hop Back Salamanzar Chill Haze Chill Haze Crystal malt, Racking. Stick, Oxidized Kilderkin Biere de garde. Nebuchadnezzar Mead Flute Double Magnum Amber, ” Draugh Wort Wort Chiller Mug.” Pub glass Bottle Conditioning Oxidized Ethanol or Ethyl Alcohol. Brew Kettle Grist Ale Aroma Hops Bottom-fermenting Yeast Ale Noble Hops Aroma Hops Brewhouse, Hydrometer.',
		recipe: `For 5 gallons (19 L)\n4.5 lb. (2 kg) German or other light or amber malt extract syrup\n3.3. lb. (1.5 kg) plain dark malt extract syrup\n1 lb. (450 g) black malt\n1.5 oz. (42 g) Northern Brewer hops (boiling), 13 HBU\n1 oz. (28 g) Tettnang or Santiam hops (aroma)\n0.25 tsp. (1 g) powdered Irish moss\nAmerican Ale yeast or White Labs Cry Havoc yeast\n0.75 cup (175 mL) corn sugar or 1.25 cup (300 mL) dried malt extract (for bottling)`,
		userId: ''
	},
	{
		photoUrl: 'https://www.ritebrew.com/v/vspfiles/photos/851316-2.jpg', 
		name: 'Brown Out',
		style: 'Brown Ale',
		abv: '6.2',
		ibus: '14',
		description: 'Hop Back Salamanzar Chill Haze Chill Haze Crystal malt, Racking. Stick, Oxidized Kilderkin Biere de garde. Nebuchadnezzar Mead Flute Double Magnum Amber, ” Draugh Wort Wort Chiller Mug.” Pub glass Bottle Conditioning Oxidized Ethanol or Ethyl Alcohol. Brew Kettle Grist Ale Aroma Hops Bottom-fermenting Yeast Ale Noble Hops Aroma Hops Brewhouse, Hydrometer.',
		recipe: `For 5 gallons (19 L)\n4.5 lb. (2 kg) German or other light or amber malt extract syrup\n3.3. lb. (1.5 kg) plain dark malt extract syrup\n1 lb. (450 g) black malt\n1.5 oz. (42 g) Northern Brewer hops (boiling), 13 HBU\n1 oz. (28 g) Tettnang or Santiam hops (aroma)\n0.25 tsp. (1 g) powdered Irish moss\nAmerican Ale yeast or White Labs Cry Havoc yeast\n0.75 cup (175 mL) corn sugar or 1.25 cup (300 mL) dried malt extract (for bottling)`,
		userId: ''
	},
	{
		photoUrl: 'https://www.displayfakefoods.com/store/pc/catalog/2359-lg.jpg', 
		name: 'Leftover Tacos',
		style: 'Pilsner',
		abv: '6.2',
		ibus: '14',
		description: 'Hop Back Salamanzar Chill Haze Chill Haze Crystal malt, Racking. Stick, Oxidized Kilderkin Biere de garde. Nebuchadnezzar Mead Flute Double Magnum Amber, ” Draugh Wort Wort Chiller Mug.” Pub glass Bottle Conditioning Oxidized Ethanol or Ethyl Alcohol. Brew Kettle Grist Ale Aroma Hops Bottom-fermenting Yeast Ale Noble Hops Aroma Hops Brewhouse, Hydrometer.',
		recipe: `For 5 gallons (19 L)\n4.5 lb. (2 kg) German or other light or amber malt extract syrup\n3.3. lb. (1.5 kg) plain dark malt extract syrup\n1 lb. (450 g) black malt\n1.5 oz. (42 g) Northern Brewer hops (boiling), 13 HBU\n1 oz. (28 g) Tettnang or Santiam hops (aroma)\n0.25 tsp. (1 g) powdered Irish moss\nAmerican Ale yeast or White Labs Cry Havoc yeast\n0.75 cup (175 mL) corn sugar or 1.25 cup (300 mL) dried malt extract (for bottling)`,
		userId: ''
	},
	{
		photoUrl: 'http://hopworksbeer.com/wp-content/uploads/2015/07/HUB_Site_Pint_STOUT.jpg', 
		name: 'May the Schwarz Be With You',
		style: 'Schwarzbier',
		abv: '7.2',
		ibus: '24',
		description: 'Hop Back Salamanzar Chill Haze Chill Haze Crystal malt, Racking. Stick, Oxidized Kilderkin Biere de garde. Nebuchadnezzar Mead Flute Double Magnum Amber, ” Draugh Wort Wort Chiller Mug.” Pub glass Bottle Conditioning Oxidized Ethanol or Ethyl Alcohol. Brew Kettle Grist Ale Aroma Hops Bottom-fermenting Yeast Ale Noble Hops Aroma Hops Brewhouse, Hydrometer.',
		recipe: `For 5 gallons (19 L)\n4.5 lb. (2 kg) German or other light or amber malt extract syrup\n3.3. lb. (1.5 kg) plain dark malt extract syrup\n1 lb. (450 g) black malt\n1.5 oz. (42 g) Northern Brewer hops (boiling), 13 HBU\n1 oz. (28 g) Tettnang or Santiam hops (aroma)\n0.25 tsp. (1 g) powdered Irish moss\nAmerican Ale yeast or White Labs Cry Havoc yeast\n0.75 cup (175 mL) corn sugar or 1.25 cup (300 mL) dried malt extract (for bottling)`,
		userId: ''
	}
];

const seedBeers4 = [
	{
		photoUrl: 'https://www.mrbeer.com/media/catalog/product/cache/2/thumbnail/9df78eab33525d08d6e5fb8d27136e95/b/e/beer-amber-pintulw_4.jpg', 
		name: 'Mowhawk Black IPA',
		style: 'American IPA',
		abv: '7.2',
		ibus: '92',
		description: 'Hop Back Salamanzar Chill Haze Chill Haze Crystal malt, Racking. Stick, Oxidized Kilderkin Biere de garde. Nebuchadnezzar Mead Flute Double Magnum Amber, ” Draugh Wort Wort Chiller Mug.” Pub glass Bottle Conditioning Oxidized Ethanol or Ethyl Alcohol. Brew Kettle Grist Ale Aroma Hops Bottom-fermenting Yeast Ale Noble Hops Aroma Hops Brewhouse, Hydrometer.',
		recipe: `For 5 gallons (19 L)\n4.5 lb. (2 kg) German or other light or amber malt extract syrup\n3.3. lb. (1.5 kg) plain dark malt extract syrup\n1 lb. (450 g) black malt\n1.5 oz. (42 g) Northern Brewer hops (boiling), 13 HBU\n1 oz. (28 g) Tettnang or Santiam hops (aroma)\n0.25 tsp. (1 g) powdered Irish moss\nAmerican Ale yeast or White Labs Cry Havoc yeast\n0.75 cup (175 mL) corn sugar or 1.25 cup (300 mL) dried malt extract (for bottling)`,
		userId: ''
	},
	{
		photoUrl: 'https://www.mrbeer.com/media/catalog/product/cache/2/thumbnail/9df78eab33525d08d6e5fb8d27136e95/b/e/beer-amber-pintulw_4.jpg', 
		name: 'Hop Madness',
		style: 'Double IPA',
		abv: '4.5',
		ibus: '20',
		description: 'Hop Back Salamanzar Chill Haze Chill Haze Crystal malt, Racking. Stick, Oxidized Kilderkin Biere de garde. Nebuchadnezzar Mead Flute Double Magnum Amber, ” Draugh Wort Wort Chiller Mug.” Pub glass Bottle Conditioning Oxidized Ethanol or Ethyl Alcohol. Brew Kettle Grist Ale Aroma Hops Bottom-fermenting Yeast Ale Noble Hops Aroma Hops Brewhouse, Hydrometer.',
		recipe: `For 5 gallons (19 L)\n4.5 lb. (2 kg) German or other light or amber malt extract syrup\n3.3. lb. (1.5 kg) plain dark malt extract syrup\n1 lb. (450 g) black malt\n1.5 oz. (42 g) Northern Brewer hops (boiling), 13 HBU\n1 oz. (28 g) Tettnang or Santiam hops (aroma)\n0.25 tsp. (1 g) powdered Irish moss\nAmerican Ale yeast or White Labs Cry Havoc yeast\n0.75 cup (175 mL) corn sugar or 1.25 cup (300 mL) dried malt extract (for bottling)`,
		userId: ''
	},
	{
		photoUrl: 'https://www.displayfakefoods.com/store/pc/catalog/2359-lg.jpg', 
		name: 'The Crisper',
		style: 'Pilsner',
		abv: '6.2',
		ibus: '14',
		description: 'Hop Back Salamanzar Chill Haze Chill Haze Crystal malt, Racking. Stick, Oxidized Kilderkin Biere de garde. Nebuchadnezzar Mead Flute Double Magnum Amber, ” Draugh Wort Wort Chiller Mug.” Pub glass Bottle Conditioning Oxidized Ethanol or Ethyl Alcohol. Brew Kettle Grist Ale Aroma Hops Bottom-fermenting Yeast Ale Noble Hops Aroma Hops Brewhouse, Hydrometer.',
		recipe: `For 5 gallons (19 L)\n4.5 lb. (2 kg) German or other light or amber malt extract syrup\n3.3. lb. (1.5 kg) plain dark malt extract syrup\n1 lb. (450 g) black malt\n1.5 oz. (42 g) Northern Brewer hops (boiling), 13 HBU\n1 oz. (28 g) Tettnang or Santiam hops (aroma)\n0.25 tsp. (1 g) powdered Irish moss\nAmerican Ale yeast or White Labs Cry Havoc yeast\n0.75 cup (175 mL) corn sugar or 1.25 cup (300 mL) dried malt extract (for bottling)`,
		userId: ''
	},
	{
		photoUrl: 'http://cervezacasera.com.mx/wp-content/uploads/2016/02/Kit_Todo_Grano_T_54c1743c49f7e.jpg', 
		name: 'Hazey Days',
		style: 'Hefeweizen',
		abv: '6.2',
		ibus: '14',
		description: 'Hop Back Salamanzar Chill Haze Chill Haze Crystal malt, Racking. Stick, Oxidized Kilderkin Biere de garde. Nebuchadnezzar Mead Flute Double Magnum Amber, ” Draugh Wort Wort Chiller Mug.” Pub glass Bottle Conditioning Oxidized Ethanol or Ethyl Alcohol. Brew Kettle Grist Ale Aroma Hops Bottom-fermenting Yeast Ale Noble Hops Aroma Hops Brewhouse, Hydrometer.',
		recipe: `For 5 gallons (19 L)\n4.5 lb. (2 kg) German or other light or amber malt extract syrup\n3.3. lb. (1.5 kg) plain dark malt extract syrup\n1 lb. (450 g) black malt\n1.5 oz. (42 g) Northern Brewer hops (boiling), 13 HBU\n1 oz. (28 g) Tettnang or Santiam hops (aroma)\n0.25 tsp. (1 g) powdered Irish moss\nAmerican Ale yeast or White Labs Cry Havoc yeast\n0.75 cup (175 mL) corn sugar or 1.25 cup (300 mL) dried malt extract (for bottling)`,
		userId: ''
	},
	{
		photoUrl: 'https://www.mrbeer.com/media/catalog/product/cache/2/thumbnail/9df78eab33525d08d6e5fb8d27136e95/b/e/beer-amber-pintulw_4.jpg', 
		name: 'Too Damn Hoppy',
		style: 'Triple IPA',
		abv: '4.5',
		ibus: '20',
		description: 'Hop Back Salamanzar Chill Haze Chill Haze Crystal malt, Racking. Stick, Oxidized Kilderkin Biere de garde. Nebuchadnezzar Mead Flute Double Magnum Amber, ” Draugh Wort Wort Chiller Mug.” Pub glass Bottle Conditioning Oxidized Ethanol or Ethyl Alcohol. Brew Kettle Grist Ale Aroma Hops Bottom-fermenting Yeast Ale Noble Hops Aroma Hops Brewhouse, Hydrometer.',
		recipe: `For 5 gallons (19 L)\n4.5 lb. (2 kg) German or other light or amber malt extract syrup\n3.3. lb. (1.5 kg) plain dark malt extract syrup\n1 lb. (450 g) black malt\n1.5 oz. (42 g) Northern Brewer hops (boiling), 13 HBU\n1 oz. (28 g) Tettnang or Santiam hops (aroma)\n0.25 tsp. (1 g) powdered Irish moss\nAmerican Ale yeast or White Labs Cry Havoc yeast\n0.75 cup (175 mL) corn sugar or 1.25 cup (300 mL) dried malt extract (for bottling)`,
		userId: ''
	},
];

const seedBeers5 = [
	{
		photoUrl: 'http://hopworksbeer.com/wp-content/uploads/2015/07/HUB_Site_Pint_STOUT.jpg', 
		name: 'Black Death',
		style: 'Porter',
		abv: '7.2',
		ibus: '92',
		description: 'Hop Back Salamanzar Chill Haze Chill Haze Crystal malt, Racking. Stick, Oxidized Kilderkin Biere de garde. Nebuchadnezzar Mead Flute Double Magnum Amber, ” Draugh Wort Wort Chiller Mug.” Pub glass Bottle Conditioning Oxidized Ethanol or Ethyl Alcohol. Brew Kettle Grist Ale Aroma Hops Bottom-fermenting Yeast Ale Noble Hops Aroma Hops Brewhouse, Hydrometer.',
		recipe: `For 5 gallons (19 L)\n4.5 lb. (2 kg) German or other light or amber malt extract syrup\n3.3. lb. (1.5 kg) plain dark malt extract syrup\n1 lb. (450 g) black malt\n1.5 oz. (42 g) Northern Brewer hops (boiling), 13 HBU\n1 oz. (28 g) Tettnang or Santiam hops (aroma)\n0.25 tsp. (1 g) powdered Irish moss\nAmerican Ale yeast or White Labs Cry Havoc yeast\n0.75 cup (175 mL) corn sugar or 1.25 cup (300 mL) dried malt extract (for bottling)`,
		userId: ''
	},
	{
		photoUrl: 'http://hopworksbeer.com/wp-content/uploads/2015/07/HUB_Site_Pint_STOUT.jpg', 
		name: 'Short and Stout',
		style: 'Stout',
		abv: '4.5',
		ibus: '20',
		description: 'Hop Back Salamanzar Chill Haze Chill Haze Crystal malt, Racking. Stick, Oxidized Kilderkin Biere de garde. Nebuchadnezzar Mead Flute Double Magnum Amber, ” Draugh Wort Wort Chiller Mug.” Pub glass Bottle Conditioning Oxidized Ethanol or Ethyl Alcohol. Brew Kettle Grist Ale Aroma Hops Bottom-fermenting Yeast Ale Noble Hops Aroma Hops Brewhouse, Hydrometer.',
		recipe: `For 5 gallons (19 L)\n4.5 lb. (2 kg) German or other light or amber malt extract syrup\n3.3. lb. (1.5 kg) plain dark malt extract syrup\n1 lb. (450 g) black malt\n1.5 oz. (42 g) Northern Brewer hops (boiling), 13 HBU\n1 oz. (28 g) Tettnang or Santiam hops (aroma)\n0.25 tsp. (1 g) powdered Irish moss\nAmerican Ale yeast or White Labs Cry Havoc yeast\n0.75 cup (175 mL) corn sugar or 1.25 cup (300 mL) dried malt extract (for bottling)`,
		userId: ''
	},
	{
		photoUrl: 'https://cdnimg.webstaurantstore.com/uploads/buying_guide/2017/2/berliner-weisse.jpg', 
		name: 'Pucker Up',
		style: 'Sour',
		abv: '6.2',
		ibus: '14',
		description: 'Hop Back Salamanzar Chill Haze Chill Haze Crystal malt, Racking. Stick, Oxidized Kilderkin Biere de garde. Nebuchadnezzar Mead Flute Double Magnum Amber, ” Draugh Wort Wort Chiller Mug.” Pub glass Bottle Conditioning Oxidized Ethanol or Ethyl Alcohol. Brew Kettle Grist Ale Aroma Hops Bottom-fermenting Yeast Ale Noble Hops Aroma Hops Brewhouse, Hydrometer.',
		recipe: `For 5 gallons (19 L)\n4.5 lb. (2 kg) German or other light or amber malt extract syrup\n3.3. lb. (1.5 kg) plain dark malt extract syrup\n1 lb. (450 g) black malt\n1.5 oz. (42 g) Northern Brewer hops (boiling), 13 HBU\n1 oz. (28 g) Tettnang or Santiam hops (aroma)\n0.25 tsp. (1 g) powdered Irish moss\nAmerican Ale yeast or White Labs Cry Havoc yeast\n0.75 cup (175 mL) corn sugar or 1.25 cup (300 mL) dried malt extract (for bottling)`,
		userId: ''
	},
	{
		photoUrl: 'http://cervezacasera.com.mx/wp-content/uploads/2016/02/Kit_Todo_Grano_T_54c1743c49f7e.jpg', 
		name: 'Eat Your Wheaties',
		style: 'American Wheat Beer',
		abv: '6.2',
		ibus: '14',
		description: 'Hop Back Salamanzar Chill Haze Chill Haze Crystal malt, Racking. Stick, Oxidized Kilderkin Biere de garde. Nebuchadnezzar Mead Flute Double Magnum Amber, ” Draugh Wort Wort Chiller Mug.” Pub glass Bottle Conditioning Oxidized Ethanol or Ethyl Alcohol. Brew Kettle Grist Ale Aroma Hops Bottom-fermenting Yeast Ale Noble Hops Aroma Hops Brewhouse, Hydrometer.',
		recipe: `For 5 gallons (19 L)\n4.5 lb. (2 kg) German or other light or amber malt extract syrup\n3.3. lb. (1.5 kg) plain dark malt extract syrup\n1 lb. (450 g) black malt\n1.5 oz. (42 g) Northern Brewer hops (boiling), 13 HBU\n1 oz. (28 g) Tettnang or Santiam hops (aroma)\n0.25 tsp. (1 g) powdered Irish moss\nAmerican Ale yeast or White Labs Cry Havoc yeast\n0.75 cup (175 mL) corn sugar or 1.25 cup (300 mL) dried malt extract (for bottling)`,
		userId: ''
	}
];

function createUser(userInfo, beers){
	/* This function creates a user with the given userInfo object */
	/* It then creates all the beers in the beers array and associates them to the user */
	return DB.User.create(userInfo)
		.then(user => {
			beers.forEach(beer => {
				console.log(user.id);
				beer.userId = user.id; /* associate the beer to a user */
			});
			DB.Beer.bulkCreate(beers);
		});
}

/* Seed the db */
createUser(seedUser1, seedBeers1);
createUser(seedUser2, seedBeers2);
createUser(seedUser3, []);
createUser(seedUser4, seedBeers4);
createUser(seedUser5, seedBeers5);


