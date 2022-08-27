/*
xiaoma

***************************
QuantumultX:

[rewrite_local]
^https:\/\/api\.xiaomapeilian\.com\/(ai-app-api\/v1\/book\/previewMusic|ai-app-api\/v1\/book\/musicList|ai-app-api\/v1\/pianoTrain\/getSimpleDate) url script-response-body https://raw.githubusercontent.com/wulovey/QX/main/xiaoma.js

[mitm]
hostname = dss.xiaoyezi.com

***************************

**************************/

var body = $response.body
    .replace("\"student_status\":\d", "\"student_status\":2")
$done({ body });
