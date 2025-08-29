import { createClient } from '@hey-api/openapi-ts';

createClient({
    input: './config/service1-async.yaml',
    output: {
        path: './src/lib/async-types/',
        clean: true,
    },
    parser: {
        transforms: {
            enums: false,
        }
    },
    plugins: [
        {
            name: '@hey-api/typescript',
        },
    ]
});
