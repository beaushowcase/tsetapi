const express = require('express');
const app = express();
const port = 3000;

// Middleware for authentication
const authenticate = (req, res, next) => {
  const apiKey = req.query.apiKey;
  console.log('Received API Key:', apiKey);  // Add this line for debugging

  if (apiKey === '4b3f6b51-czpu-5792-cyfd-313c190b858bs') {
    next(); // Authentication passed, proceed to the next middleware or route
  } else {
    res.status(401).send('Unauthorized'); // Authentication failed
  }
};


// Apply the authentication middleware globally for all routes
app.use(authenticate);

// Define a route with dynamic value (firmname)
app.get('/nodeapi/:firmname', (req, res) => {
  const firmname = req.params.firmname;
  res.send(`Hello, welcome to the APIdddd for ${firmname}!`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
