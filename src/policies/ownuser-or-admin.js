
module.exports = async (policyContext, config, { strapi }) => {
    if (policyContext.state.user?.role?.name === 'Admin') {
      return true;
    }
    if (policyContext.request?.query?.filters?.user?.id?.$eq === String(policyContext.state.user.id)
    || policyContext.request?.body?.data?.user === policyContext.state.user.id
  ) {
      return true;
    }
    return false;
  };