const esimPackages = [
  { name: "Japan 5GB", region: "Asia", price: 10 },
  { name: "USA Unlimited", region: "North America", price: 25 },
];

function renderPackages() {
  const table = document.getElementById("esim-packages-list");
  table.innerHTML = "";
  esimPackages.forEach((pkg, index) => {
    const row = `<tr>
      <td>${pkg.name}</td>
      <td>${pkg.region}</td>
      <td>$${pkg.price}</td>
      <td>
        <button onclick="editPackage(${index})">Edit</button>
        <button onclick="deletePackage(${index})">Delete</button>
      </td>
    </tr>`;
    table.innerHTML += row;
  });
}

function editPackage(index) {
  const pkg = esimPackages[index];
  document.getElementById("package-name").value = pkg.name;
  document.getElementById("region").value = pkg.region;
  document.getElementById("price").value = pkg.price;
  deletePackage(index);
}

function deletePackage(index) {
  esimPackages.splice(index, 1);
  renderPackages();
}

document.getElementById("add-esim-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("package-name").value;
  const region = document.getElementById("region").value;
  const price = document.getElementById("price").value;
  esimPackages.push({ name, region, price });
  renderPackages();
  this.reset();
});

renderPackages();