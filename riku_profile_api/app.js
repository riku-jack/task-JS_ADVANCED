
btn.addEventListener("click",function(){
  change();
});

function change(){

let xhr =new XMLHttpRequest();

xhr.open('GET' , 'https://randomuser.me/api/');

xhr.send();

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200){
      let objectAddress = JSON.parse(xhr.responseText);

      //顔の画像
      let faceImg = document.getElementById("face");
      faceImg.src = objectAddress.results[0].picture.large;
      
      //名前
      document.getElementById("name").innerHTML = objectAddress.results[0].name.first + " " + objectAddress.results[0].name.last;
      
      //性別
      let gender = objectAddress.results[0].gender;
      if(gender === "male"){
        document.getElementById("gender").innerHTML = "男性";
      }
      else {
        document.getElementById("gender").innerHTML = "女性";
      }

      //アドレス
      document.getElementById("mail").innerHTML = objectAddress.results[0].email;

    }
}
}
