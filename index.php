<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>	
	<link rel="stylesheet" href="css/materialize.min.css">
	<link rel="stylesheet" href="css/app.css">
	<link rel='stylesheet' href='css/icon.css'>
	<script src="js/libs/query-3.3.1.min.js"></script>
	<script src="js/libs/materialize.min.js"></script>
	<title></title>
</head>
<body>
	<div id="app">
	</div>
	<script src="js/libs/vue.js"></script>
	<script type="text/javascript" src="js/components/properties.js"></script>
	<script type="text/javascript" src="js/components/components.js"></script>
	<script type="text/javascript" src="js/components/app.js"></script>
	<script type="text/javascript">

		//Request API
		
		var url = new URL(window.location.href).searchParams;

		var rPackageId = url.get("package-id");
		var rClientTxnId = url.get("client-txn-id");
		var rPartnerId = url.get("partner-id");
		var rPartnerRedirectUrl = url.get("partner-redirect-url");
		var rToken = url.get("token");

		//Callback API 

		let valclientTxnId = null;
		let valstatusCode = null;
		let valresultDescription = null;
		let valresult = null;
		let valgws_rd = 'ssl';

	</script>
	<script type="text/javascript" src="js/main.js"></script>
</body>
</html>