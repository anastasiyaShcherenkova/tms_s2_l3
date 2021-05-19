
/**  
 * Что должно вывестись в консоль? Подумайте головой, сейчас - ваш моск и есть консоль! 
 * */ 
 
 console.log(19 % 3 + +'6'); /* 7 */
 console.log(i++); /*Если не объявить переменную, то будет Undefined. А мы пытаемся что-то с ней сделать, поэтому консоль будет ругаться.*/
 console.log(+'5p'); /* NuN */
 console.log('pineapple'[4]); /* a */
 console.log('pear'.length); /* 4 */
 console.log([][4]); /* Undefined */
 console.log(['dog', 'fish', 'giraffe', 'hippo'][2][3]); /* a */
 console.log(('0' && 5 > 4 || !'🔥🔥🔥🔥🔥') && '🚀🚀🚀🚀🚀'); /*🚀🚀🚀🚀🚀*/
 console.log(+'6' % 3 === 1 ? 'true' : 'false'); /* false */
 console.log(`сейчас %c${new Date}`, 'color:red'); /*сейчас (тут будет день недели, месяц, дата, время красным цветом) */
  
  
 /**  
  * Конкатенируйте все слова в массиве, которые начинаются с буквы b и выведите результат в консоль  
  * */ 
  
 const arr1 = [34, [], "🔥🔥", "barbecues", "begin", "🚀🚀🚀", "by", "battering", true, "bacon"]; 
 let str = '';
 for (let i = 0; i < arr1.length; i++) {
    if (arr1[i][0] === 'b') str += arr1[i];
 }
 console.log(str);
  
  
 /**  
  * Дана матрица, проставьте 1цы в шахматном порядке 
  */ 
  
 const matrix1 = 
     [ 
         [0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0], 
     ]; 

     for (let i = 0; i < matrix1.length; i++) {
       for (let j = 0; j < matrix1[i].length; j++) {
           if( (i + j) % 2 === 0 ) matrix1[i][j] = 1;
       }
     }
     

    //  for (let i = 0; i < matrix1.length; i++) {
    //     if(i % 2 === 0) {
    //         for (j = 0; j < matrix1[i].length; j += 2) {
    //             matrix1[i][j] = 1;
    //         }
    //     }
    //     else {
    //         for (let j = 1; j < matrix1[i].length; j += 2) {
    //             matrix1[i][j] = 1;
    //         }
    //     }
    //  }

     console.log(matrix1);
  
 /**  
  * Дан пустой массив, создайте матрицу 5х5, заполните её числами по порядку, начиная с 1цы (1, 2, 3, ... 25) 
  */ 
  
 const matrix2 = []; 
 for (let i = 0; i < 5; i++) {
     matrix2[i] = [];
     for (let j = 0; j < 5; j++) {
        matrix2[i][j] = j + 1 + 5 * i;
     }
 }

// let k = 1;

//  for (let i = 0; i < 5; i++) {
//      matrix2[i] = [];
//      for (let j = 0; j < 5; j++) {
//         matrix2[i][j] = k;
//         k++;
//      }
//  }

 console.log(matrix2); 
  
 /**  
  * Посложнее! Есть шахматная доска, расставьте фигуры ('пешка', 'конь' ...) в правильном порядке перед началом игры 
  */ 
  
 const matrix3 = 
     [ 
         [0, 0, 0, 0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0, 0], 
     ];

let figure = ['ладья', 'конь', 'слон', 'король', 'ферзь', 'пешка'];

let n = matrix3.length;

for (let j = 0; j < n / 2; j++) {
    matrix3[0][j] = figure[j];
    matrix3[7][j] = figure[j];
    matrix3[0][n - j - 1] = figure[j];
    matrix3[7][n - j - 1] = figure[j];
}

matrix3[0][n / 2] = figure[4];
matrix3[7][n / 2] = figure[4];

for (let j = 0; j < n; j++) {
    matrix3[1][j] = figure[5];
    matrix3[6][j] = figure[5];
}

console.log(matrix3);
