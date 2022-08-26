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

	body=body.replace("\"isFree\":0","\"isFree\":1");
	body=body.replace("\"hasFree\":0","\"hasFree\":1");
$done({body});
