function notasAluno(callback) {
    let n1 = 3
    let n2 = 5
    callback(n1,n2)
  }
  let result
  notasAluno(function (n1){
    result = n1
  })
  
  
  console.log(result)
  
  