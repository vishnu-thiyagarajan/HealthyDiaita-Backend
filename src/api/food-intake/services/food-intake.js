'use strict';

/**
 * food-intake service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::food-intake.food-intake');
