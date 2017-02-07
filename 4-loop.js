// for (var count = 0; count <= 10; count++){
	// console.log(count);
// }

// 100 -> 0 (skip 5)
// for ( var count = 100; count >= 0; count -= 5){
	// console.log(count);
// }

// var beatles = [ "john", "paul", "ringo", "george"];

// beatles.forEach(function(beatle){
// 	console.log(beatle);
// });

var instruments = {
	john: "guitar",
	paul: "bass",
	ringo: "drums",
	george: "guitar",
};
Object.keys(instruments).forEach(function(name){
	console.log(instruments[name]);
});