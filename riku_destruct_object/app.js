const myTask = {
  deadline: "2021-04-30",
  taskName: "オブジェクトの分割代入を実装",
  task: "設計書に従って、オブジェクトの分割代入を実装する"
};

const {deadline:a,taskName:b,task:c} = myTask;

console.log(`締め切り日:${a}`);
console.log(`タスク名:${b}`);
console.log(`タスク内容:${c}`);