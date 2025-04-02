export default function handler(req, res) {
  const { username, password } = req.body;
  if (username === "admin" && password === "passwort123") {
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
}
