const { createToken, validateUser, createUser } = require("./service");

const login = (req, res) => {
  try {
    const { email, password } = req.body;
    const user = validateUser(email, password);
    
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = createToken(user);
    res.json({ token, user });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const signup = (req, res) => {
  try {
    const { email, password, name } = req.body;
    
    const user = createUser(email, password, name);
    
    if (!user) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const token = createToken(user);
    res.status(201).json({ token, user });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProfile = (req, res) => {
  try {
    const userId = req.user.id;
    res.json({ 
      message: "This is a protected route",
      userId: userId 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { login, signup, getProfile };
