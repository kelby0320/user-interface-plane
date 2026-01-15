import { defineConfig } from 'orval';

export default defineConfig({
    'platform-api': {
        input: {
            target: '../../platform-apis/openapi/platform-control-plane.yaml',
        },
        output: {
            target: './src/gen/hooks.ts',
            client: 'react-query',
            mode: 'split',
            override: {
                mutator: {
                    path: './src/custom-instance.ts',
                    name: 'customInstance',
                },
            },
        },
    },
});
