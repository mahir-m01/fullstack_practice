const validateSignup = (req, res, next) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    return res.status(400).json({ 
      error: "Email, password, and name are required" 
    });
  }

  if (password.length < 8) {
    return res.status(400).json({ 
      error: "Password must be at least 6 characters" 
    });
  }

  next();
};

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ 
      error: "Email and password are required" 
    });
  }

  next();
};

module.exports = { validateSignup, validateLogin };
