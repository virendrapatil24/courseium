import jwt from "jsonwebtoken";

export function generateToken(payload) {
  try {
    const token = jwt.sign(payload, process.env.SECRET_KEY);
    return { token };
  } catch (error) {
    return { error: "Token generation failed" };
  }
}

export function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    return { decoded };
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return { error: "Token expired" };
    } else if (error instanceof jwt.JsonWebTokenError) {
      return { error: "Invalid token" };
    } else {
      return { error: "Token verification failed" };
    }
  }
}

export function isAuthenticated(req, res, next) {
  const { token } = req.headers;

  if (!token) {
    res.status(401).json({ error: "Access denied, no token provided" });
    return;
  }

  const { error, decoded } = verifyToken(token);

  if (error) {
    res.status(400).json({ error });
    return;
  }

  req.user = decoded;
  next();
}
