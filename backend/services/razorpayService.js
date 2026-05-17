// Razorpay Payment Service - May 17, 2026
// Handles ₹100/month Pro subscription payments via UPI/Cards/Netbanking

import Razorpay from 'razorpay';
import crypto from 'crypto';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Create order for ₹100 (10000 paise)
export async function createOrder(userId) {
  const options = {
    amount: 10000, // ₹100 in paise
    currency: 'INR',
    receipt: `receipt_${userId}_${Date.now()}`,
    notes: { userId }
  };
  const order = await razorpay.orders.create(options);
  return order;
}

// Verify payment signature
export async function verifyPayment(orderId, paymentId, signature) {
  const generatedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(`${orderId}|${paymentId}`)
    .digest('hex');
  return generatedSignature === signature;
}

// Upgrade user to Pro in database
export async function upgradeToPro(userId) {
  const User = mongoose.model('User');
  await User.findOneAndUpdate(
    { userId: userId },
    { 
      subscriptionTier: 'pro',
      subscriptionExpiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    }
  );
}
