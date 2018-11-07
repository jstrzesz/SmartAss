const mongoose = require('mongoose');
//const config = require('../config/config')†

var db = mongoose.connection;

//NOTE: uncomment to drop database
// mongoose.connect('mongodb://localhost/fetcher', () => {
//   mongoose.connection.db.dropDatabase();
// })


//FIXME: remember to add a process.env here for mlabs deploy
// const mongoDB = `mongodb://user:tron22@ds153552.mlab.com:53552/smartass`;
const mongoDB = 'mongodb://dev_user:dev_user1@ds253713.mlab.com:53713/smartass_users'
//process.env.MONGODB_URI;
//mongoose.Promise = global.Promise;
mongoose.connect(mongoDB, {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  //deprecation warning fix12
  useNewUrlParser: true,
});
//deprecation warning fix

mongoose.set('useCreateIndex', true);


db.on('error', function () {
  console.log('mongoose connection error:');
});

db.once('open', function () {
  console.log('mongoose connected successfully');
});

const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  userEmail: String,
  userPassword: String,
  wins: Number,
  losses: Number,
  gamesPlayed: Number,
  averageWinRate: Number,
});

const User = mongoose.model('User', userSchema);

const queryUser = User.find();

const findUser = callback => {
  queryUser.limit(10).select('username averageWinRate wins losses').exec(callback);
}

const getUser = callback => {
  queryUser.select('userEmail').exec(callback);
}

const getUserByEmail = email => {
  User.find({ email: email})
}

const userCheck = callback => {
  queryUser.select('username userEmail userPassword').exec(callback);
}

module.exports.User = User;
module.exports.findUser = findUser;
module.exports.userCheck = userCheck;
module.exports.getUser = getUser;
module.exports.getUserByEmail = getUserByEmail;
