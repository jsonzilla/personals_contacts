[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f903146c1ca644b0a05db3a9f1c14600)](https://www.codacy.com/app/0um/PersonalsContacts?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=0um/PersonalsContacts&amp;utm_campaign=Badge_Grade)

# PersonContacts #
----

REST API which to store people and their contacts.

## Install
Need install MongoDB
https://docs.mongodb.com/manual/installation/

```
npm install
npm start
```

## Draft API Documentation

**Person**
----

* **URL**

  /person

* **Method:**

  `GET` | `POST`

*  **URL Params**

   **Required:**

   `name=[string]`

   **Optional:**

   `children=[id]`

* **Success Response:**

  * **Code:** 200
    **Content:**
    ```
    {
        "_id": "5a07015cec75c12bf2c18588",
        "name": "Carlos Voltair",
        "__v": 0,
        "children": []
    }```


**Person:id**
----

* **URL**

  /person/:id

* **Method:**

   GET` | `DELETE` | `PUT`

*  **URL Params**

   **Required:**

   `id=[interger]`

* **Data Params**

  **Optional:**

   `children=[id]`

* **Success Response:**

  * **Code:** 200
    **Content:**
    ```
    {
        "_id": "5a07015cec75c12bf2c18588",
        "name": "Carlos Voltair",
        "__v": 0,
        "children": []
    }```

**Contact**
----

* **URL**

  /contact/:id

* **Method:**

  `GET` | `POST`

*  **URL Params**

   **Optional:**

   `name=[string]`
   `phone=[string]`
   `phone=[email]`
   `owner=[id]`

* **Data Params**

  **Required:**

   `name=[string]`
   `phone=[string]`
   `phone=[email]`

  **Optional:**
   `owner=[id]`

* **Success Response:**

  * **Code:** 200
    **Content:**
    ```
    {
    	"_id": "5a07016bec75c12bf2c18598",
    	"owner": "5a07015fec75c12bf2c18597",
    	"name": "Ester Colbolt",
    	"email": "ester@mail.zr",
    	"__v": 0,
    	"phone": "55 5555-5555",
    	"social": "@twiter"
	}```


**Contact:id**
----

* **URL**

  /contact

* **Method:**

   GET` | `DELETE` | `PUT`

*  **URL Params**

   **Required:**

   `id=[interger]`

   **Optional:**

   `name=[string]`
   `phone=[string]`
   `phone=[email]`
   `owner=[id]`

* **Data Params**

  **Required:**

   `name=[string]`
   `phone=[string]`
   `phone=[email]`

  **Optional:**
   `owner=[id]`

* **Success Response:**

  * **Code:** 200
    **Content:**
    ```
    {
    	"_id": "5a07016bec75c12bf2c18598",
    	"owner": "5a07015fec75c12bf2c18597",
    	"name": "Ester Colbolt",
    	"email": "ester@mail.zr",
    	"__v": 0,
    	"phone": "55 5555-5555",
    	"social": "@twiter"
	}```


