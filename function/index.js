function callMyName(name, callback) {
  var mayAge = 20;
  callback(mayAge);
console.log("Is it interseting? yes it is Mr." + name);
}
function hello(age) {
 console.log("I am passed through argument and my age is:" + age);
}
callMyName("zonayed Ahmed", hello);
 
