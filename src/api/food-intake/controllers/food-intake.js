'use strict';

/**
 * food-intake controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::food-intake.food-intake');
