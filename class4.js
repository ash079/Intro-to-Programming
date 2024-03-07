//padma,meghna,jamuna
//**array using */
// var ar1=[]
// ar1[0]="Padma"
// ar1[1]="Meghna"
// ar1[5]="Titas"
// console.log("my length is", ar1.length)



////////////***By using a loop, write a code that takes 5 numbers from the user. Display both the sorted and unsorted versions of the numbers.
var numList= [4,6,3,2,8]
console.log("my unsorted list is",numList)
console.log("my sorted list is", numList.sort())

var river=['a','d','s','b']
console.log(river)
**name sorting */
var riverlist= ["Padma", "Ash","Bulbul"]
console.log("sorted", riverlist.sort())


var numList= [4,6,3,2,8]
for (var i = 0; i < landUseType.length; i++) {
    console.log(numList)
  }


//Write a code that stores the elements of the above 2D array in a 1D array. Display the final 1D array. 
var mat = [
    [2, 7, 89, 6],
    [90, 45, 3, 7],
    [78, 56, 4, 2]
  ];
  
  for (var i = 0; i < mat.length; i++) {
    for (var j = 0; j < 4; j++) {
      console.log(mat[i][j]);
    }
  }


//**Write a code that will increase the value of each element in this matrix by 1.  Display both the original and increased matrix.  */
var ar= [ [1, 2, 3],

[4, 5, 6],

[7, 8, 9] ]

var ar2 = [];
for (var i = 0; i < ar.length; i++) {
  ar2[i] = [];
  for (var j = 0; j < ar[i].length; j++) {
    ar2[i][j] = ar[i][j] + 1;
  }
}
    console.log("original matrix",ar)
console.log("increased matrix",ar2)


var ar= [4,6,3,2,8]
 for (var i = 0; i < ar.length; i++){
   console.log(ar[i])
 }
 console.log("outside the loop")