export default function (n) {
  for  (let  i = 0 ; i <  n; i++ ) {
    console.log(i);

    for (let j =  i; j <  n; j++ ) {
      console.log(j);

      for (let k =  j; k <  n; k++ ) {
        console.log(k);
      }
    }
  }
}