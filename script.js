
let a = new Promise(function(resolve){
	setTimeout(function(){
		resolve("a");
	},1000)
});
let b = new Promise(function(resolve){
	setTimeout(function(){
		resolve("b");
	},2000)
});
let c = new Promise(function(resolve){
	setTimeout(function(){
		resolve("c");
	},3000)
});
let d = new Promise(function(resolve){
	setTimeout(function(){
		resolve("d");
	},4000)
});
let e = new Promise(function(resolve){
	setTimeout(function(){
		resolve("e");
	},5000)
});
let x = Promise.any([a,b,c,d,e]);
x.then(function(data){
	const div = document.getElementById("output");
	div.innerText = data;
	
})
// Do not change the code above this
// add your promises to the array `promises`

window.promises = [a,b,c,d,e];