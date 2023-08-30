package stepdefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginStepDefs {

	WebDriver driver = Hooks.driver;

	@Given("user has launched the application")
	public void user_has_launched_the_application() throws InterruptedException {
		driver.get("https://www.saucedemo.com/");
		
	}

	@When("user enters username as {string}")
	public void user_enters_username_as(String username) throws InterruptedException {
		WebElement userName = driver.findElement(By.xpath("//input[@id='user-name']"));
		userName.sendKeys(username);
		//Thread.sleep(2000);
	}

	@When("user enters password as {string}")
	public void user_enters_password_as(String password) throws InterruptedException {
		WebElement Password = driver.findElement(By.xpath("//input[@id='password']"));
		Password.sendKeys(password);
		//Thread.sleep(2000);
	}

	@When("user clicks on Login button")
	public void user_clicks_on_Login_button() {
		WebElement loginBtn = driver.findElement(By.xpath("//input[@id='login-button']"));
		loginBtn.click();
	}

	@Then("user should successfully land on home page")
	public void user_should_successfully_land_on_home_page() {
		
		String expected_url = "https://www.saucedemo.com/inventory.html";
		String actual_url = driver.getCurrentUrl();
		Assert.assertEquals(expected_url, actual_url);
		System.out.println("Login Successful");
	}

	@Then("user should get error message as {string}")
	public void user_should_get_error_message_as(String expectedError) throws InterruptedException {
		WebElement error = driver.findElement(By.xpath("//h3[@data-test='error']"));
		String actualError = error.getText();
		//Thread.sleep(2000);
		Assert.assertEquals(actualError, expectedError);
	}

}