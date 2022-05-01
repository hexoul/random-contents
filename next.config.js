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

    const basePath = '/random-contents'
    return {
        ...commonConfig,
        /* config options for all phases except development here */
        basePath,
        env: {
            ...commonConfig.env,
        },
    }
}
