const regex =
  /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

console.log(regex.test('https://www.youtube.com/'));
// true or false

// export const regexUrl = (url: string) => {
//   const regex =
//     /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

//   return regex.test(url);
// };
