# CLI application

## Get and display the entire list of contacts in the form of a table (console.table)

node index.js --action="list"

![Get and display the entire list of contacts in the form of a table (console.table)](doc/screenshots/photo_list.jpg)

## Get contact by id

node index.js --action="get" --id=5

![Get contact by id](doc/screenshots/photo_get.jpg)

## Add the contact

node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22"

![Add the contact](doc/screenshots/photo_add_1.jpg) ![Add the contact](doc/screenshots/photo_add_2.jpg) ![Add the contact](doc/screenshots/photo_add_3.jpg)

## Delete the contact

node index.js --action="remove" --id=3

![Delete the contact](doc/screenshots/photo_remove.jpg)
