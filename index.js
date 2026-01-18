import express from 'express';
import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();
const app = express();

// 🔥 MIDDLEWARE WAJIB
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.post('/player/growid/checktoken', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'html', 'token.html'));
});

app.post('/player/growid/login/validate', (req, res) => {
  const token = req.body.growId; // ✅ SESUAI INPUT HTML

  console.log('Token diterima:', token);

res
  .status(200)
  .set('Content-Type', 'application/json')
  .json({
    status: "success",
    message: "Account Validated.",
    token,
    url: "",
    accountType: "growtopia",
    accountAge: 2
  });
});

app.all('/player/login/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'html', 'token.html'));
});

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.use((req, res) => {
  res.status(404).send('<h1 style="color:red; text-align:center;"><i>Page Not Found <br> (404)</i></h1>');
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
