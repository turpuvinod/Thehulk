package runnerfile;

import org.testng.annotations.AfterClass;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions  (features = {"Features" },
        glue =     {"fb.stepdefinitions"},
        plugin =   { "pretty","html:target/cucumber-reports","json:target/cucumber-reports/Cucumber.json",
        		     "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/extentreport.html"},
       tags=  "@login,@logout",
        monochrome = true )
public class runner extends AbstractTestNGCucumberTests{
	
	
	@AfterClass
	  public static void setup() {
	  
	  
	  
    Reporter.loadXMLConfig("src/test/resources/extent-config.xml");
	  Reporter.setSystemInfo("User Name", "vinod");
	  Reporter.setSystemInfo("Application Name", "Test App");
	  Reporter.setSystemInfo("Operating System Type", "Windows 11");
	  Reporter.setSystemInfo("Environment", "QA");
	  Reporter.setTestRunnerOutput("Test Execution Cucumber Report"); 
	 
	 
}

}
