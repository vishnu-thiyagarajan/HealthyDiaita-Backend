'use strict';

/**
 * document router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::document.document',{
    config: {
      find: {
        policies: ["global::ownuser-or-admin"],
      },
      create: {
        policies: ["global::ownuser-or-admin"],
      },
    }
});
