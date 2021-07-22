# Recipebox theme

A no-fuss Hugo theme to create a personal recipe box site

## Instalation


## Basic usage

### Configuration file `config.toml`

Example of a configuration
 ```toml
title = "Title of the site" #will also appear on the navigation bar
theme = "recipebox"
author = "David Issa Mattos"
description = "Short description of the time"

[params]
# Names for the parameters of the recipes. Write those in your own language. These will appear on the cards
totalTime = "Total time"
preparationTime = "Preparation time"
portions = "Number of portions" #In your own language

# An optional footer
# footer = "my footer" # remove comment to add a footer to the web-page

# Names for that will appear on the archetypes. Write in your own language
instructions = "Instructions"
ingredients = "Ingredients"
notes = "My notes"

#use dark theme or light theme?
darkTheme = true

#Configuring the menu for each folder you have inside recipes
# the url field is the name of the folder. Don't forget the /
#title is the name it will appear in the menu
#identifier should be unique. Use the same name as the folder
#weight determines the order of the menu ascending
# of course we can have menus that direct directly to a page such as an about page
[menu]
    [[menu.main]]
        identifier="salads"
        title="Salads and sauces"
        url="/recipes/salads"
        weight=1
    [[menu.main]]
        identifier="bread"
        title="Breads"
        url="/recipes/bread"
        weight=2
    [[menu.main]]
        identifier="dessert"
        title="Sobremesas"
        url="/recipes/dessert"
        weight=3
    [[menu.main]]
        identifier="about"
        title="About this site"
        url="/about"
        weight=4
 ```

### Creating a recipe

The easiest way is to create a markdown file in the respecitve folder with the command:

`hugo new recipes/category/name-of-the-recipe.md`

This will create a new file with the frontmatter skeleton.

Alternatively, just 

**The frontmatter**

Below you can see an example of a frontmatter of a recipe

```
---
title: "My special bread recipe"
date: 2021-07-20T10:27:25+02:00
preparationTime: "45 min"
totalTime: "8h"
portions: "2 loafs"
mainCategory: "Breads"
tags: ["white bread", "secret recipe"]
summary: "This is a super simple recipe of the best bread"
images: ["/recipes/breads/images/bread-in-oven.jpg", "/recipes/breads/images/bread-idone.jpg"]
hideIndex: false
---
```

* `title`: Title of the recipe
* `date`: Date the recipe was added
* `preparationTime`: Preparation time to be displayed in the card
* `totalTime`: Total time to be displayed in the card
* `portions`: Number of portions to be displayed in the card
* `mainCategory`: this appears in the top of the cards as the category of the recipe. Note that this is not the same as the menu category!
* `tags`: not used yet but will be added some functionality for it soon
* `summary`: Short summary to appear in the small cards of the home page and in the menu categories
* `images`: list with the path of the images to appear in the gallery at the end of the recipe.
* `hideIndex`: remove this page from the list of cards in the homepage/index. You probably want false for recipes but true for other pages such as the about page

### Organization of the content folder

The base of content folder should have
* A `recipes` folder
* A `_index.md` file
* Other md pages as you see fit

The `recipes` folder should **NOT** have a `_index.md` file otherwise it will break the list of cards in the index page

The `recipes` folder should have only folders of specific groups of recipes such as `salads`, `pasta` etc. Inside each of these folders you should have a `_index.md` as it will be used to show cards of the recipes for that group. Next to it you will see the recipes in md. I recommend having an image folder inside each group to hold recipes images.

In the end the structure of your content folder should look like this. This will make it easy for you to manage your recipe box

```
content
├── _index.md
├── about.md
└── recipes
    └── salads
        ├── _index.md
        ├── salad-1.md
        ├── salad-2.md
        └── images
            ├── image-salad-1.jpg
            ├── image-salad-2.jpg
    └── pastas
        ├── _index.md
        ├── pasta-1.md
        ├── pasta-2.md
        └── images
            ├── image-pasta-1.jpg
            ├── image-pasta-2.jpg 
...
```

In the `_index.md` files in each group of recipes folder and in the 

### Hiding specific pages from the index menu

Use the option `hideIndex=true` in the frontmatter. This will remove the page from appearing as a card in the index.html/homepage of the site

### Pages that are not cards

By default, all pages inside recipes will be formatted as a card. The templates are defined in `layouts/recipes/single.html` and `layouts/recipes/list.html` and use the partials from the partials folder.

Pages placed inside content but outside the recipes folder will use the _default layouts automatically. These layout just place the content in the page without a card. See the about page for an example.


## Built with

* [Hugo](https://gohugo.io/)
* Layout based on [Bootstrap](https://getbootstrap.com/) - v.5.0.2
* [Bootstrap icons](https://icons.getbootstrap.com/)
* Light and dark theme based on the [Nord Theme](https://www.nordtheme.com/) color palette 