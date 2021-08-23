let signupuser=  ()=>{
  
  let username=document.getElementById("username");
  let email=document.getElementById("email");
  let password=document.getElementById("password");
  let phone=document.getElementById("phone");
  let country=document.getElementById("country")
  let city=document.getElementById("city")
  let message=document.getElementById("message")

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((res) => {
    let user={
      username:username.value,
        email:email.value,
        password:password.value,
        phone:phone.value,
      country:country.value,
      city:city.value
    }
    firebase.database().ref(`users/${res.user.uid}`).set(user)
                .then(() => {
                    alert("User has been registered")
                    window.location = "loginrestaurant.html"
                    
                })
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });

  
}


let loginuser=()=>{
  let uname=document.getElementById("username");
  let email=document.getElementById("email");
  let password=document.getElementById("password");

  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
.then((res) => {
  firebase.database().ref(`users/${res.user.uid}`).once('value',(data)=>{
    alert("Login");
    window.location="userdb.html"
  })
})
.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
  // ..
});
  
}




let signuprestaurant=  ()=>{
  let restaurantname=document.getElementById("restaurantname");
  let email=document.getElementById("email");
  let password=document.getElementById("password");
  let phone=document.getElementById("phone");
  let country=document.getElementById("country")
  let city=document.getElementById("city")
  let message=document.getElementById("message")

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((res) => {
    let user={
        restaurantname:restaurantname.value,
        email:email.value,
        password:password.value,
        phone:phone.value,
      country:country.value,
      city:city.value
    }
    firebase.database().ref(`restaurant/${res.user.uid}`).set(user)
                .then(() => {
                    alert("User has been registered")
                    window.location = "loginrestaurant.html"
                    
                })
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
    
}
  

let loginrestaurant=()=>{
    let email=document.getElementById("email");
    let password=document.getElementById("password");

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((res) => {

    firebase.database().ref(`restaurant/${res.user.uid}`).once('value',(data)=>{
      alert("Login");
      window.location="restaurantdb.html"
    })
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
    
}




//dishes


// function add_dishes(){
//     var dishes_item = document.getElementById("dishes-item");
//     // console.log(dishes_item.value)

//     // CREATE LI USING TEXT NODE 

//     var li = document.createElement("li");
//     var liText = document.createTextNode(dishes_item.value);
//     li.appendChild(liText)

//     // create delete btn 

//     var btndlt = document.createElement('button');
//     btndlt.className="buttondelete"
//     var btnText = document.createTextNode('Delete Item');
//     // btndlt.setAttribute("class",'btn')
//     btndlt.setAttribute("onclick",'delItem(this)')
//     btndlt.appendChild(btnText);

//     // create Edit btn dishes Item 

//     var editBtn = document.createElement('button');
//     editBtn.className="editbutton"
//     var editText = document.createTextNode('Edit');
//     editBtn.setAttribute('onclick','edit_btn(this)')
//     editBtn.appendChild(editText);

//     li.appendChild(editBtn)


//     li.appendChild(btndlt)
//     list.appendChild(li)
//     // console.log(li)
//     dishes_item.value = "";
    
// }



function delItem(e){
    e.parentNode.remove()
}
function dltall(){
    list.innerHTML="";
}

function edit_btn(a){
    var edit = prompt('enter your edit value');
    a.parentNode.firstChild.nodeValue = edit
}



var list = document.getElementById('list');

const add_dishes=()=>{
  var dishes_item = document.getElementById("dishes-item");
  console.log(dishes_item.value)

  var div = document.createElement("div");

  const img=document.createElement("img")
  img.src="https://source.unsplash.com/200x200/?food"

  const name=document.createElement("p")
  name.className="fontsize"
  const liText=document.createTextNode(dishes_item.value)
  name.appendChild(liText)

  const menu_details=document.createElement("p")
  menu_details.className="fontsize"
  const menudtail_text=document.createTextNode(" with Russian salad")
  menu_details.appendChild(menudtail_text)

  const price=document.createElement("p")
  price.className="fontsize"
  const pricetext=document.createTextNode("1650")
price.appendChild(pricetext)

div.appendChild(img)
div.appendChild(name)
div.appendChild(menu_details)
div.appendChild(price)

list.appendChild(div)
  
}
