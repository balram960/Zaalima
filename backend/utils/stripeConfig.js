// Week 3: Stripe Configuration - May 2, 2026
export const STRIPE_PRICES = {
  FREE: 'price_free_001',
  PRO: 'price_pro_001',
  ENTERPRISE: 'price_enterprise_001'
};

export const SUBSCRIPTION_TIERS = {
  FREE: { name: 'Free', maxResumes: 1 },
  PRO: { name: 'Pro', maxResumes: 'unlimited' }
};
