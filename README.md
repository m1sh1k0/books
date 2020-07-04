To run project :

```
npm run dev
```

to create simple book use visit

```
http://localhost:3000/book
```

using POST method create simple book with body:

```
{
    "title": "Harry Potter and the Philosopher's Stone",
    "description": "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school, and with the help of his friends, Harry faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old.",
    "price": 14.99,
    "authors" : [{ "fullName":"J. K. Rowling" }],
    "genres" : [{ "title" : "Fantasy" }]
}
```

To search book by author full name or genre use GET methodand add 'keyword' param, example:

```
http://localhost:3000/book/?keyword=rowling
```

To get single book GET methodand add id param, example:

```
http://localhost:3000/book/5eff8191ea4548cfd7c9bb38
```

To edit book use PUT method, the new object will be setted, exaple:

```
http://localhost:3000/book/5eff8191ea4548cfd7c9bb38
```

with some new body

```
{
    "title": "Harry Potter and the Philosopher's Stone",
    "description": "The object will be overwritten",
    "price": 1.99,
    "authors" : [{ "fullName":"J. K. Rowling" }, {"fullName":"otherAuthor"}],
    "genres" : [{ "title" : "Fantasy" }, { "title":"otherGenre"}]
}
```
