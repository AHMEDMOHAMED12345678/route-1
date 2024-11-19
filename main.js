


var productname = document.getElementById("site_name")
var producturl = document.getElementById("site_url")

 var productlist =[]
 function add(){

if(validationname()&&validationurl())
{
   var product = {
     name:productname.value,
     url:producturl.value
   }
 productlist.push(product)
     display()
}else{
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "data is invalid",
        
      });
}
 }
     

 
function display(){
    var content=``
for(var i=1 ; i<productlist.length; i++){
    content+=` 
<tr>
<td>${[i]}</td>
<td>${productlist[i].name}</td>

<td><a href="${productlist[i].url}"> <button class="btn btn-danger" type="button">visit</button></a></td>
<td> <button onclick="delete_product(${i})" class="btn btn-danger" type="button"> delete <i class="fas fa-trash-can"></i></button></td>
</tr>
`
}
document.getElementById("table-body").innerHTML=content


}

function delete_product(index){

    productlist.splice(index, 1)
    display()
}

function validationname(){
    var  regex = /^[a-zA-Z]\w{3,15}$/i
    var teststring = productname.value
    if(regex.test(teststring)){
productname.classList.add("is-valid")
productname.classList.remove("is-invalid")
return true
    }
    else{
        productname.classList.add("is-invalid")
        return false
    }
}

function validationurl(){
    var  regex =/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}$/
    var teststring = producturl.value
    if(regex.test(teststring)){
producturl.classList.add("is-valid")
producturl.classList.remove("is-invalid")
return true
    }
    else{
        producturl.classList.add("is-invalid")
        return false
    }
}





