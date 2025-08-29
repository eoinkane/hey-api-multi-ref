# `@hey-api/openapi-ts` multiple external references example

This repo is a reproducible example for an issue with `@hey-api/openapi-ts`,
when handling multiple external references in an OpenAPI spec.

Using [`@hey-api/openapi-ts` @ `v0.82.0`](https://www.npmjs.com/package/@hey-api/openapi-ts/v/0.82.0):

It seems that when a OpenAPI spec has multiple external references,
only the first one is resolved correctly.
The subsequent references are not resolved, and left empty.

The resulting TypeScript types are incorrect.
They declare a field without a type as so:

```typescript
    channel: ;
```

[`src/lib/async-types/types.gen.ts`](./src/lib/async-types/types.gen.ts#L29-L31)

## Reproduction steps

The specs used are defined in the [`config/`](./config/) folder.
[`service1-async.yaml`](./config/service1-async.yaml) and
[`service1-sync.yaml`](./config/service1-sync.yaml) both define a valid OpenAPI spec.

In this example [`service1-async.yaml`](./config/service1-async.yaml) references
the `Channel` and `DataUuid` schemas defined in [`./config/service1-sync.yaml`](./config/service1-sync.yaml).

To reproduce the issue:

```shell
npm install
npm run generate:sync
npm run generate:async
```

The generated files are outputted to the `src/lib` folder, in
[`src/lib/types/types.gen.ts`](./src/lib/types/types.gen.ts) and
[`src/lib/async-types/types.gen.ts`](./src/lib/async-types/types.gen.ts).
