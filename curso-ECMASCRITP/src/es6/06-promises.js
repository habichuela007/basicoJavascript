const anotherFunction = () => {
    return new Promise((resolve,reject)=>{
        if(false) {
            resolve('Hey');
        }else{
            reject('NEl');
        }
    })
}

anotherFunction()
    .then(response => console.log(response)) //; borrar el punto y como para que se concatene, pueden haber varios /then
    .catch(err => console.log(err));