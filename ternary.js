// // // // var n = 10
// // // //  var str = ' '

// // // //  if(n % 2 === 0){
// // // //     str = 'EVEN'
// // // //  } else {
// // // //     str = 'ODD'
// // // //  }
// // // //  console.log(str)

// // // //  var result = n % 2 === 0 ? 'EVEN' : 'ODD'
// // // //  console.log(result)

// // // // //  conditions ? true side : false side

// // // // logicAndOr->

// // // // forLoop
// // // // var name = ''

// // // // var fullname = name || 'Mominul islam'
// // // // console.log(fullname)

// // // // var isOk = false

// // // // isOk && console.log('Everything is okay')

// // // // for (var i = 0; i<= 100; i++){
// // // //     if(i % 2 === 1){
// // // //         console.log(i)
// // // //     }
// // // // }

// // // // var sum = 0;

// // // // for (var i = 1; i <= 10; i++) {
// // // //     console.log(sum + ' + ' + i + ' = ' + (sum + i))
// // // //     sum += i

// // // // }
// // // // console.log(result = '+ sum')

// // // // WhileLoop

// // // // var i = 0
// // // // while( i < 10){
// // // //     console.log('mominul islam')
// // // //     i++
// // // // }

// // // var isRunning = true

// // // while(isRunning) {
// // //     var rand = Math.floor(Math.random() * 10 + 1)
// // //     if(rand === 9){
// // //         console.log('Winner Winner Chicken Dinner')
// // //    isRunning = false
// // //     } else {
// // //         console.log('you have got' + rand)
// // //     }
// // // }

// // // var isRunning = false

// // // while(isRunning){
// // //     console.log( 'I am Running')
// // // }

// // // do {
// // //     console.log('I am running')
// // // }while(isRunning)

// // // var n = 10
// // // for ( var i = 1; i <= n; i ++) {
// // //     var result = ''
// // // for(var j = 1; j <= i; j ++){
// // //     result += j + ' '
// // // }
// // // console.log(result)
// // // }

// // // var n = 5
// // // for (i = 1; i<= 10; i ++){
// // //     result = ''
// // //     for  (var j = 1; j <= n; j++){
// // //         result += ' * '

// // //     }
// // //     console.log(result)
// // // }

// // // while(true) {
// // //     var rand = Math.floor(Math.random() * 10 + 1)
// // //     if(rand === 9){
// // //         console.log('Winner Winner Chicken Dinner')
// // // break
// // //     } else {
// // //         console.log('you have got' + rand)
// // //     }
// // // }

// // // for (var i = 1; i <= 10; i ++){
// // //     if ( i % 5 === 0 ){
// // //         break
// // //     } else {
// // //         console.log(i)
// // //     }
// // // }

// // // var a = 'I am'
// // // var b = 'Mominul Islam'

// // // var c = a.concat(' ', b)
// // // var d = c.substring(4, 18)
// // // console.log(d)

// // // console.log('  a;lfda;lhfdalkh   '.trim())
// // // console.log(c.split(' '))

// // // var str = 'hello world'
// // // var length = 0

// // // while(true){
// // //     if( str.charAt(length) == '') {
// // //         break
// // //     }else {
// // //          length ++
// // //     }
// // // }
// // // console.log(length)

// // // var arr = [1,2,3,4,5,4,6,8,2]
// // // arr[5]= 8

// // // console.log(arr)
// // // console.log(arr[5])
// // // console.log(arr.length)
// // // console.log(arr[6])

// // // var arr = [1,2,3,4,5,4,6,8,2,7,9]

// // // for ( i = 0; i < arr.length; i++){
// // //     // console.log(arr[i])
// // // arr[i] = arr[i] + 2

// // // }
// // // console.log(arr)

// // // var sum = 0
// // // for (var i =0; i < arr.length; i++) {
// // //     sum += arr[i]
// // // }
// // // console.log(sum)

// // // for(var i =0; i < arr.length; i++){
// // //     if(arr[i] % 2 ===1){
// // //         console.log(arr[i])
// // //     }
// // // }

// // // var arr = [1,2,3,4,5,4,6,8,2,7,9]

// // //  arr[3] = 9
// // // arr.push(9)
// // // arr.unshift(10)
// // // arr.splice(3,0, 1, 5)
// // // arr[3] = null
// // // arr.pop()
// // // arr.shift(1)

// // // arr.splice(3, 1, 60)
// // // console.log(arr)

// // // var arr = [3,6,'hello',7,1,56,87,91,58,24,100]

// // // var find = 'hello'
// // // var isFound = false

// // // for(var i = 0; i < 10 ; i++){
// // //     if(arr[i] === find ) {
// // //         console.log('Data fount at index' + ' ' + i)
// // //     isFound = true
// // //     break
// // //     }
// // // }
// // // if(!isFound){
// // //     console.log('data not found')
// // // }

// // //Multi Dimensional Array

// // // var arr = [
// // //   [50, 70, 80, 79],
// // //   [80, 78, 93, 45],
// // //   [78, 75, 78, 34],
// // // ];
// // // // console.log(arr[0][0])
// // // // console.log(arr[1][3])

// // // for (var i = 0; i < arr.length; i++) {
// // //   for (var j = 0; j < arr[i].length; j++) {
// // //       console.log("Element" + i + ":" + arr[i][j]);
    
// // //   }
// // // }

// // //Reverse an array

// // // var arr = [1,2,3,4,5,6,7]

// // // // for (var i = 0; (i<arr.length / 2); i++){
// // // //     var temp = arr[i]
// // // //     arr[i] = arr[arr.length -1 -i]
// // // //     arr[arr.length -1 -  i] = temp
// // // // }

// // // console.log(arr.reverse())

// // var arr = [5,7,9,1]
// // var arr2 = [52,7,92,12]

// // // console.log(arr.join(' | '))

// // // arr.fill(true)
// // var arr3 = arr.concat(arr2)

// // console.log(arr3)

// // // console.log(Array.isArray(arr))
// // var arr2 = Array.from(arr)
// // console.log(arr2)

// // var a = [1,2]
// // var b = Array.from(a)

// // b[0] = 5
// // console.log(a)
// // console.log(b)

// //object in javascript

// // var obj = {}
// // obj.x = 10
// // console.log(obj)

// // var bioData = {
// //     name : 'mominul islam',
// //     email: 'mominul@hridoy',
// //     age : 20 
// // }
// // console.log(bioData)

// //functional database

// // function add (a, b ){
// //     const result = a - b 
// // console.log(result)
// // }
// //  add(20, 5)

// // arrayFunction

// // var arr1 = [1,5,7]
// // var arr2 = [3,7,2]
// // var arr3 = [6,8,7]

// // function sumArray (arr){
// //     var sum = 0
// //     for (var i = 0; i < arr1.length; i++){
// //         sum += arr[i]
// //     }
// //     console.log(sum)

// // }
// // sumArray(arr1) 
// // sumArray(arr2) 
// // sumArray(arr3) 

// setTimeout(() => {
//     console.log('hello world')
// },2000);

var arr = [1,2,3,5,4]

// var sum = arr.reduce (function (prev, curr) {
//     return prev + curr
// } )
// var maxValue = arr.reduce (function (prev, curr) {
// return Math.max(prev, curr)
// }, 0)

function myReduce ( a, b, c) {
    for (var i =0; i<arr.length; i ++){
        c = b(c, arr[i])
    }
    return c
}

var sum = myReduce(arr, function(prev, curr) {
    for (var i = 0; i < arr.length; i ++)
    return prev + curr
}, 0)

var max = myReduce(arr, function(prev, curr) {
    return Math.max (prev , curr)
}, 0)

var min = myReduce(arr, function(prev, curr) {
    return Math.min (prev, curr)
}, arr[0])

console.log(max)
console.log(min)
console.log(sum)
