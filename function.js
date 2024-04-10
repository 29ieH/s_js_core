// b1
// const ex1 = (arr) => {
//     let max = 0;
//     let min = arr[0];
//     arr.forEach(item => {
//       if(max<item)
//         max = item;
//       if(min>item)
//         min = item;
//     });
//     let result = [max,min]
//     return result;
// }
// console.log(ex1([2,3,4,5]));
// // b2 
// const ex2 = (text) => {
//     let textArr = text.split(" ");
//     let index = textArr[0];
//     let result;
//     textArr.forEach((item) => {
//         if(index<item.length){
//             result = item
//             index = item.length
//         }
//     })
//     return result;
// }
// console.log(ex2("Co thui dep gai zz"))
// //b3
// const ex3 = (text) => {
//    let result = "";
//    for(let i = text.length-1 ; i >=0 ; i--){
//     result += text[i];
//    }
//    return result;
// } 
// console.log(ex3("abc"))
//b4 
const ex4 = (arr) => {
    let min;
   for(let i = 0 ; i < arr.length-1; i++){
        min = i;
    for(let j = i+1 ; j < arr.length; j++){
       if(arr[min]>arr[j]){
         min = j;
       }
    }
    if(i!=min){
        swap(arr[min],arr[i]);
    }
   }
}
const swap = (ele1,ele2) => {
    let temp = ele1;
    ele1 = ele2;
    ele2 = temp;
}
let arr1 = [1,5,4,2]
ex4(arr1)
for(let index in arr1){
    console.log(arr1[index])
}
