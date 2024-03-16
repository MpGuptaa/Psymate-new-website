const Razorpay = require('razorpay');

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const razorpay = new Razorpay({
			key_id: process.env.RAZOR_PAY_API_KEY_LIVE,
			key_secret: process.env.RAZOR_PAY_API_KEY_SECRET_LIVE,
		});
		const payment_capture = 1;
		const amount = req.body.amount;
		const currency = req.body.currency;
		const options = {
			amount: (amount * 100).toString(),
			currency,
			receipt: `${new Date().getTime()}`,
			payment_capture,
		};

		try {
			const response = await razorpay.orders.create(options);
			res.status(200).json({
				id: response.id,
				currency: response.currency,
				amount: response.amount,
			});
		} catch (err) {
			console.log('Razor Pay Error + ', err);
			res.status(400).json(err);
		}
	}
}
