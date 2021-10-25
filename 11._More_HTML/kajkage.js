const kajkager = [{
    type: "Andrea",
    color: "blue",
    deliciousness: 8
}];

kajkager.push({
    type: "Kaj",
    color: "green",
    deliciousness: 10
})

console.log(kajkager)

const tableBody = document.getElementById("table-body");

tableBody.innerHTML = "";

kajkager.map(cake => {
    let td = document.createElement("tr");
    let type = document.createElement("td");
    let color = document.createElement("td");
    let deliciousness = document.createElement("td");
    type.innerText = cake.type;
    color.innerText = cake.color;
    deliciousness.innerText = cake.deliciousness.toString();
    td.appendChild(type);
    td.appendChild(color);
    td.appendChild(deliciousness);
    tableBody.appendChild(td);
});

/*kajkager.map(cake => {
    tableBody.innerHTML += `
    <tr>
        <td>${escapeHTML(cake.type)}</td>
        <td>${escapeHTML(cake.color)}</td>
        <td>${escapeHTML(cake.deliciousness.toString())}</td>
    </tr>
    `;
})*/