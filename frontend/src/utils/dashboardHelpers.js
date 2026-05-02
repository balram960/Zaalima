// Week 4: Dashboard Helpers - May 2, 2026
export const formatResumeDate = (timestamp) => {
  return new Date(timestamp).toLocaleDateString();
};

export const getSubscriptionStatus = (tier) => {
  return tier === 'pro' ? 'Active' : 'Free - Upgrade to Pro';
};
