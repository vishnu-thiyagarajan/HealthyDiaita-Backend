'use strict';

/**
 * payment router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::payment.payment', {
    config: {
      find: {
        policies: ["global::ownuser-or-admin"],
      },
      create: {
        policies: ["global::ownuser-or-admin"],
      },
    }
});
