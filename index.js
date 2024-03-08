// console.log("connected 🎉");
document.title = "Upskillz Lib 👋";
const tbody = document.getElementsByTagName("tbody")[0];
const form = document.getElementsByClassName('form')[0];
form.addEventListener('submit', formsubmit);
// Got data from form





function formsubmit(e) {

    e.preventDefault();
    getFormData();
    form.reset();
}

function getFormData() {
    const BookName = document.getElementById("exampleInputEmail1").value;
    const Author = document.getElementById("exampleInputPassword1").value;

    const Coding = document.getElementById("btnradio1")
    const Adventure = document.getElementById("btnradio2")


    var Type = ""
    if (Coding.checked) {
        Type = "Coding"
    } else if (Adventure.checked) {
        Type = "Adventure"
    } else {
        Type = "Friction"
    }

    const BookData = {
        BookName,
        Author,
        Type
    }
   
    if (BookName.length > 2 && Author.length > 2) addTableData(BookData);
    else alert("Add all book details")

}
let counter = 0
// Table data
function addTableData(data) {
    counter++
    tbody.innerHTML += `
        <tr>
            <th scope="row">${counter}</th>
            <td> ${data.BookName} </td>
            <td> ${data.Author} </td>
            <td> ${data.Type} </td>
            <td> <i class="fi fi-rr-trash h3 " onclick="DeleteRow(this)" ></i> </td>
        </tr>
`
}

function DeleteRow(d) {
    console.log(d.parentNode.parentNode.rowIndex);
    tbody.deleteRow(d.parentNode.parentNode.rowIndex-1)

}