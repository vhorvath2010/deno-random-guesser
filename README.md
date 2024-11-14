# Random Number Guesser

This is a random number guessing game in the form of a backend server created using Deno. The purpose of this project is for me to learn about the Deno runtime and standard library.

## API Spec

### `POST /guess`

Path parameters: `N/A`

JSON body parameters:

```json
{
  "guess": 42
}
```

Example response:

```json
{
  "isCorrect": true
}
```
