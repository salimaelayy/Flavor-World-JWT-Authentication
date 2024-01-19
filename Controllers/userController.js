const userModel = require('../Models/user')
const bcrypt = require('bcrypt')

//registration
const register = async (req, res, next) => {
  const { username, password, email } = req.body;

  try {
    const hash = await bcrypt.hash(password, 15);

    const existingUser=await userModel.findOne({ $or: [{ username }, { email }] })
    if(existingUser)
    {
      console.log("already exists");
      return res.status(400).json({message : 'username or email already exists'})
    }
    const newUser = await userModel.create({
      username: username,
      password: hash,
      email: email,
    });

    res.status(200).json({
      data: newUser,
      message: 'New user added successfully',
    });

  } catch (error) {
    console.error(error);
    res.status(400).json({
      error: error.message,
      message: 'Error creating a new user',
    });
  }
};
//login
const login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const userLoggedIn = await userModel.findOne({username: username});

    //checking username
    if (!userLoggedIn) 
    {
      return res.status(400).json({ error: "User doesn't exist" })
    }
    //checking password
    const dbPassword=userLoggedIn.password
    bcrypt.compare(dbPassword,password)
    .then((match)=>{
      if(!match)
      {
        res.status(400).json({ error: "Username or password are incorrect" });
      }
      else
      {
        res.json("You Are Logged In" )
      }
    })
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: error.message,
      message: 'Error during login',
    });
  }
}

//profile
const profile = async (req, res, next) => {
  try {
  } catch (err) {}
}
module.exports = { profile, login, register }
