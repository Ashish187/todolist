function getAndUpdate() {
    console.log("Updated");
    desc = document.getElementById('desc').value;
    time = document.getElementById('time').value;
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        itemJsonArray.push([desc, time]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([desc, time]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    update();
}

function update() {
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
    }
    // Populate the table
    let tableBody = document.getElementById("tableBody");
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `
            <tr>
            <th scope="row" class="bottom">${index + 1}</th>
            <td class="bottom">${element[0]}</td>
            <td class="bottom">${element[1]}</td> 
            
            <td class="bottom"><button type="button" id="delete" onclick="comp(${index})">mark</button></td> 
            <td class="bottom"><button type="button" onclick="deleted(${index})">Deleted</button></td>
            </tr>`;
    });
    tableBody.innerHTML = str;
}

    var todaytime = new Date(document.getElementById('time').value)
    var lapptime = new Date()
    if(todaytime>lapptime){
        var result = "You forgot me"
        document.getElementById('output').style.color = "red"
    }
    document.getElementById('output').innerHTML = result;



add = document.getElementById("btn");
add.addEventListener("click", getAndUpdate);
update();

function deleted(itemIndex) {
    itemJsonArrayStr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);
-    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();
}

