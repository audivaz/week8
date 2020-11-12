

// 6



const request = ('http://my-website.com/about/info?userid=1&page=3');



const myURL = new URL(request);
    console.log(myURL);
    console.log(myURL.href);
    console.log(myURL.host);    
    console.log(myURL.pathname);

    console.log(myURL.userid);

let params = new URLSearchParams (myURL.search.user);
let name = params.get('name');
    console.log(name);

