[![Codacy Badge](https://api.codacy.com/project/badge/Grade/65647a9acfcf4aea97f2854e350686e7)](https://www.codacy.com/app/0unit/PersonalContacts?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=0unit/PersonalContacts&amp;utm_campaign=Badge_Grade)

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

**Person:id/Contact**
----

* **URL**

  /person/:idPerson/contact/

* **Method:**

   `GET` | `POST`

*  **URL Params**

   **Required:**

   `idPerson=[interger]`

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



**Person:id/Contact:id**
----

* **URL**

  /person/:idPerson/contact/:idContact

* **Method:**

   GET` | `DELETE` | `PUT`

*  **URL Params**

   **Required:**

   `idPerson=[interger]`
   `idContact=[interger]`

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

