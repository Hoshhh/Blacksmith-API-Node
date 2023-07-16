<img src="assets/Hammer_&_Hearth.png" width="700">

Hammer & Hearth is a REST API used to make games about blacksmithing, automation, and running a shop. How you choose to make the game is up to you!

## Inventory

Returns JSON data about all the items in your inventory
<br>

- **URL**

  /api/v1/inventory

* **Method**

  `GET`

Returns JSON data about what item is occupying a single slot
<br>

- **URL**

  /api/v1/inventory/:id

* **Method**

  `GET`

* **URL Params**

  **Required:**

  `id=[string]`

Add an item to your inventory
<br>

- **URL**

  /api/v1/inventory/:id

* **Method**

  `POST`

* **URL Params**

  **Required:**

  `id=[string]`

Remove an item to your inventory
<br>

- **URL**

  /api/v1/inventory/:id

* **Method**

  `DELETE`

* **URL Params**

  **Required:**

  `id=[string]`
