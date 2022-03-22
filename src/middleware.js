const jwt = require("jsonwebtoken");

const { JWT_SECRET } = require("./config");

const auth = (req, res, next) => {
	const token = req.query.token || req.headers["access-token"];

	if (!token) {
		return res.status(403).send({ error: "token is required." });
	}
	try {
		const decoded = jwt.verify(token, JWT_SECRET);
		req.user = decoded;
	} catch (err) {
		return res.status(401).send({ error: "Invalid Token" });
	}
	return next();
};

module.exports = { auth };
