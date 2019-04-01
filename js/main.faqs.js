app.setColor(app.color.blueGrey[0]);
var preloaderFull = app.newComponent('c-preloader-circle-full').setSectionColor(app.color.red[8]);

setTimeout(() => {
	preloaderFull.setShow(false);
}, 1000);

//virtualDom
var header = app.newComponent('c-header');
var main = app.newComponent('c-main').setColorText(app.colorText.bwt[1]).setTextAling(app.textAling.c);
var footer = app.newComponent('c-footer').setText("").setColor(app.generateColor()).setColorText(app.generateColorText()).setTextAling(app.textAling.c);
var modal = app.newComponent("c-modal");
var hCPFAQs = app.newComponent('c-h').setText("Web Consent Page | FAQs").setColorText(app.colorText.bwt[0]).setSize(4).setTextAling(app.textAling.c);
var container = app.newComponent('c-container');
var p = app.newComponent('c-p').setCardpanel(1).setColorText(app.colorText.bwt[0]).setTextAling(app.textAling.l);
var p2 = app.newComponent('c-p').setCardpanel(0).setColorText(app.colorText.bwt[0]).setTextAling(app.textAling.c);
var ol = app.newComponent('c-ol');
var ul = app.newComponent('c-ul').setPadingl(0);
var ul2 = app.newComponent('c-ul').setPadingl(0);
var ul3 = app.newComponent('c-ul');
var ul4 = app.newComponent('c-ul');
var ul5 = app.newComponent('c-ul').setPadingl(0);
var ul6 = app.newComponent('c-ul');
var ul7 = app.newComponent('c-ul');
var linkTyC = app.newComponent('c-a').setText("back to CGW").setFlat(1).setHref("/");
//real Dom
app.create(preloaderFull);
app.create(header);
header.create(hCPFAQs);
app.create(main);
main.create(container);
container.create(p);
p.create(ol);
ol.create(
	app.newComponent('c-li')
	.setText("User confirms on the Vodacom Consent page and the DCB Partner receives the call-back. Does the DCB Partner need to make any other calls to any other API or the subscription is finalised then and DCB Partner just need to redirect to content?")
	.setValue(1)
	);
ol.create(ul);

ul.create(
	app.newComponent('c-li')
	.create(
		app.newComponent('c-span')
		.setText("If the subscriber selects “ACCEPT” and successful call-back is received, the subscription is finalised, and the DCB Partner must redirect the subscriber to the content.")
		.setColorText(app.colorText.blue[4])
		)
	);

ul.create(
	app.newComponent('c-li')
	.create(
		app.newComponent('c-span')
		.setText("DCB Partner sends a Welcome SMS/Notification")
		.setColorText(app.colorText.blue[4])
		)
	);
ul.create(
	app.newComponent('c-li')
	.create(
		app.newComponent('c-span')
		.setText("If the subscriber selects “DECLINE” and call-back is received, the subscription is not processed.")
		.setColorText(app.colorText.blue[4])
		)
	);
ul.create(
	app.newComponent('c-li')
	.create(
		app.newComponent('c-span')
		.setText("The DCB Partner should communicate an appropriate screen to the customer, based on the response the partner gets from Vodacom. The partner should provide a stroyboard for the scenarios for Vodacom to approve.")
		.setColorText(app.colorText.blue[4])
		)
	);
ol.create(
	app.newComponent('c-li')
	.create(
		app.newComponent('c-span')
		.setText("Which environment shall the DCB Partner use?")
		)
	.setValue(2)
	);
ol.create(ul2);
ul2.create(
	app.newComponent('c-li')
	.create(
		app.newComponent('c-span')
		.setText("The DCB Partner will use the following endpoints for the purchase")
		.setColorText(app.colorText.blue[4])
		)
	);
ul2.create(ul3);
ul3.create(
	app.newComponent('c-li')
	.create(
		app.newComponent('c-span')
		.setText("PIT: http://fusion-test.vodacom.co.za:8080/enterprise-services/pit/service/partner/verify/v1")
		.setColorText(app.colorText.blue[4])
		)
	);
ul3.create(
	app.newComponent('c-li')
	.create(
		app.newComponent('c-span')
		.setText("Staging: http://fusion-test.vodacom.co.za:8080/enterprise-services/ppd/service/partner/verify/v1 ")
		.setColorText(app.colorText.blue[4])
		)
	);
ul3.create(
	app.newComponent('c-li')
	.create(
		app.newComponent('c-span')
		.setText("Production: to be shared when QA testing in Staging  has been passed")
		.setColorText(app.colorText.blue[4])
		)
	);
ul2.create(
	app.newComponent('c-li')
	.create(
		app.newComponent('c-span')
		.setText("The DCB Partner will use the following endpoints for the purchase")
		.setColorText(app.colorText.blue[4])
		)
	);
ul2.create(ul4);
ul4.create(
	app.newComponent('c-li')
	.create(
		app.newComponent('c-span')
		.setText("PIT: https://fusion-test.vodacom.co.za:7443/MED/ERDecouplingInterface_v1r2")
		.setColorText(app.colorText.blue[4])
		)
	);
ul4.create(
	app.newComponent('c-li')
	.create(
		app.newComponent('c-span')
		.setText("Staging: https://fusion-test.vodacom.co.za:7443/MED/ERDecouplingInterface_v1r3")
		.setColorText(app.colorText.blue[4])
		)
	);
ul4.create(
	app.newComponent('c-li')
	.create(
		app.newComponent('c-span')
		.setText("Production: to be shared when QA testing in Staging  has been passed")
		.setColorText(app.colorText.blue[4])
		)
	);
ol.create(
	app.newComponent('c-li')
	.setText("Will there be header enrichment in this flow? If so who manages the header enrichment?")
	.setValue(3)
	);
ol.create(
	app.newComponent('c-span')
	.setText("Yes, the Header enrichment is done by the Vodacom WAP Gateway. The domain would need to be whitelisted as part of the on boarding process. Header enrichment is mandatory.")
	.setColorText(app.colorText.blue[4])
	);
ol.create(
	app.newComponent('c-li')
	.setText("Do we send UsageAuthRaterequest before the purchase request?")
	.setValue(4)
	);
ol.create(
	app.newComponent('c-span')
	.setText("Yes. This service allows an external system to determine only if access to a service is available for a given customer id based on the current subscriptions for that customer id. If the customer already has access to a given service a usage-authorisation response will bereturned to the client. ")
	.setColorText(app.colorText.blue[4])
	);
ol.create(app.newComponent('c-br'));
ol.create(
	app.newComponent('c-span')
	.setText("Please note no usage charge will be made. ")
	.setColorText(app.colorText.blue[4])
	.setBold(1)
	);
ol.create(
	app.newComponent('c-span')
	.setText("If the customer does not have access then purchase options will be returned to the partner. The DCB Partner will use any of the retunred purchase options when purchasing.")
	.setColorText(app.colorText.blue[4])
	);
ol.create(
	app.newComponent('c-li')
	.setText("Do we send UsageAuthRateChargerequest?")
	.setValue(5)
	);
ol.create(
	app.newComponent('c-span')
	.setText("Only for once-off purchases and subscriptions for which Vodacom is managing the usage count. In those cases, it has to be send after the purchase request. For subscription with unlimited usage it is not required.")
	.setColorText(app.colorText.blue[4])
	);
ol.create(app.newComponent('c-br'));
ol.create(
	app.newComponent('c-span')
	.setText("This service allows an external system to determine if access to a service is available for a given customer id based on the current subscriptions for that customer id. If the customer already has access to a given service, ").setColorText(app.colorText.blue[4]));
ol.create(
	app.newComponent('c-span')
	.setText("the service usage will be charged ")
	.setColorText(app.colorText.blue[4])
	.setBold(1)
	);
ol.create(
	app.newComponent('c-span')
	.setText("(credit will be deducted) and a usage-authorisation response will be returned to the client. If the customer does not have access then purchase options will be returned to the partner.")
	.setColorText(app.colorText.blue[4])
	);
ol.create(
	app.newComponent('c-span')
	.setText("(credit will be deducted) and a usage-authorisation response will be returned to the client. If the customer does not have access then purchase options will be returned to the partner.")
	.setColorText(app.colorText.blue[4])
	);
ol.create(
	app.newComponent('c-li')
	.setText("Can the Partner reuse the UsageAuthRate, Self-care subscriptions, inactivate subscriptions request that they currently use on decoupling?")
	.setValue(6)
	);
ol.create(
	app.newComponent('c-span')
	.setText("Yes. ")
	.setColorText(app.colorText.blue[4])
	);
ol.create(
	app.newComponent('c-li')
	.setText("In the purchase request how will the DCB Partner specify the free trial?")
	.setValue(7)
	);
ol.create(
	app.newComponent('c-span')
	.setText("There will be price points for TRIAL and non-TRIAL depending on the service. Specified in the package-id field of the purchase request.")
	.setColorText(app.colorText.blue[4])
	);
ol.create(
	app.newComponent('c-li')
	.setText("What are the requirements for WIFI flow?")
	.setValue(8)
	);
ol.create(
	app.newComponent('c-span')
	.setText("WIFI flow  is not supported")
	.setColorText(app.colorText.blue[4])
	);
ol.create(
	app.newComponent('c-li')
	.setText("What are the parameters for both the partner redirect URL and the call-back URL?")
	.setValue(9)
	);
ol.create(ul5);
ul5.create(
	app.newComponent('c-li')
	.create(
		app.newComponent('c-span')
		.setText("Redirect URL")
		.setColorText(app.colorText.blue[4])
		.setBold(1)
		)
	.setListStyle("none")
	);
ul5.create(ul6);
ul6.create(
	app.newComponent('c-li')
	.setText("package-id")
	.setColorText(app.colorText.blue[4])
	.setListStyle("none")
	);
ul6.create(
	app.newComponent('c-li')
	.setText("client-txn-id")
	.setColorText(app.colorText.blue[4])
	.setListStyle("none")
	);
ul6.create(
	app.newComponent('c-li')
	.setText("partner-id")
	.setColorText(app.colorText.blue[4])
	.setListStyle("none")
	);
ul6.create(
	app.newComponent('c-li')
	.setText("partner-redirect-url")
	.setColorText(app.colorText.blue[4])
	.setListStyle("none")
	);
ul6.create(
	app.newComponent('c-li')
	.setText("token")
	.setColorText(app.colorText.blue[4])
	.setListStyle("none")
	);
ul5.create(
	app.newComponent('c-li')
	.create(
		app.newComponent('c-span')
		.setText("Purchase call-back URL")
		.setColorText(app.colorText.blue[4])
		.setBold(1)
		)
	.setListStyle("none")
	);
ul5.create(ul7);
ul7.create(
	app.newComponent('c-li')
	.setText("content-name")
	.setColorText(app.colorText.blue[4])
	.setListStyle("none")
	);
ul7.create(
	app.newComponent('c-li')
	.setText("asset-id")
	.setColorText(app.colorText.blue[4])
	.setListStyle("none")
	);
ul7.create(
	app.newComponent('c-li')
	.setText("external-trans-id")
	.setColorText(app.colorText.blue[4])
	.setListStyle("none")
	);
ul7.create(
	app.newComponent('c-li')
	.setText("partner-id")
	.setColorText(app.colorText.blue[4])
	.setListStyle("none")
	);
ol.create(
	app.newComponent('c-li')
	.setText("Is there a delay before the end-user is sent to the partner redirect URL?I would like to know which response sent to the partner is triggered first (end-user redirect or call-back trigger)?")
	.setValue(10));
ol.create(
	app.newComponent('c-span')
	.setText("Yes, there might be a delay from back-end procedures that need to be performed before the redirect is issued.  The call-back is triggered first.")
	.setColorText(app.colorText.blue[4]));
ol.create(
	app.newComponent('c-li')
	.setText("Vodacom supports both USSD opt-in and Web opt-in on Vodacom Consent page. Do we need to make changes at our end to support both flows?")
	.setValue(11)
	);
ol.create(
	app.newComponent('c-span')
	.setText("The DCB Partner can choose either one of the 2 options available but must implement 1 option")
	.setColorText(app.colorText.blue[4]));
container.create(p2);
p2.create(linkTyC);
app.create(footer);
app.create(modal);