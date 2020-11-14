const app = require('./amplify/backend/api/neighapi/server');

app.listen(3000, () => {
  console.log('Listening');
});