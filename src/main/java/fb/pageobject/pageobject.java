package fb.pageobject;

import org.openqa.selenium.By;

import fb.base.base;

public class pageobject extends base {

	public static By phnnumber = By.name("email");
	
	public static By passwordbox = By.name("pass");
	
	public static By clicklogin = By.xpath("//button[@type='submit']");
	
	public static By home =By.xpath("//span[text()='Home']");
	
	
	
	public static void enterphone(String args1) {
		
		driver.findElement(phnnumber).sendKeys(args1);
	}
	public static void enterpassword(String args1) {
		
		driver.findElement(passwordbox).sendKeys(args1);
	}
	public static void loginbutton() {
		driver.findElement(clicklogin).click();
	}
	
	public static String sucesstext() {
		
		String v ="";
			
		v = driver.findElement(home).getText(); 
		return v;
	}
	
	
	
}  
