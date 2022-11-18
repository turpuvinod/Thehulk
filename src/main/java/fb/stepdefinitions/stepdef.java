package fb.stepdefinitions;


import java.io.IOException;

import org.testng.asserts.SoftAssert;

import com.cucumber.listener.Reporter;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import fb.pageobject.logout;
import fb.pageobject.pageobject;
import utils.reportingmanager;


public class stepdef extends pageobject{
	
	SoftAssert sa = new SoftAssert();
	 logout lg = new logout();
    @Given("^user is in login page$")
    public void user_is_in_login_page() throws IOException {
    	launchapp(); 
    	Reporter.addScreenCaptureFromPath(reportingmanager.captureScreenshot());
    }


    @When("^user enters the phonenumber\"([^\"]*)\"$")
    public void user_enters_the_phonenumbersomething(String strArg1) throws IOException  {
    	enterphone(strArg1);
    	Reporter.addScreenCaptureFromPath(reportingmanager.captureScreenshot());
    }


    @Then("^user able to login successfully$")
    public void user_able_to_login_successfully() throws IOException  {
        String actual = sucesstext().trim();
        String Expected = "Home";
        
        sa.assertEquals(actual, Expected);
        sa.assertAll();
        Reporter.addScreenCaptureFromPath(reportingmanager.captureScreenshot());
    }

    @And("^user enters password\"([^\"]*)\"$")
    public void user_enters_passwordsomething(String strArg1) throws IOException  {
    	enterpassword(strArg1);
    	Reporter.addScreenCaptureFromPath(reportingmanager.captureScreenshot());
    }

    @And("^user clicks the login button$")
    public void user_clicks_the_login_button() throws IOException {
    	 loginbutton();
    	 Reporter.addScreenCaptureFromPath(reportingmanager.captureScreenshot());
    }
    @When("^user clicks accept alert$")
    public void user_clicks_accept_alert() throws IOException  {
     lg.alert(); 
     Reporter.addScreenCaptureFromPath(reportingmanager.captureScreenshot());
    }
    @When("^user clicks the profile$")
    public void user_clicks_the_profile() throws IOException  {
    	lg.clickprofile();
    	 Reporter.addScreenCaptureFromPath(reportingmanager.captureScreenshot());
    }

    @Then("^user able to loggedout successfully$")
    public void user_able_to_loggedout_successfully() throws IOException  {
        boolean actual=lg.loggedoutsuccess();
        boolean Expected= true;
        
        sa.assertEquals(actual, Expected);
        sa.assertAll();
        Reporter.addScreenCaptureFromPath(reportingmanager.captureScreenshot());
    }

    @And("^user clicks the logout button$")
    public void user_clicks_the_logout_button() throws IOException  {
        lg.clicklogout();
        Reporter.addScreenCaptureFromPath(reportingmanager.captureScreenshot());
    }

    
        
    }



