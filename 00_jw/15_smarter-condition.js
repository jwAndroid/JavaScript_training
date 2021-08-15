const anmimal = (animals, action) => {
  const animalSound = {
    강아지: (action) => {
      console.log("멍멍멍" + action);
      //키가 true일때 구현부
      //action은 파라메터
    },

    고양이: (action) => {
      console.log("냥" + action);
    },

    앵무새: (action) => {
      console.log("ㅋ" + action);
    },
  };

  const key = animalSound[animals]; // 객체의 키

  return key ? key(action) : console.log("...?");
};

anmimal("강아지", " 나는 동물입니다.");
