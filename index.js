function receivesAFunction(callBack) {
    return callBack()
}

function namedFunction() {
    console.log("name")
}

function returnsANamedFunction() {
    return namedFunction
}

function returnsAnAnonymousFunction(){
    return function(){

    }
}

