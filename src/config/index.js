import mongodb from 'mongodb';

export default {
//local env
  // "port": 3005,
  // "mongoUrl": "mongodb://localhost:27017/chat-api",
  "port": process.env.PORT,
  "mongoUrl": "mongodb://admin:123456Aa@ds046037.mlab.com:46037/nht_db_test",
  "bodyLimit": "100kb"
}
