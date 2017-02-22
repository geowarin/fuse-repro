
## Repro for issue #284

```
yarn
yarn start
```

Uncomment the commented line in `src/styles/main.css`.

You get an expected error.

Re-comment, or suppress it. The error persists and main.css
does not get regenerated.
