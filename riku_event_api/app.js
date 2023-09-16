
const btn = document.getElementById('btn');
const eventList = document.getElementById('eventlist');

//「検索ボタン」クリック時にJSONデータ読み込み
btn.addEventListener('click', function() {
  const script = document.createElement('script');
  const keyword = document.getElementById("keyword");
  //入力されたキーワードをURLに追加
  script.src = "https://api.doorkeeper.jp/events?q=" + keyword.value + "&callback=doorkeeper";
  document.body.appendChild(script);
  document.body.removeChild(script);
})

//DoorkeeperのJSONデータ取得
function doorkeeper(data) {
  console.log(data);
  console.log(data.length);

  if(data.length === 0){

      const li = document.createElement('li');
      
      eventList.appendChild(li);
      li.innerHTML = "該当するイベントはありませんでした";

  }
  else{

      for (let i = 0; i < data.length; i++) {

        const li = document.createElement('li');
        const a = document.createElement('a');

        a.textContent = data[i].event.title;
        a.href = data[i].event.public_url;
        a.target = "_blank";
        li.appendChild(a);
        eventList.appendChild(li);

      }

  }

}

