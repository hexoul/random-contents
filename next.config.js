const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
    let commonConfig = {
        ...defaultConfig,
        env: {},
    }

    if (phase === PHASE_DEVELOPMENT_SERVER || process.env.VERCEL) {
        return {
            ...commonConfig,
            /* development only config options here */
            env: {
                ...commonConfig.env,
            },
        }
    }

    return {
        ...commonConfig,
        /* config options for all phases except development here */
        env: {
            ...commonConfig.env,
        },
    }
}
