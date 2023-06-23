import User from '../models/User.js';

export const donate = async (req, res) => {
  try {
    const { userId, amount } = req.body;
    const user = await User.findById(userId);

    // Parse the amount as a number
    const donationAmount = parseFloat(amount);

    // Calculate tokens ($10 for 1 token)
    const tokensEarned = Math.floor(donationAmount / 10);

    // Update user
    user.amountDonated += donationAmount;
    user.tokens += tokensEarned;
    await user.save();

    // Return response
    res.json({ message: 'Donation successful', tokensEarned });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};
