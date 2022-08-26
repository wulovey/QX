/*
xiaoma

***************************
QuantumultX:

[rewrite_local]
^https:\/\/api\.xiaomapeilian\.com\/(ai-app-api\/v1\/book\/previewMusic|ai-app-api\/v1\/book\/musicList|ai-app-api\/v1\/pianoTrain\/getSimpleDate) url script-response-body https://raw.githubusercontent.com/wulovey/QX/main/xiaoma.js

[mitm]
hostname = api.xiaomapeilian.com

***************************

**************************/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const api_1 = '/ai-app-api/v1/book/previewMusic';
const api_2 = '/ai-app-api/v1/pianoTrain/getSimpleDate';
const api_3 = '/ai-app-api/v1/book/musicList';

if (url.indexOf(api_1) != -1 || url.indexOf(api_2) != -1 || url.indexOf(api_3) != -1) {
	obj.data["isFree"] = 1;
	obj.data["hasFree"] = 1;
	body = JSON.stringify(obj);
}
$done({body});
