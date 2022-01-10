const express = require('express');
const app = express();
const uuidAPIKey = require('uuid-apikey');


const server = app.listen(3001, () => {
	console.log("Start server at localhost:3001");
});
//apikey 생성
console.log(uuidAPIKey.create());

//:을 붙일시에 그 뒤에 오는 것은 변수로 받을 수 있음. 
app.get('api/user/:type', async (req, res) => {
	let {type} = req.params;
	
	//받는 변수에 따라서 동작을 달리할 수 있음
	if (type == '2020') {
		let data = [{
			year:"2020", 
			feeling:"happy"
		}];
	} else if (type == '2021') {
		let data = [{
			year:"2021", 
			feeling:"rejoice!"
		}];
	} else {
		res.send('type is not correct');
	}
	//정해진 데이터를 다시 전송한다.
	res.send(data);
});