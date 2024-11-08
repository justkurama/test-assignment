# Explanation of Additional Requests for the "People" Entity

When navigating to the "people" entity, additional requests to other entities are not redundant. These requests are intentionally made because the backend response for a request to "people/1/" returns the following result:

```json
{
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
    "homeworld": "https://swapi.dev/api/planets/1/",
    "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/"
    ],
    "species": [],
    "vehicles": [
        "https://swapi.dev/api/vehicles/14/",
        "https://swapi.dev/api/vehicles/30/"
    ],
    "starships": [
        "https://swapi.dev/api/starships/12/",
        "https://swapi.dev/api/starships/22/"
    ],
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-20T21:17:56.891000Z",
    "url": "https://swapi.dev/api/people/1/"
}
```

As shown in the given JSON, some fields contain links to other entities, such as "homeworld," "films," "vehicles," and "starships." These links point to other API endpoints that contain additional data related to the current "people" entity.

### Why Are Additional Requests Needed?

- **Retrieving Planet Data**: The "homeworld" field contains a link to the planet where the character was born. To obtain information about the planet, an additional request must be made to the URL provided.
- **Retrieving Film Data**: The "films" field contains an array of links to the films in which the character appeared. To retrieve information on each film, requests must be made to each of these URLs.
- **Retrieving Vehicle and Starship Data**: The "vehicles" and "starships" fields contain links to vehicles and starships that the character used. To get information on each of these, additional requests must also be made.

### Conclusion

Thus, additional requests to other entities when navigating to the "people" entity are necessary to obtain complete and detailed information about the character. These requests allow us to gather all related data and provide the user with a comprehensive view of the character and their surroundings.