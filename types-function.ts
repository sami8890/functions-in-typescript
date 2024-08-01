const myobj = {
    hobbies :[ "abdullah " ,"sami " ," gabol"], 
    func:() => {
        myobj.hobbies.shift();
    }
    }
    
    myobj.func();
    const myAnswer = myobj.hobbies[1];
    
    console.log(myAnswer);
    console.log(`------------------------------------`);
    
    // self invocating function
    // and its also called annonymous function
    
    (
    
        function() : void{
            return console.log( "sami" );
            
        } ()
    
        
    )
    console.log(`--------------------------------`);
    // function expression
    
    // myFunc(); // we can not call function expression without declaring it
    const myFunc = function () : void {
        console.log( `sania` );
        console.log(`---------------------`);
        
    }
    
    myFunc();
    
    // function decleration with hoisting 
    myFunc2();  // we can call it before declaring it
    function myFunc2 () :void{
        console.log("sami");
        
    }