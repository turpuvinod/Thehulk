$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("fb.feature");
formatter.feature({
  "line": 1,
  "name": "login feature file",
  "description": "",
  "id": "login-feature-file",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "user able to successufully login to the fb application",
  "description": "",
  "id": "login-feature-file;user-able-to-successufully-login-to-the-fb-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters the phonenumber\"8919223453\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters password\"Vinod#23\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.user_is_in_login_page()"
});
formatter.result({
  "duration": 5103296600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8919223453",
      "offset": 28
    }
  ],
  "location": "stepdef.user_enters_the_phonenumbersomething(String)"
});
formatter.result({
  "duration": 273570900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vinod#23",
      "offset": 21
    }
  ],
  "location": "stepdef.user_enters_passwordsomething(String)"
});
formatter.result({
  "duration": 269340200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 5686458300,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_able_to_login_successfully()"
});
formatter.result({
  "duration": 669518800,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "user should be able to successfully loggedout",
  "description": "",
  "id": "login-feature-file;user-should-be-able-to-successfully-loggedout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@logout"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user clicks accept alert",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks the profile",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user clicks the logout button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user able to loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.user_clicks_accept_alert()"
});
formatter.result({
  "duration": 3118194500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"www.facebook.com\"}\n  (Session info: chrome\u003d107.0.5304.107)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.2.2\u0027, revision: \u0027683ccb65d6\u0027\nSystem info: host: \u0027LAPTOP-V2IHHREB\u0027, ip: \u0027192.168.0.6\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [9bb128b8c29643c5d1dba31eb76712e0, findElement {using\u003dlink text, value\u003dwww.facebook.com}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.107, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\vinod\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:49936}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:49936/devtoo..., se:cdpVersion: 107.0.5304.107, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9bb128b8c29643c5d1dba31eb76712e0\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:588)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:398)\r\n\tat fb.pageobject.logout.alert(logout.java:33)\r\n\tat fb.stepdefinitions.stepdef.user_clicks_accept_alert(stepdef.java:60)\r\n\tat ✽.When user clicks accept alert(fb.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepdef.user_clicks_the_profile()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.user_clicks_the_logout_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.user_able_to_loggedout_successfully()"
});
formatter.result({
  "status": "skipped"
});
});