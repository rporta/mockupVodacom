app.setColor(app.color.blueGrey[0]);
var preloaderFull = app.newComponent('c-preloader-circle-full').setSectionColor(app.color.red[8]);
setTimeout(() => {
	preloaderFull.setShow(false);
}, 1000);

app.create(preloaderFull);

//virtualDom
var header = app.newComponent('c-header');
var main = app.newComponent('c-main').setColorText(app.colorText.bwt[1]).setTextAling(app.textAling.c);
var container = app.newComponent('c-container');
var hVodacom = app.newComponent('c-h').setText("Vodacom").setCardpanel(1).setColor(app.color.red[7]).setColorText(app.colorText.bwt[1]).setTextAling(app.textAling.c);
var hConfirmPayment = app.newComponent('c-h').setText("Confirm payment").setColorText(app.colorText.bwt[0]).setSize(4).setTextAling(app.textAling.c);
var hTyc = app.newComponent('c-h').setText("Términos y condiciones Consent Gateway").setSize(3);
var hservice = app.newComponent('c-h').setText("Service name").setColorText(app.colorText.deepPurple[5]).setSize(4);

var contentServiceName = app.newComponent('c-span').setText("<Content Service Name>").setColorText(app.colorText.deepPurple[5]);
var trialperiod = app.newComponent('c-span').setText("<trialperiod>").setColorText(app.colorText.deepPurple[5]);
var billingFrequency = app.newComponent('c-span').setText("<billing frequency>").setColorText(app.colorText.deepPurple[5]);

var p = app.newComponent('c-p').setCardpanel(1);
var br = app.newComponent('c-br');
var br2 = app.newComponent('c-br');
var form = app.newComponent('c-form').setMethod(0).setColorText(app.colorText.bwt[0]).setCardpanel(0);
// form.setAction('http://dev3.tulandia.net/du/tg');
var footer = app.newComponent('c-footer').setText("").setColor(app.generateColor()).setColorText(app.generateColorText()).setTextAling(app.textAling.c);
var aceptar = app.newComponent('c-button').setText("Accept").setFlat(1).setFull(1).setColor(app.color.red[5]).setColorText(app.colorText.bwt[1]);
var cancelar = app.newComponent('c-button').setText("Decline").setFlat(1).setFull(1).setColor(app.color.blueGrey[3]).setColorText(app.colorText.bwt[0]);
var modal = app.newComponent("c-modal");
var p2 = app.newComponent('c-p').setText("By selecting ACCEPT now, you accept the ");
var linkTyC = app.newComponent('c-a').setText("Vodacom Payment Terms and Conditions").setFlat(1).setHref("faqs.php");

//real Dom
app.create(header);
header.create(hConfirmPayment);
// header.create(app.newComponent('c-divider').setColor(app.color.blueGrey[5]));
header.create(hVodacom);
hVodacom.create(hTyc);
app.create(main);
main.create(container);
container.create(br2);
container.create(form);
form.create(p);
p.create(hservice);
p.create(app.newComponent('c-br'));
p.create(app.newComponent('c-span').setText("Your are about to subscribe to "));
p.create(contentServiceName);
p.create(app.newComponent('c-span').setText("."));
p.create(app.newComponent('c-br'));
p.create(app.newComponent('c-span').setText("This is FREE for "));
p.create(trialperiod);
p.create(app.newComponent('c-br'));
p.create(app.newComponent('c-span').setText("thereafter Rx per "));
p.create(billingFrequency);
p.create(app.newComponent('c-span').setText(" will be charged"));
p.create(app.newComponent('c-br'));
p.create(app.newComponent('c-span').setText("to your Vodacom account."));
form.create(p2);
p2.create(app.newComponent('c-br'));
p2.create(linkTyC);
p2.create(app.newComponent('c-br'));
form.create(aceptar);
form.create(app.newComponent('c-hr').setSize(0));
form.create(cancelar);
form.create(app.newComponent('c-br'));
form.create(app.newComponent('c-br'));
app.create(footer);
app.create(modal);

var resolverParam = (status) => {
	switch (status){
		case 0:
		case 'Successful Purchase':
		valstatusCode = 0;
		valresult = 'ACCEPTED';
		valresultDescription = 'Successfully subscribed';
		break;
		case 1:
		case 'Declined Purchase':
		valstatusCode = 1;
		valresult = 'DECLINED';
		valresultDescription = 'Customer declined';
		break;
		case 2:
		case 'Fraudulent Activity Detected':
		valstatusCode = 2;
		valresult = 'FRAUD';
		valresultDescription = 'Fraud detected';
		break;
		case 3:
		case 'System Error':
		valstatusCode = 3;
		valresult = 'ERROR';
		valresultDescription = 'An error has occurred';
		break;
		case 4:
		valstatusCode = 4;
		valresult = 'BLOCKED'
		valresultDescription = 'Content block flag set';
		break;
		case 5:
		valstatusCode = 5;
		valresult = 'ERROR'
		valresultDescription = 'Insufficient funds';
		break;
		case 6:
		case 'Timeout':
		valstatusCode = 6;
		valresult = 'ERROR'
		valresultDescription = 'Timeout waiting for response';
		break;
		case 7:
		valstatusCode = 7;
		valresult = 'ERROR'
		valresultDescription = 'Already subscribed to service';
		break;
		case 8:
		valstatusCode = 8;
		valresult = 'ERROR'
		valresultDescription = 'Invalid request';
		break;
		case 9:
		valstatusCode = 9;
		valresult = 'BLOCKED'
		valresultDescription = 'Admin lock flag set';
		break;

	}
}


//function que resuelve click : aceptar | cancelar
var resolveClick = (e) => {

	//aceptar
	e.target.id === aceptar.$el.id 
	? (()=>{
		valclientTxnId = app.generateNumericId(4);

		//resolve params ACCEPTED
		resolverParam(app.generateRandArray([0]));

		var clientTxnId = app.newComponent('c-input-fields').setType(3).setName('client-txn-id').setValue(valclientTxnId).setShow(0);
		var statusCode = app.newComponent('c-input-fields').setType(3).setName('status-code').setValue(valstatusCode).setShow(0);
		var resultDescription = app.newComponent('c-input-fields').setType(3).setName('result-description').setValue(valresultDescription).setShow(0);
		var result = app.newComponent('c-input-fields').setType(3).setName('result').setValue(valresult).setShow(0);
		var gws_rd = app.newComponent('c-input-fields').setType(3).setName('gws_rd').setValue(valgws_rd).setShow(0);

		//real Dom param Callback API

		form.create(clientTxnId);
		form.create(statusCode);
		form.create(resultDescription);
		form.create(result);
	})()
	: null;

	//cancelar
	e.target.id === cancelar.$el.id 
	? (()=>{

		valclientTxnId = app.generateNumericId(4);

		//resolve params DECLINED, FRAUD, ERROR, BLOCKED
		// resolverParam(app.generateRandArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));

		//resolve params ERROR
		// resolverParam(app.generateRandArray([3, 5, 6, 7, 8]));

		//resolve params BLOCKED
		// resolverParam(app.generateRandArray([4, 9]));

		//resolve params FRAUD
		// resolverParam(2);

		//resolve params DECLINED
		resolverParam(1);

		var clientTxnId = app.newComponent('c-input-fields').setType(3).setName('client-txn-id').setValue(valclientTxnId).setShow(0);
		var statusCode = app.newComponent('c-input-fields').setType(3).setName('status-code').setValue(valstatusCode).setShow(0);
		var resultDescription = app.newComponent('c-input-fields').setType(3).setName('result-description').setValue(valresultDescription).setShow(0);
		var result = app.newComponent('c-input-fields').setType(3).setName('result').setValue(valresult).setShow(0);

		//real Dom param Callback API

		form.create(clientTxnId);
		form.create(statusCode);
		form.create(resultDescription);
		form.create(result);
	})()
	: null;

	//submit
	setTimeout(()=>{form.$el.submit()}, 500);
};

//administro eventos
aceptar.$el.addEventListener('click', resolveClick, false);
cancelar.$el.addEventListener('click', resolveClick, false);

