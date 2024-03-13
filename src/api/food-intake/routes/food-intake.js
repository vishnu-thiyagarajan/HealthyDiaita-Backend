'use strict';

/**
 * food-intake router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::food-intake.food-intake', {
    config: {
      find: {
        policies: ["global::ownuser-or-admin"],
      },
      create: {
        policies: ["global::ownuser-or-admin"],
      },
    }
});
