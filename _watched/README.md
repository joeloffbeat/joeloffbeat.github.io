# _watched/

Data files for the Books & Movies overlay.

## books.json

Array of book objects:

| Field    | Type   | Required | Notes                        |
|----------|--------|----------|------------------------------|
| title    | string | yes      |                              |
| author   | string | no       |                              |
| year     | number | no       |                              |
| genre    | string | no       |                              |
| rating   | number | no       | 1–5                          |
| cover    | string | no       | must be https:// URL         |
| notes    | string | no       | Short personal note          |

## movies.json

Same fields as books except `author` is not used.
