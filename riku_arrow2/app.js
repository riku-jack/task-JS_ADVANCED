
const getRandom = () => {
  var num = 1 + Math.floor( Math.random() * 3 );
  return num;
}

const test = () => {

  if(getRandom() === 1){
    console.log("大当たり");
  }
  else if(getRandom() === 2){
    console.log("当たり")
  }
  else{
    console.log("外れ")
  }

}

test();
