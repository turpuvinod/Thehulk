package fb.pageobject;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;

import fb.base.base;

public class logout extends base {
	
	public static By profile = By.xpath("//div[@class='x1n2onr6 x78zum5']");
	
	public static By logout = By.xpath("//div[@data-nocookies='true']");
	
	public static By logoutsucess = By.xpath("//div[@class='_8e63 _ihd _6s']");//Recent logins
	
	
	public static void clickprofile() {
		
		driver.findElement(profile).click();
	}
    public static void clicklogout() {
    	
    	driver.findElement(logout).click();
    }
    public static boolean loggedoutsuccess() {
    	
    	
    	boolean result = driver.findElement(logoutsucess).isDisplayed();
    	
    	return result;
    }
    public static void alert() {
    	driver.findElement(By.linkText("www.facebook.com"));
    	Alert refalert = driver.switchTo().alert();
    	refalert.accept();
    	
    }
}
