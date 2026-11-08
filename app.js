const PRODUCTS = [
    {
      id: 1,
      category: "Tacos",
      name: "Tacos Poulet",
      description: "Poulet mariné, frites, sauce fromagère",
      price: 39,
      image:
        "assets/TACOS-2.jpg",
      details:
        "Tortilla garnie généreusement, préparée à la commande avec frites et sauce.",
      ingredients: "Poulet mariné, frites, sauce fromagère",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 2,
      category: "Tacos",
      name: "Tacos Viande Hachée",
      description: "Viande hachée, cheddar, sauce maison",
      price: 42,
      image:
        "assets/TACOS-1.jpg",
      details:
        "Tortilla garnie généreusement, préparée à la commande avec frites et sauce.",
      ingredients: "Viande hachée, cheddar, sauce maison",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 3,
      category: "Tacos",
      name: "Tacos Mixte",
      description: "Poulet, viande hachée et fromage",
      price: 49,
      image:
        "assets/TACOS-1.jpg",
      details:
        "Tortilla garnie généreusement, préparée à la commande avec frites et sauce.",
      ingredients: "Poulet, viande hachée et fromage",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 4,
      category: "Tacos",
      name: "Tacos Cordon Bleu",
      description: "Cordon bleu, cheddar et sauce fromagère",
      price: 45,
      image:
        "assets/TACOS-3.jpg",
      details:
        "Tortilla garnie généreusement, préparée à la commande avec frites et sauce.",
      ingredients: "Cordon bleu, cheddar et sauce fromagère",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 5,
      category: "Tacos",
      name: "Tacos Nuggets",
      description: "Nuggets croustillants et sauce au choix",
      price: 39,
      image:
        "assets/TACOS-3.jpg",
      details:
        "Tortilla garnie généreusement, préparée à la commande avec frites et sauce.",
      ingredients: "Nuggets croustillants et sauce au choix",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 6,
      category: "Pizza",
      name: "Margherita",
      description: "Tomate, mozzarella, basilic",
      price: 35,
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1000&q=85",
      details:
        "Pâte garnie de sauce tomate et d'ingrédients, puis cuite au four.",
      ingredients: "Tomate, mozzarella, basilic",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 7,
      category: "Pizza",
      name: "Pizza Poulet",
      description: "Poulet, champignons, mozzarella",
      price: 49,
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=85",
      details:
        "Pâte garnie de sauce tomate et d'ingrédients, puis cuite au four.",
      ingredients: "Poulet, champignons, mozzarella",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 8,
      category: "Pizza",
      name: "4 Fromages",
      description: "Mozzarella, chèvre, bleu, emmental",
      price: 55,
      image:
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=1000&q=85",
      details:
        "Pâte garnie de sauce tomate et d'ingrédients, puis cuite au four.",
      ingredients: "Mozzarella, chèvre, bleu, emmental",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 9,
      category: "Pizza",
      name: "Pepperoni",
      description: "Pepperoni, mozzarella, sauce tomate",
      price: 52,
      image:
        "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1000&q=85",
      details:
        "Pâte garnie de sauce tomate et d'ingrédients, puis cuite au four.",
      ingredients: "Pepperoni, mozzarella, sauce tomate",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 10,
      category: "Pizza",
      name: "Thon",
      description: "Thon, olives, oignons, mozzarella",
      price: 48,
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1000&q=85",
      details:
        "Pâte garnie de sauce tomate et d'ingrédients, puis cuite au four.",
      ingredients: "Thon, olives, oignons, mozzarella",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 11,
      category: "Burgers",
      name: "Classic Burger",
      description: "Steak  smash, salade, tomate, cheddar",
      price: 39,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=85",
      details:
        "Pain moelleux, garniture chaude, fromage et sauce selon la recette.",
      ingredients: "Steak  smash, salade, tomate, cheddar",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 12,
      category: "Burgers",
      name: "Cheese Burger",
      description: "Double cheddar et sauce burger",
      price: 45,
      image:
        "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=1000&q=85",
      details:
        "Pain moelleux, garniture chaude, fromage et sauce selon la recette.",
      ingredients: "Double cheddar et sauce burger",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 13,
      category: "Burgers",
      name: "Chicken Burger",
      description: "Poulet croustillant, salade et mayo",
      price: 42,
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=85",
      details:
        "Pain moelleux, garniture chaude, fromage et sauce selon la recette.",
      ingredients: "Poulet croustillant, salade et mayo",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 14,
      category: "Burgers",
      name: "Double Beef",
      description: "Deux steaks, double cheddar, oignons",
      price: 55,
      image:
        "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=1000&q=85",
      details:
        "Pain moelleux, garniture chaude, fromage et sauce selon la recette.",
      ingredients: "Deux steaks, double cheddar, oignons",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 15,
      category: "Burgers",
      name: "Royal Burger",
      description: "Steak, œuf, cheddar, bacon de dinde",
      price: 59,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=85",
      details:
        "Pain moelleux, garniture chaude, fromage et sauce selon la recette.",
      ingredients: "Steak, œuf, cheddar, bacon de dinde",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 16,
      category: "Sandwichs",
      name: "Sandwich Poulet",
      description: "Poulet grillé, crudités et sauce",
      price: 32,
      image:
        "assets/SANDWICHE-3.jpg",
      details: "Pain garni de viande ou de poisson, crudités et sauce.",
      ingredients: "Poulet grillé, crudités et sauce",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 17,
      category: "Sandwichs",
      name: "Sandwich Mixte",
      description: "Poulet et viande hachée",
      price: 39,
      image:
        "assets/SANDWICHE-1.jpg",
      details: "Pain garni de viande ou de poisson, crudités et sauce.",
      ingredients: "Poulet et viande hachée",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 18,
      category: "Sandwichs",
      name: "Sandwich Thon",
      description: "Thon, maïs, salade et olives",
      price: 30,
      image:
        "assets/SANDWICHE-3.jpg",
      details: "Pain garni de viande ou de poisson, crudités et sauce.",
      ingredients: "Thon, maïs, salade et olives",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 19,
      category: "Sandwichs",
      name: "Sandwich Steak",
      description: "Steak, fromage et oignons",
      price: 38,
      image:
        "assets/SANDWICHE-2.jpg",
      details: "Pain garni de viande ou de poisson, crudités et sauce.",
      ingredients: "Steak, fromage et oignons",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 20,
      category: "Panini",
      name: "Panini Poulet",
      description: "Poulet, mozzarella et sauce pesto",
      price: 32,
      image:
        "assets/SANDWICHE-1.jpg",
      details: "Pain pressé et toasté, fromage fondant et garniture.",
      ingredients: "Poulet, mozzarella et sauce pesto",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 21,
      category: "Panini",
      name: "Panini 3 Fromages",
      description: "Mélange de trois fromages",
      price: 35,
      image:
        "assets/PANINI-3.jpg",
      details: "Pain pressé et toasté, fromage fondant et garniture.",
      ingredients: "Mélange de trois fromages",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 22,
      category: "Panini",
      name: "Panini Viande Hachée",
      description: "Viande hachée, cheddar",
      price: 36,
      image:
        "assets/PANINI-1.jpg",
      details: "Pain pressé et toasté, fromage fondant et garniture.",
      ingredients: "Viande hachée, cheddar",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 23,
      category: "Panini",
      name: "Panini Thon",
      description: "Thon, mozzarella et olives",
      price: 32,
      image:
        "assets/PANINI-1.jpg",
      details: "Pain pressé et toasté, fromage fondant et garniture.",
      ingredients: "Thon, mozzarella et olives",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 24,
      category: "Pâtes",
      name: "Pâtes Bolognaise",
      description: "Sauce tomate et viande hachée",
      price: 45,
      image:
        "assets/PATES-3.jpg",
      details: "Pâtes préparées à la commande avec une sauce gourmande.",
      ingredients: "Sauce tomate et viande hachée",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 25,
      category: "Pâtes",
      name: "Pâtes Alfredo",
      description: "Poulet, crème et parmesan",
      price: 49,
      image:
        "assets/PATES-1.jpg",
      details: "Pâtes préparées à la commande avec une sauce gourmande.",
      ingredients: "Poulet, crème et parmesan",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 26,
      category: "Pâtes",
      name: "Pâtes 4 Fromages",
      description: "Sauce crémeuse aux fromages",
      price: 52,
      image:
        "assets/PATES-2.jpg",
      details: "Pâtes préparées à la commande avec une sauce gourmande.",
      ingredients: "Sauce crémeuse aux fromages",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 27,
      category: "Pâtes",
      name: "Pâtes Fruits de Mer",
      description: "Crevettes et sauce à l'ail",
      price: 59,
      image:
        "assets/PATES-4.jpg",
      details: "Pâtes préparées à la commande avec une sauce gourmande.",
      ingredients: "Crevettes et sauce à l'ail",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 28,
      category: "Salades",
      name: "Salade César",
      description: "Poulet, parmesan, croûtons",
      price: 39,
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85",
      details: "Légumes frais assemblés à la commande et assaisonnés.",
      ingredients: "Poulet, parmesan, croûtons",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 29,
      category: "Salades",
      name: "Salade Niçoise",
      description: "Thon, œuf, olives et légumes",
      price: 38,
      image:
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1000&q=85",
      details: "Légumes frais assemblés à la commande et assaisonnés.",
      ingredients: "Thon, œuf, olives et légumes",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 30,
      category: "Salades",
      name: "Salade Avocat",
      description: "Avocat, maïs, tomates et feta",
      price: 42,
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=85",
      details: "Légumes frais assemblés à la commande et assaisonnés.",
      ingredients: "Avocat, maïs, tomates et feta",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 31,
      category: "Salades",
      name: "Salade Maison",
      description: "Légumes frais et fromage",
      price: 35,
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85",
      details: "Légumes frais assemblés à la commande et assaisonnés.",
      ingredients: "Légumes frais et fromage",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 32,
      category: "Plats",
      name: "Escalope Panée",
      description: "Escalope, frites et salade",
      price: 55,
      image:
        "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1000&q=85",
      details: "Plat chaud servi avec accompagnement selon la recette.",
      ingredients: "Escalope, frites et salade",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 33,
      category: "Plats",
      name: "Poulet Grillé",
      description: "Poulet grillé, riz et légumes",
      price: 59,
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=85",
      details: "Plat chaud servi avec accompagnement selon la recette.",
      ingredients: "Poulet grillé, riz et légumes",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 34,
      category: "Plats",
      name: "Steak Frites",
      description: "Steak grillé, frites maison",
      price: 65,
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=85",
      details: "Plat chaud servi avec accompagnement selon la recette.",
      ingredients: "Steak grillé, frites maison",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 35,
      category: "Plats",
      name: "Cordon Bleu",
      description: "Cordon bleu, sauce champignons",
      price: 62,
      image:
        "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1000&q=85",
      details: "Plat chaud servi avec accompagnement selon la recette.",
      ingredients: "Cordon bleu, sauce champignons",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 36,
      category: "Desserts",
      name: "Fondant Chocolat",
      description: "Cœur chocolat, servi tiède",
      price: 28,
      image:
        "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=1000&q=85",
      details: "Dessert gourmand à savourer en fin de repas.",
      ingredients: "Cœur chocolat, servi tiède",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 37,
      category: "Desserts",
      name: "Cheesecake",
      description: "Cheesecake crémeux",
      price: 30,
      image:
        "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1000&q=85",
      details: "Dessert gourmand à savourer en fin de repas.",
      ingredients: "Cheesecake crémeux",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 38,
      category: "Desserts",
      name: "Tiramisu",
      description: "Crème mascarpone et café",
      price: 28,
      image:
        "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1000&q=85",
      details: "Dessert gourmand à savourer en fin de repas.",
      ingredients: "Crème mascarpone et café",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 39,
      category: "Desserts",
      name: "Crêpe Nutella",
      description: "Crêpe fine, Nutella",
      price: 25,
      image:
        "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=1000&q=85",
      details: "Dessert gourmand à savourer en fin de repas.",
      ingredients: "Crêpe fine, Nutella",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 40,
      category: "Boissons",
      name: "Eau 50 cl",
      description: "Eau minérale",
      price: 8,
      image:
        "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1000&q=85",
      details: "Boisson servie fraîche.",
      ingredients: "Eau minérale",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 41,
      category: "Boissons",
      name: "Soda 33 cl",
      description: "Boisson fraîche au choix",
      price: 10,
      image:
        "assets/SODA.jpg",
      details: "Boisson servie fraîche.",
      ingredients: "Boisson fraîche au choix",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 42,
      category: "Boissons",
      name: "Jus d'Orange",
      description: "Jus d'orange frais",
      price: 18,
      image:
        "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=1000&q=85",
      details: "Boisson servie fraîche.",
      ingredients: "Jus d'orange frais",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
    {
      id: 43,
      category: "Boissons",
      name: "Milkshake",
      description: "Vanille, chocolat ou fraise",
      price: 25,
      image:
        "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=1000&q=85",
      details: "Boisson servie fraîche.",
      ingredients: "Vanille, chocolat ou fraise",
      allergens:
        "Peut contenir des allergènes selon la recette (gluten, lait, œufs ou autres). Contactez le restaurant pour vérifier.",
    },
  ],
  CATEGORIES = [
    {
      name: "Tacos",
      image:
        "assets/TACOS-1.jpg",
      count: 5,
    },
    {
      name: "Pizza",
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1200&q=85",
      count: 5,
    },
    {
      name: "Burgers",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=85",
      count: 5,
    },
    {
      name: "Sandwichs",
      image:
        "assets/SANDWICHE-1.jpg",
      count: 4,
    },
    {
      name: "Panini",
      image:
        "assets/PANINI-2.jpg",
      count: 4,
    },
    {
      name: "Pâtes",
      image:
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=85",
      count: 4,
    },
    {
      name: "Salades",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=85",
      count: 4,
    },
    {
      name: "Plats",
      image:
        "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1200&q=85",
      count: 4,
    },
    {
      name: "Desserts",
      image:
        "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=1200&q=85",
      count: 4,
    },
    {
      name: "Boissons",
      image:
        "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=1200&q=85",
      count: 4,
    },
  ];
const WHATSAPP_NUMBER = "212600000000"; // Remplacer par le numéro réel sans + ni espaces.
const money = (n) => `${n} DH`;
const catUrl = (c) => `categorie.html?cat=${encodeURIComponent(c)}`;
const prodUrl = (p) => `produit.html?id=${p.id}`;
const getCart = () =>
  JSON.parse(localStorage.getItem("maisonRougeCart") || "[]");
const saveCart = (c) =>
  localStorage.setItem("maisonRougeCart", JSON.stringify(c));
function updateCount() {
  document
    .querySelectorAll("[data-cart-count]")
    .forEach((e) => (e.textContent = getCart().reduce((n, x) => n + x.qty, 0)));
}
function toast(t) {
  let e = document.getElementById("toast");
  if (e) {
    e.textContent = t;
    e.classList.add("show");
    setTimeout(() => e.classList.remove("show"), 1800);
  }
}
function addToCart(id) {
  let c = getCart(),
    x = c.find((v) => v.id === id);
  if (x) x.qty++;
  else c.push({ id, qty: 1 });
  saveCart(c);
  updateCount();
  toast("Produit ajouté au panier ✓");
}
function shell() {
  document.body.insertAdjacentHTML(
    "afterbegin",
    `<div class="topline">MAISON ROUGE <span>CUISINE GÉNÉREUSE · SERVICE RAPIDE</span></div><header class="header"><a class="brand" href="index.html"><span class="brandmark">MR</span><span>MAISON <b>ROUGE</b><small>RESTAURANT · STREET FOOD</small></span></a><nav><a href="index.html">Accueil</a><a href="index.html#categories">Nos catégories</a></nav><a class="cart-link" href="panier.html">Panier <b data-cart-count>0</b></a></header>`,
  );
  document.body.insertAdjacentHTML(
    "beforeend",
    `<footer><a class="brand footbrand" href="index.html"><span class="brandmark">MR</span><span>MAISON <b>ROUGE</b><small>RESTAURANT · STREET FOOD</small></span></a><p>Des recettes généreuses, préparées avec soin.</p><small>© 2026 Maison Rouge · Tous droits réservés</small></footer><div class="toast" id="toast"></div>`,
  );
  updateCount();
}
function categoryCards() {
  document.getElementById("categoryGrid").innerHTML = CATEGORIES.map(
    (c) =>
      `<a class="category-card" href="${catUrl(c.name)}"><img src="${c.image}" alt="${c.name}" loading="lazy"><span class="category-overlay"></span><span class="category-label"><small>${c.count} CHOIX</small><strong>${c.name}</strong><i>Découvrir la carte ↗</i></span></a>`,
  ).join("");
}
function cards(list) {
  return list
    .map(
      (p) =>
        `<a class="product-card" href="${prodUrl(p)}"><img src="${p.image}" alt="${p.name}" loading="lazy"><div class="product-card-info"><span>${p.category}</span><h3>${p.name}</h3><p>${p.description}</p><b>${money(p.price)} <i>Voir le produit ↗</i></b></div></a>`,
    )
    .join("");
}
function renderCategory() {
  let c = new URLSearchParams(location.search).get("cat"),
    list = PRODUCTS.filter((p) => p.category === c);
  document.getElementById("categoryTitle").textContent = c || "Catégorie";
  document.getElementById("categoryCount").textContent = list.length
    ? `${list.length} spécialités à découvrir`
    : "Catégorie introuvable";
  document.getElementById("categoryProducts").innerHTML = cards(list);
}
function renderProduct() {
  let p = PRODUCTS.find(
      (x) => x.id === Number(new URLSearchParams(location.search).get("id")),
    ),
    e = document.getElementById("productDetail");
  if (!p) {
    e.innerHTML = "<h2>Produit introuvable</h2>";
    return;
  }
  document.title = p.name + " | Maison Rouge";
  e.innerHTML = `<div class="product-photo"><img src="${p.image}" alt="${p.name}"></div><div class="product-detail-copy"><a class="backlink" href="${catUrl(p.category)}">← Retour à ${p.category}</a><p class="eyebrow">${p.category.toUpperCase()}</p><h1>${p.name}</h1><b class="detail-price">${money(p.price)}</b><p class="lead">${p.description}</p><div class="detail-box"><h3>À propos</h3><p>${p.details}</p><h3>Composition</h3><p>${p.ingredients}</p><h3>Informations allergènes</h3><p>${p.allergens}</p></div><div class="detail-actions"><button class="primary-btn" id="addProduct">Ajouter au panier · ${money(p.price)}</button><a class="secondary-btn" href="panier.html">Voir mon panier</a></div><small class="made-note">Préparé à la commande · Photo illustrative</small></div>`;
  document.getElementById("addProduct").onclick = () => addToCart(p.id);
}
function renderCheckout() {
  let box = document.getElementById("checkoutItems");
  function draw() {
    let cart = getCart(),
      lines = cart
        .map((x) => ({ ...PRODUCTS.find((p) => p.id === x.id), qty: x.qty }))
        .filter((x) => x.id),
      total = lines.reduce((n, p) => n + p.price * p.qty, 0);
    box.innerHTML = lines.length
      ? lines
          .map(
            (p) =>
              `<div class="checkout-line"><img src="${p.image}" alt=""><div><b>${p.name}</b><small>${p.qty} × ${money(p.price)}</small></div><strong>${money(p.price * p.qty)}</strong><div class="checkout-qty"><button data-change="${p.id}" data-delta="-1">−</button>${p.qty}<button data-change="${p.id}" data-delta="1">+</button><button class="delete-line" data-delete="${p.id}">Supprimer</button></div></div>`,
          )
          .join("")
      : `<p class="empty">Votre panier est vide. <a href="index.html">Voir les catégories</a></p>`;
    document.getElementById("checkoutTotal").textContent = money(total);
    box.querySelectorAll("[data-change]").forEach(
      (b) =>
        (b.onclick = () => {
          let c = getCart(),
            x = c.find((y) => y.id === +b.dataset.change);
          if (x) x.qty += +b.dataset.delta;
          saveCart(c.filter((y) => y.qty > 0));
          draw();
          updateCount();
        }),
    );
    box.querySelectorAll("[data-delete]").forEach(
      (b) =>
        (b.onclick = () => {
          saveCart(getCart().filter((y) => y.id !== +b.dataset.delete));
          draw();
          updateCount();
        }),
    );
  }
  draw();
  document.getElementById("orderForm").onsubmit = (e) => {
    e.preventDefault();
    let cart = getCart(),
      lines = cart
        .map((x) => ({ ...PRODUCTS.find((p) => p.id === x.id), qty: x.qty }))
        .filter((x) => x.id),
      total = lines.reduce((n, p) => n + p.price * p.qty, 0);
    if (!lines.length) {
      toast("Votre panier est vide");
      return;
    }
    let f = new FormData(e.currentTarget),
      msg = `Bonjour Maison Rouge, je souhaite commander :\n\n${lines.map((p) => `• ${p.name} × ${p.qty} = ${p.price * p.qty} DH`).join("\n")}\n\nTotal produits : ${total} DH\nNom : ${f.get("name")}\nTéléphone : ${f.get("phone")}\nAdresse : ${f.get("address")}\nVille / quartier : ${f.get("city")}\nRéception : ${f.get("delivery")}\nPaiement : ${f.get("payment")}\nNote : ${f.get("note") || "Aucune"}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };
}
