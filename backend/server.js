const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

let esimPackages = [
  { id: 1, name: "Japan 5GB", region: "Asia", price: 10 },
  { id: 2, name: "USA Unlimited", region: "North America", price: 25 }
];

// Get all packages
app.get('/api/packages', (req, res) => {
  res.json(esimPackages);
});

// Add a package
app.post('/api/packages', (req, res) => {
  const newPkg = { id: Date.now(), ...req.body };
  esimPackages.push(newPkg);
  res.json(newPkg);
});

// Delete a package
app.delete('/api/packages/:id', (req, res) => {
  const pkgId = parseInt(req.params.id);
  esimPackages = esimPackages.filter(pkg => pkg.id !== pkgId);
  res.json({ success: true });
});

// Update a package
app.put('/api/packages/:id', (req, res) => {
  const pkgId = parseInt(req.params.id);
  esimPackages = esimPackages.map(pkg =>
    pkg.id === pkgId ? { ...pkg, ...req.body } : pkg
  );
  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`eSIM Store backend listening on http://localhost:${port}`);
});
