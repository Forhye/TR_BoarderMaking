const name = [
  {
    name: "철수",
    age: 18,
  },
  {
    name: "영희",
    age: 19,
  },
  {
    name: "길동",
    age: 20,
  },
  {
    name: "춘향",
    age: 21,
  },
];

const nameCall = (object) => {
  console.log(object.name);
};
name.forEach((item) => {
  nameCall(item);
});

//pk : 고유한 키 값 Primary Key

const food = ["사과", "배", "귤", "바나나"];
const color = ["연두", "칠흑"];

const play = (a, b) => {
  //   console.log("첫번째 인자값", a);
  //   console.log("두번째 인자값", b);
};

play(food, color[0]);

const Exam2 = () => {};

export default Exam2;
