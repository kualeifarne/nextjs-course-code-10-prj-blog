const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
    if (phase == PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: 'Luciifer',
                mongodb_password: 'uEmZFjeS8V2iuD1l',
                mongodb_clustername: 'cluster0',
                mongodb_hostname: '39rqbvc',
                mongodb_database: 'my-site',
            }
        }
    }

    return {
        env: {
            mongodb_username: 'Luciifer',
            mongodb_password: 'uEmZFjeS8V2iuD1l',
            mongodb_clustername: 'cluster0',
            mongodb_hostname: '39rqbvc',
            mongodb_database: 'my-site',
        }
    }
};