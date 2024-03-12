require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const server = express();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
var bodyParser = require("body-parser");
let dbUpdates = 0;

const defaultImg = require("./defaultImg");
const defaultUserImage = defaultImg.img;

server.use(bodyParser.json({ limit: "5mb" }));
server.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));
server.use(bodyParser.text({ limit: "5mb" }));

server.use(express.json());
server.use(cors());

server.listen(8080, () => {
  console.log("Server running.");
});
mongoose.connect(process.env.MONGODB_URI, { dbName: "ChatRoom" });

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    index: true,
  },
  avatar: String,
  username: String,
  password: String,
  name: String,
  lastName: String,
  activationLink: String,
  webAcces: String,
  verifiedEmail: Boolean,
  verifiedAccount: Boolean,
});

const conversationSchema = new mongoose.Schema({
  creator: String,
  partner: String,
  participants: Array,
  creationDate: Date,
  messages: Array,
  lastMessage: String,
  lastMessageData: Date,
});

const Conversation = new mongoose.model("Conversation", conversationSchema);
const User = new mongoose.model("User", userSchema);

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: process.env.MAIL_BOX,
    pass: process.env.MAIL_PASS,
  },
  secure: true,
});

let generatedActivationLink;

server.post("/registerUser", async (req, res) => {
  let responseMessage = {};
  const email = req.body.userEmail;
  const username = req.body.userUsername;
  const password = req.body.userPassword;
  const userExists = await User.findOne({ email: email }).exec();
  if (userExists) {
    responseMessage = { result: 0, message: "Toks vartotojas jau egzistuoja" };
    console.log("Jau egzistuoja");
  } else {
    let hashedPassword = "";
    await bcrypt
      .hash(password, saltRounds)
      .then((hash) => (hashedPassword = hash))
      .catch((err) => console.err(err.message));

    function makeActivationString(length) {
      let result = "";
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
        counter += 1;
      }
      return result;
    }

    generatedActivationLink = makeActivationString(30);

    User.create({
      email: email,
      avatar: defaultUserImage,
      username: username,
      password: hashedPassword,
      name: "",
      lastName: "",
      activationLink: generatedActivationLink,
      webAcces: "Vartotojas",
      verifiedEmail: false,
      verifiedAccount: false,
    });

    responseMessage = {
      result: 1,
      message:
        "Vartotojas sėkmingai užregistruotas. Paštu išsiųsta aktyvacijos nuoroda.",
    };
    console.log("Sukurtas");
  }

  const mailHTML = `<h1>Chat Room vartotojo registracijos patvirtinimas</h1><span>Norint aktyvuoti paskyrą spauskite nuorodą:</span><a href="#">Aktyvuoti vartotoją</a>`;

  const mailData = {
    from: "chatroommailbox@gmail.com",
    to: email,
    subject: "ChatRoom registracijos patvirtinimas",
    html: mailHTML,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.send(JSON.stringify(responseMessage));
});

server.post("/resetPassword", async (req, res) => {
  const userEmail = req.body.email;
  const userExists = await User.findOne({ email: userEmail }).exec();
  let response;
  if (userExists) {
    response = {
      message:
        "Nurodytu elektroniniu paštu išsiųsta nuoroda slaptažodžio pakeitimui.",
    };

    const mailHTML = `<h1>Chat Room vartotojo slaptažodžio keitimas</h1><span>Norint pakeisti paskyros slaptažodį spauskite ant nuorodos:</span><a href="#">Pakeisti slaptažodį</a>`;

    const mailData = {
      from: "chatroommailbox@gmail.com",
      to: userEmail,
      subject: "ChatRoom Slaptažodžio keitimas",
      html: mailHTML,
    };
    transporter.sendMail(mailData, function (err, info) {
      if (err) console.log(err);
      else console.log(info);
    });
  } else {
    response = {
      message: "Vartotojo su tokiu elektroninio pašto adresu nėra.",
    };
  }
  res.send(JSON.stringify(response));
});
function generateAccesToken(email) {
  return jwt.sign(email, process.env.TOKEN_SECRET, { expiresIn: "86400s" });
}
server.post("/login", async (req, res) => {
  const userEmail = req.body.email;
  const userPassword = req.body.password;
  const userExists = await User.findOne({ email: userEmail }).exec();
  let authenticated = false;
  if (!userExists) {
    resMessage = "Tokio vartotojo nėra";
  } else {
    //vartotojas yra
    console.log("vartotojas yra");
    const userHashedPassword = userExists.password;
    authenticated = bcrypt
      .compare(userPassword, userHashedPassword)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  if (authenticated) {
    let data = {
      signInTime: Date.now(),
      email: userEmail,
    };

    const token = generateAccesToken({ data });
    res.json({ message: "succes", token });
  } else {
    res.send({ error: "Klida" });
  }
});

server.get("/getUserInfo/:userEmail", async (req, res) => {
  const userEmail = req.params.userEmail;
  const user = await User.findOne({ email: userEmail }).exec();
  res.send(JSON.stringify(user));
});

server.post("/updateProfile", (req, res) => {
  const body = req.body.updateQuery;

  const userToUpdate = body[0].userEmail;
  let userImage;
  let updateQuery = {
    username: body[1].userUsername,
    name: body[2].userName,
    lastName: body[3].userLastName,
  };
  if (body[4]) {
    userImage = body[4].userImage.selectedFile;
    updateQuery = {
      ...updateQuery,
      avatar: userImage.substring(22),
    };
  }

  User.updateOne({ email: userToUpdate }, updateQuery).exec();
  dbUpdates++;
});

server.get("/getAllUsers/:userEmail", async (req, res) => {
  const userEmail = req.params.userEmail;
  const allUsers = await User.find({ email: { $ne: userEmail } }).exec();
  res.json(allUsers);
});

server.post("/createConversation/", async (req, res) => {
  const body = req.body;
  const filterParams = { creator: body.creator, partner: body.partner };
  const conversationExists = await Conversation.findOne(filterParams).exec();
  if (conversationExists === null) {
    const secondFilter = { creator: body.partner, partner: body.creator };
    const conversationExists2 = await Conversation.findOne(secondFilter).exec();
    if (conversationExists2 === null) {
      //create new one
      Conversation.create({
        creator: body.creator,
        partner: body.partner,
        participants: [body.creator, body.partner],
        creationDate: Date.now(),
        messages: [],
        lastMessage: "",
        lastMessageData: Date.now(),
      });
      console.log("conversation created");
      dbUpdates++;
    } else {
      console.log("conversations exists");
    }
  } else {
    console.log("conversations exists");
  }
});

server.get("/getConversations/:userEmail", async (req, res) => {
  const requestedUser = req.params.userEmail;
  const conversations = await Conversation.find({})
    .or([{ creator: requestedUser }, { partner: requestedUser }])
    .exec();
  res.json(conversations);
});

server.get("/getConversationData/:convoData", async (req, res) => {
  if (req.params.convoData === "null") {
    res.json({ message: "Duomenu nera" });
  } else {
    const conversationId = req.params.convoData;
    const convoData = await Conversation.findOne({
      _id: conversationId,
    }).exec();
    res.json(convoData);
  }
});

server.post("/updateConversation", async (req, res) => {
  const body = req.body;
  const conversationId = body.convoId;
  const author = body.author;
  const time = body.time;
  const message = body.message;

  await Conversation.updateOne(
    { _id: conversationId },
    { $push: { messages: { author: author, time: time, message: message } } }
  );
  dbUpdates++;
  res.send("updated");
});

server.get("/updates", (req, res) => {
  let localDbUpdates = 0;
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  // Send a dummy event to establish the connection
  res.write("data: connected\n\n");
  const intervalId = setInterval(() => {
    //check if DB has new entries, then send

    if (localDbUpdates != dbUpdates) {
      res.write(`data: Update at ${new Date().toLocaleTimeString()}\n\n`);
      localDbUpdates = dbUpdates;
    }
  }, 500); // Send an update every 5 seconds
});

server.get("/pingServer", (req, res) => {
  dbUpdates++;
  res.send("done");
});

server.get("/loadUserData/:userEmail", async (req, res) => {
  const user = await User.findOne({ email: req.params.userEmail }).exec();
  const converstaions = await Conversation.find({
    participants: req.params.userEmail,
  }).exec();

  const exportObject = {
    userID: user._id,
    userEmail: user.email,
    userAvatar: user.avatar,
    userUsername: user.username,
    userName: user.name,
    userLastName: user.lastName,
    webAcces: user.webAcces,
    verifiedEmail: user.verifiedEmail,
    verifiedAccount: user.verifiedAccount,
    conversations: converstaions,
  };
  res.send(exportObject);
});
