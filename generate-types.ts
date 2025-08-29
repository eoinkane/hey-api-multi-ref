import { createClient } from '@hey-api/openapi-ts';

createClient({
    input: './config/service1-sync.yaml',
    output: {
        path: './src/lib/types/',
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
