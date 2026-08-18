(() => {
  'use strict';

  const label = file => file.replace(/\.[^.]+$/, '').replace(/^\d+_/, '').replaceAll('_', ' ').replace(/\b\w/g, c => c.toUpperCase());
  const album = (property, photoBase, photos, videos = []) => {
    const propertyBase = photoBase.endsWith('/photos') ? photoBase.slice(0, -7) : photoBase;
    return [
      ...photos.map(file => ({ type: 'image', src: `${photoBase}/${file}`, alt: `${property} — ${label(file)}` })),
      ...videos.map(file => ({ type: 'video', src: `${propertyBase}/videos/${file}`, alt: `${property} property walkthrough` }))
    ];
  };

  const stays = [
    {
      slug: 'bovidae-woods', name: 'Bovidae Woods', location: 'Vattavada', type: 'Tent camp', categories: ['camp'],
      fromPrice: 1800, priceSummary: '₹1,800 / person', food: 'Dinner & breakfast included',
      tagline: 'A food-inclusive tent stay with a campfire and guided viewpoint hike.',
      packages: [{ name: 'Camping package', price: '₹1,800', basis: 'per person', description: 'Tent stay, evening snack, dinner, breakfast and hiking included.' }],
      inclusions: ['Tent stay', 'Evening tea & snack', 'Campfire', 'Dinner', 'Wake-up tea', 'Breakfast with milk tea', 'Viewpoint hike'],
      schedule: ['3:00 PM — Check-in', 'Evening tea, snack and campfire', 'Dinner — ghee rice & chicken curry', 'Morning tea and breakfast', 'Guided viewpoint hike', '12:00 PM — Check-out'],
      amenities: ['Dining hut', 'Viewpoint trail', 'Campfire area', 'On-site meals'],
      notes: ['Hot water is not available in the washroom.', 'Reconfirm the package rate and availability for your travel date.'],
      contact: { type: 'instagram', value: 'https://www.instagram.com/bovidae_woods/', label: '@bovidae_woods' },
      media: album('Bovidae Woods', 'assets/Vattavada/Bovidae Woods/photos', ['01_dining_hut_night.jpeg','02_night_sky_property_entrance.jpeg','03_tents_row_dusk.jpeg','04_guests_hiking_viewpoint.jpeg','05_flower_garden_pathway.jpeg','06_tents_row_daytime.jpeg'])
    },
    {
      slug: 'castillo-de-woods', name: 'Castillo De Woods', location: 'Vattavada, near Munnar', type: 'Private luxury villa', categories: ['villa'],
      fromPrice: 34500, priceSummary: '₹34,500 / entire villa', food: 'Confirm with property',
      tagline: 'An exclusive one-group-at-a-time villa for private family and group stays.',
      packages: [{ name: 'Entire private villa', price: '₹34,500', basis: 'per booking', description: 'The complete property is reserved for one group.' }],
      inclusions: ['100% private villa', 'One booking per day', 'Panoramic valley views', 'Private kitchen', 'Chef & personalised service', 'Spacious parking'],
      schedule: ['Check-in and check-out times are confirmed with the property when booking.'],
      amenities: ['Private kitchen', 'Dining gazebo', 'Valley-view seating', 'Parking', 'Pickup/drop on request'],
      notes: ['Meal coverage should be confirmed before payment.', 'Jeep safari and horse riding can be arranged separately.', 'Pickup and drop are available on request.'],
      contact: { type: 'whatsapp', value: '919544909544', label: '+91 95449 09544' }, secondaryContact: '+91 99619 69961', website: 'https://www.castillodewoods.com', email: 'castillodewoodskoviloor@gmail.com',
      media: album('Castillo De Woods', 'assets/Vattavada/Castillo De Woods/photos', ['01_evening_cart_misty.jpeg','02_wooden_hallway_interior.jpeg','03_bedroom_purple_light.jpeg','04_porch_sitting_area.jpeg','05_bedroom_traditional_art.jpeg','06_outdoor_seating_valley_view.jpeg','07_glass_dining_gazebo_view.jpeg','08_gazebo_exterior_daytime.jpeg','09_property_wide_daytime.jpeg','10_property_night_lit.jpeg','11_temple_style_gazebo_valley.jpeg','12_swing_misty_parking.jpeg','13_tea_valley_view.jpeg','14_bedroom_kathakali_art.jpeg','15_bedroom_night_lamp.jpeg'], ['property_walkthrough_1.mp4','property_walkthrough_2.mp4'])
    },
    {
      slug: 'eira-homes', name: 'Eira Homes', location: 'Koviloor, Vattavada', type: 'Rooms & private villas', categories: ['villa','cottage'],
      fromPrice: 3750, priceSummary: 'From ₹3,750 / night', food: 'Extra; family-room breakfast included',
      tagline: 'Room and villa options with terraces, valley views and space for families or groups.',
      packages: [
        { name: 'Family room', price: '₹3,750', basis: 'per night', description: 'For 3 adults, or 2 adults + 2 children under 10. Breakfast included; extra person ₹650.' },
        { name: 'Three-bedroom villa', price: '₹9,000', basis: 'per night', description: 'Sleeps 8. Breakfast and dinner are charged separately.' },
        { name: 'Five-bedroom villa', price: '₹16,000', basis: 'per night', description: 'Sleeps 15 adults. Extra person ₹500; meals charged separately.' }
      ],
      inclusions: ['Wi-Fi', 'Valley-view terrace', 'Parking', 'Attached bathrooms', 'Family and group options'],
      schedule: ['2:00 PM — Check-in', '11:00 AM — Check-out'],
      amenities: ['Wi-Fi', 'Restaurant with pre-order', 'Terrace seating', 'BBQ area', 'Parking', 'Attached bathrooms'],
      nearby: ['Top Station — 12 km / about 35 min', 'Pambadum Shola National Park — 9 km / about 30 min', 'Chilanthiyar Waterfalls — 4 km / about 15 min', 'Strawberry and winter vegetable farms — about 5 km'],
      notes: ['Lunch is not available. Food must be pre-ordered.', 'Campfire wood ₹800; grilling charcoal ₹250.', 'Hot water is LPG-limited to one hour each morning.', 'Only Jio and BSNL are reliable; Wi-Fi is available.', 'Carry cash because card/UPI can be unreliable.', 'The final approach road is rough.', 'Forest check-post entry is normally 6:00 AM–5:00 PM.'],
      contact: { type: 'whatsapp', value: '919895135517', label: '+91 98951 35517' }, secondaryContact: '+91 94969 46451 / +91 98959 41435 / +91 81290 19451', website: 'https://eirahomesvattavada.com', maps: 'https://maps.app.goo.gl/ZrkqaJwuAfp5gh9V6',
      media: album('Eira Homes', 'assets/Vattavada/Eira Homes/photos', ['01_balcony_valley_view_evening.jpeg','02_balcony_valley_view_morning.jpeg','03_signboard_eira_homes.jpeg','04_dining_area_1.jpeg','05_misty_valley_pathway.jpeg','06_sunrays_forest_view.jpeg','07_dining_area_2_set.jpeg','08_house_exterior_evening.jpeg','09_dining_area_3_set.jpeg','10_terrace_seating_cloudy.jpeg','11_terrace_bench_misty_evening.jpeg','12_terrace_hanging_plant_misty.jpeg','13_rainbow_over_valley.jpeg','14_bbq_grill_closeup.jpeg','15_terrace_hanging_plant_misty_2.jpeg','16_bikers_group_parked.jpeg','17_bikers_group_with_riders.jpeg','18_bbq_night_patio.jpeg','19_gazebo_valley_view_jeep.jpeg','20_gazebo_seating_firepit.jpeg','21_tent_on_patio.jpeg','22_covered_seating_lounge.jpeg','23_tent_closeup_valley.jpeg','24_night_gazebo_dining_1.jpeg','25_night_house_lights_1.jpeg','26_wooden_porch_daytime_1.jpeg','27_eira_homes_branded_daytime.jpeg','28_night_gazebo_dining_2.jpeg','29_aerial_drone_view_contact.jpeg','30_wooden_porch_daytime_2.jpeg','31_night_house_lights_wide.jpeg','32_eira_homes_branded_evening.jpeg','33_dining_terrace_evening.jpeg','34_terrace_misty_flowers.jpeg','35_terrace_misty_valley.jpeg','36_house_exterior_misty_daytime.jpeg','37_porch_closeup_misty.jpeg','38_room_bed_wood_interior_1.jpeg','39_room_bed_wood_interior_2.jpeg','40_house_exterior_sunset.jpeg','41_bathroom_sink.jpeg','42_room_interior_doorway.jpeg','43_room_bed_red_accent_1.jpeg','44_room_bed_wall_art.jpeg','45_room_bed_doorway_view.jpeg','46_bathroom_toilet.jpeg','47_room_bed_red_accent_2.jpeg','48_room_bed_no_smoking_sign.jpeg','49_porch_hanging_plant.jpeg','50_terrace_bench_dusk.jpeg','51_porch_room_entrance.jpeg','52_terrace_hanging_plant_misty.jpeg','53_porch_wood_floor_closeup.jpeg','54_porch_daytime_seating.jpeg','55_room_bed_bathroom_view.jpeg','56_room_bed_red_accent_3.jpeg','57_bathroom_sink_mirror.jpeg','58_bathroom_toilet_2.jpeg'])
    },
    {
      slug: 'honey-forest', name: 'Honey Forest Vattavada', location: 'Vattavada', type: 'Tent & cottage camp', categories: ['camp','cottage'],
      fromPrice: 1000, priceSummary: 'From ₹1,000 / person', food: 'With-food and without-food options',
      tagline: 'A simple camp-and-cottage stay with food and activity package options.',
      packages: [{ name: 'Stay without food', price: '₹1,000', basis: 'per person', description: 'Stay package without meals.' },{ name: 'Stay with food', price: '₹1,300', basis: 'per person', description: 'Stay, breakfast, dinner, tea, campfire, music and jeep safari.' }],
      inclusions: ['A-frame tent or cottage room', 'Campfire', 'Music', 'Breakfast', 'Dinner', 'Tea', 'Jeep safari'],
      schedule: ['Check-in and check-out times are confirmed with the property when booking.'], amenities: ['Tent stay','Cottage rooms','Attached washroom options','Parking','Forest setting'],
      notes: ['Choose the with-food or without-food package before confirming.', 'Reconfirm rate and activity availability for your date.'],
      contact: { type: 'whatsapp', value: '919385421860', label: '+91 93854 21860' },
      media: album('Honey Forest Vattavada', 'assets/Vattavada/Honey Forest Vattavada', ['01_exterior_tents_house.jpeg','02_campfire_group.jpeg','03_campfire_closeup.jpeg','04_tent_exterior_orange.jpeg','05_tent_interior_bed1.jpeg','06_tent_interior_bed2.jpeg','07_bathroom.jpeg','08_room_bed.jpeg','09_tents_daytime_guests.jpeg','10_forest_view_parking.jpeg','11_night_gathering_1.jpeg','12_night_gathering_2.jpeg'])
    },
    {
      slug: 'mammal-valley-inn', name: 'Mammal Valley Inn', location: 'Koviloor, Vattavada', type: 'Cottages, dormitory & tents', categories: ['camp','cottage'],
      fromPrice: 800, priceSummary: 'From ₹800 / person', food: 'Not included',
      tagline: 'A valley stay among vegetable gardens with cottages, dormitory beds and tents.',
      packages: [{ name: 'Group booking', price: '₹800', basis: 'per person', description: 'Group stay without food.' },{ name: 'Cottage', price: '₹3,000', basis: 'per room', description: 'Cottage room without food.' },{ name: 'Wooden cottage', price: '₹3,500', basis: 'per room', description: 'Wooden cottage room without food.' }],
      inclusions: ['Single-bedroom cottage','Double-bedroom cottage with attic','7-bed dormitory','Three-person tents','Yoga/group hall'],
      schedule: ['Check-in and check-out times are confirmed with the property when booking.'], amenities: ['Yoga hall','Kitchen on request','7 toilets','Grill facility','Vegetable-farm setting'],
      notes: ['Food is not included.', 'The last 250 m is 4x4-only; guests can park and walk.', 'Campfire costs extra.', 'Bring meat and charcoal for grilling.', 'Music is allowed only until 11:00 PM.'],
      contact: { type: 'whatsapp', value: '917253008800', label: '+91 72530 08800' }, secondaryContact: '+91 81578 81040', brochure: 'assets/Vattavada/Mammal Valley Inn/brochure_Mammal_Valley_Inn.pdf',
      media: album('Mammal Valley Inn', 'assets/Vattavada/Mammal Valley Inn/photos', ['01_jeep_group_aerial.jpeg','02_washroom.jpeg','03_tent_interior_view.jpeg','04_guest_wooden_cottage.jpeg','05_cordwood_cottage_exterior.jpeg','06_dining_hut_interior.jpeg','07_cordwood_cottage_wide.jpeg','08_tents_under_shelter.jpeg','09_room_collage.jpeg','10_attic_bedroom.jpeg','11_wardrobe_ladder_loft.jpeg','12_dormitory_beds.jpeg','13_property_evening.jpeg','14_jeeps_property_wide.jpeg','15_cottage_porch_detail.jpeg'])
    },
    {
      slug: 'montagne-cabana', name: 'Montagne Cabana', location: 'Vattavada', type: 'Overnight tent stay', categories: ['camp'],
      fromPrice: 1500, priceSummary: '₹1,500 / person', food: 'Dinner & breakfast included',
      tagline: 'A meal-inclusive tent stay with a private-property waterfall and sunset views.',
      packages: [{ name: 'Overnight tent stay', price: '₹1,500', basis: 'per person', description: 'Tent, dinner, breakfast, evening tea/coffee, campfire, music and guides.' }],
      inclusions: ['Tent stay','Dinner','Breakfast','Evening tea/coffee','Campfire & music','Expert guides'],
      schedule: ['2:00 PM — Check-in','Evening tea/coffee','Campfire and music','Dinner','Morning breakfast','Check-out time confirmed when booking'],
      amenities: ['Waterfall inside property','Village and farm views','Group chill-out lounge','Sunset viewpoint','Vegetarian food on request'],
      notes: ['Price can change by season.', 'BBQ and extra dishes cost more.', 'Winter mornings can be extremely cold.'],
      contact: { type: 'whatsapp', value: '919048668133', label: '+91 90486 68133' },
      media: album('Montagne Cabana', 'assets/Vattavada/Montagne Cabana/photos', ['01_campsite_tent_stairway.jpeg','02_campfire_group.jpeg','03_waterfall_inside_property.jpeg','04_village_view_winter_vegetables.jpeg','05_group_chillout_area_night.jpeg','06_sunset_view_hut.jpeg','07_campsite_tent_forest.jpeg','08_hut_night_mountain_view.jpeg','09_hut_seating_night.jpeg','10_cabana_tent_dusk.jpeg','11_tent_night_sky_moon.jpeg','12_tents_night_forest_lights.jpeg'])
    },
    {
      slug: 'outernest', name: 'OuterNest', location: 'Kottakamboor, Vattavada', type: 'Activity-led tent camp', categories: ['camp'],
      fromPrice: 1000, priceSummary: '₹1,000 / person', food: 'Not included',
      tagline: 'A budget tent stay built around hiking, farm visits, waterfall time and campfire evenings.',
      packages: [{ name: 'Camping package', price: '₹1,000', basis: 'per person', description: 'Tent stay and activities. Food is charged separately.' }],
      inclusions: ['Tent stay','Barbecue setup','Common campfire','Hiking','Farm visit','Waterfall visit','Wi-Fi'],
      schedule: ['3:00 PM — Check-in and evening tea','Evening common campfire','Tent stay','Morning bed coffee','7:30 AM — Hike, waterfall, farm and village visit','12:00 PM — Check-out'],
      amenities: ['Wi-Fi','Treehouse/view deck','Dining hut','Campfire area','Guided activity route'],
      notes: ['Food and breakfast are not included.', 'Dinner and barbecue cost extra.', 'Jeep safari ₹2,500 for 8–10 people.', 'Dedicated hot water is not available.'],
      contact: { type: 'whatsapp', value: '919074089966', label: '+91 90740 89966' },
      media: album('OuterNest', 'assets/Vattavada/OuterNest/photos', ['01_aerial_dusk_property.jpeg','02_thatched_huts_valley.jpeg','03_tent_hut_valley_view.jpeg','04_camp_row_wide_daytime.jpeg','05_dining_hut_mountain_view.jpeg','06_treehouse_balcony.jpeg','07_evening_lit_firepit.jpeg','08_guest_sitting_valley_view.jpeg','09_guest_viewpoint_clouds.jpeg','10_guest_viewpoint_lamp.jpeg','11_waterfall_trek_group.jpeg','12_waterfall_rain_group.jpeg','13_tent_interior_bedding.jpeg','14_farm_visit_group_walk.jpeg'], ['property_walkthrough_1.mp4','property_walkthrough_2.mp4','property_walkthrough_3.mp4','property_walkthrough_4.mp4'])
    },
    {
      slug: 'roamrustic-camp', name: 'Roamrustic Camp Vattavada', location: 'Vattavada, near Munnar', type: 'Tent & mud-house stay', categories: ['camp','cottage'],
      fromPrice: 1500, priceSummary: 'From ₹1,500 / person', food: 'Dinner & breakfast included',
      tagline: 'Full-board tent and mud-house packages with a sunset trek and campfire night.',
      packages: [{ name: 'Tent stay', price: '₹1,500', basis: 'per person', description: 'Dinner, breakfast, trek and campfire included.' },{ name: 'Mud house stay', price: '₹1,599', basis: 'per person', description: 'For 6–8 guests, with meals, trek, farm visit and campfire.' }],
      inclusions: ['Welcome drink','Kovilmotta sunset trek','Campfire & music','Homemade dinner','Breakfast','Indoor/outdoor games','Farm & strawberry visit'],
      schedule: ['2:00 PM — Check-in','2:30 PM — Welcome drink','4:00 PM — Sunset viewpoint trek','6:00 PM — Campfire & music','8:00 PM — Dinner','6:00 AM — Black tea','8:00 AM — Breakfast','11:00 AM — Check-out'],
      amenities: ['Fenced campsite','Free parking','Bedding provided','7 washrooms','Wi-Fi','Roofed dining and campfire areas','24×7 caretaker'],
      notes: ['Chicken BBQ ₹700/kg.', 'Day and night jeep safaris cost extra.', 'Activity pickup/drop may cost extra.'],
      contact: { type: 'whatsapp', value: '919445815734', label: '+91 94458 15734' },
      media: album('Roamrustic Camp Vattavada', 'assets/Vattavada/Roamrustic Camp Vattavada/photos', ['01_tent_cluster_hillside.jpeg','02_wooden_hut_meadow.jpeg','03_thatched_cottage_daytime.jpeg','04_walkway_viewpoint.jpeg','05_dining_hut_poster.jpeg','06_child_on_swing.jpeg','07_ota_hut_misty_hills.jpeg','08_tent_interior_bed.jpeg','09_outdoor_sink_viewpoint.jpeg','10_vattavada_poster_promo.jpeg','11_hut_pathway.jpeg','12_tents_valley_view.jpeg'], ['property_walkthrough_1.mp4','property_walkthrough_2.mp4','property_walkthrough_3.mp4','property_walkthrough_4.mp4'])
    },
    {
      slug: 'sholanest', name: 'Sholanest Vattavada', location: 'Vattavada', type: 'Tent & wood-house stay', categories: ['camp','cottage'],
      fromPrice: 1500, priceSummary: 'From ₹1,500 / person', food: 'Dinner & breakfast included',
      tagline: 'Tent and wood-house packages with homemade meals, sunset trekking and campfire.',
      packages: [{ name: 'Tent stay', price: '₹1,500', basis: 'per person', description: 'Meals, trek, games and campfire included.' },{ name: 'Wood house stay', price: '₹1,600', basis: 'per person', description: 'Wood-house accommodation with the same activity schedule.' }],
      inclusions: ['Welcome drink','Kovilmotta sunset trek','Campfire & music','Homemade dinner','Breakfast','Indoor/outdoor games'],
      schedule: ['2:00 PM — Check-in','2:30 PM — Welcome drink','4:00 PM — Sunset viewpoint trek','6:00 PM — Campfire & music','8:00 PM — Dinner','6:00 AM — Black tea','8:00 AM — Breakfast','11:00 AM — Check-out'],
      amenities: ['Fenced campsite','Free parking','Bedding provided','7 washrooms','Wi-Fi','Roofed dining and campfire areas','24×7 caretaker'],
      notes: ['Chicken BBQ ₹700/kg.', 'Day and night jeep safaris cost extra.', 'Activity pickup/drop may cost extra.'],
      contact: { type: 'whatsapp', value: '919400955018', label: '+91 94009 55018' }, brochure: 'assets/Vattavada/Sholanest Vattavada/brochure_Sholanest_Mud_House.pdf',
      media: album('Sholanest Vattavada', 'assets/Vattavada/Sholanest Vattavada/photos', ['01_aerial_property_layout.jpeg','02_swing_valley_view.jpeg','03_family_at_swing.jpeg','04_guest_tent_moment.jpeg','05_washroom.jpeg','06_mud_house_exterior.jpeg','07_tent_interior_beds.jpeg','08_dining_deck_view.jpeg','09_cottage_room_chess_corner.jpeg','10_walkway_viewpoint.jpeg','11_mudhouse_pathway.jpeg'], ['property_walkthrough_1.mp4','property_walkthrough_2.mp4','property_walkthrough_3.mp4','property_walkthrough_4.mp4','property_walkthrough_5.mp4','property_walkthrough_6.mp4','property_walkthrough_7.mp4','property_walkthrough_8.mp4'])
    }
  ];

  const supportWhatsApp = '919999999999';
  const supportUrl = message => `https://wa.me/${supportWhatsApp}?text=${encodeURIComponent(message)}`;
  const bookingUrl = stay => stay.contact.type === 'instagram'
    ? stay.contact.value
    : `https://wa.me/${stay.contact.value}?text=${encodeURIComponent(`Hi, I would like to check availability and the current package price for ${stay.name}, Vattavada.`)}`;

  window.CampLink = { stays, bookingUrl, supportUrl, getStay: slug => stays.find(stay => stay.slug === slug) };
})();
