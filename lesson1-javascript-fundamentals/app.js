// app.js 
import ApiKey from "./util.js";
console.log(ApiKey);// util.js 에서 export 한 ApiKey를 import 해서 사용 
document.querySelector("#keyInfo").innerHTML = ApiKey;