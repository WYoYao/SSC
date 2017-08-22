
function fn(str){
    if(/[a-zA-Z]/.test(str))return +'a';
    var s = str.split(/\./g);
    return s.length?s[0]:0;
}

console.log(fn("123123.123sfdsdf123"));
console.log(fn("123123.123"));


Array.prototype.map.call("asdasda",item=>console.log(item));

function fn(str){
    if(/[a-zA-Z]/.test(str))return +'a';
    return Array.prototype.map.call(str.split(/\./)[0],item=>item)
    .reverse()
    .reduce((content,item,index)=>{
        return content+item*Math.pow(10,index);
    },0);
}
console.log(1111);
console.log(fn("123123.123123"));