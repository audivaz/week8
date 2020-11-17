// 6

const request = "http://my-website.com/about/info?userid=1&page=3";

const myURL = new URL(request);
console.log(myURL);
console.log(myURL.href);
console.log(myURL.host);
console.log(myURL.pathname);

console.log(myURL.userid);

let params = new URLSearchParams(myURL.search.user);
let name = params.get("name");
console.log(name);

//! For the two searchParams questions, you call these by simply starting with the object you instantiated (myURL), followed by the method(s) you wish to use
//! In this case, its searchParams.get() and searchParams.has(). Inside the method paramaters, you specify the string of what you are looking for. Answer below:

/*
console.log(myURL.searchParams.get("userid"));
console.log(myURL.searchParams.has("page"));
*/
