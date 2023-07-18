<img src="assets/Hammer_&_Hearth.png" width="700">

Hammer & Hearth is a REST API used to make games about blacksmithing, automation, and running a shop. How you choose to make the game is up to you!

## Items

Returns JSON data about all the items in a database
<br>

- **URL**

  /api/v1/items

* **Method**

  `GET`

Returns JSON data about a specific item in a database
<br>

- **URL**

  /api/v1/items/:id

* **Method**

  `GET`

* **URL Params**

  **Required:**

  `id=[string]`

Creates an item in a database
<br>

- **URL**

  /api/v1/items

* **Method**

  `POST`

* **URL Params**

  **Required:**

  `id=[string]`

Remove an existing item from a database
<br>

- **URL**

  /api/v1/inventory/:id

* **Method**

  `DELETE`

* **URL Params**

  **Required:**

  `id=[string]`

Updates an existing item in a database
<br>

- **URL**

  /api/v1/inventory/:id

* **Method**

  `PATCH`

* **URL Params**

  **Required:**

  `id=[string]`
