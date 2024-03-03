function outside(){
    var a = 1;
    console.log(1 + a)
    function inside(){
        a = 2
        console.log(2 + a);
    }
    inside();
}
outside();