const getImageKeyThumb = (key) => {
  const splitKey = key.split('/');
  splitKey.pop();
  splitKey.push('1_Thumb');
  const result = splitKey.join('/');
  console.log(`original: ${key}`);
  console.log(`edit: ${result}`);
};

getImageKeyThumb('');

// splitKey.splice(-1, 1); // 삭제된 요소 반환
// const lastDel = splitKey.filter((index) => index < splitKey.length - 1); // 삭제된 배열반환
// console.log(lastDel);
