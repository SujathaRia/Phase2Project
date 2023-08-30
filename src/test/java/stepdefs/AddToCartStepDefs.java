package stepdefs;

import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class AddToCartStepDefs {

	WebDriver driver = Hooks.driver;
	List<String> addeditems;

	@When("user adds the following items to the cart")

	public void user_adds_the_following_items_to_the_cart(io.cucumber.datatable.DataTable dataTable)
			throws InterruptedException {
		List<Map<String, String>> Listofitems = dataTable.asMaps(String.class, String.class);

		for (Map<String, String> items : Listofitems) {
			String itemName = items.get("item");

			WebElement addToCartButton = driver.findElement(
					By.xpath("//div[text()='" + itemName + "']/ancestor::div[@class='inventory_item']//button"));
			addToCartButton.click();
			Thread.sleep(2000);

		}
	}

	@And("user clicks on Add To Cart link")
	public void user_clicks_on_Add_To_Cart_link() throws InterruptedException {

		WebElement shoppingCartLink = driver.findElement(By.xpath("//a[@class='shopping_cart_link']"));
		shoppingCartLink.click();
		

	}

	@Then("Add to cart page should contain the added items")
	public void Add_to_cart_page_should_contain_the_added_items(io.cucumber.datatable.DataTable dataTable)
			throws InterruptedException {

		List<Map<String, String>> Listofitems = dataTable.asMaps(String.class, String.class);

		for (Map<String, String> items : Listofitems) {
			String itemName = items.get("item");
			try {
				WebElement addeditems = driver
						.findElement(By.xpath("//div[@class='inventory_item_name' and text()='" + itemName + "']"));
				Assert.assertTrue("item " + itemName + " is found in the cart.", addeditems.isDisplayed());

			} catch (NoSuchElementException e) {
				Assert.fail("Item " + itemName + " is not found in the cart.");
			}
		}
	}

}
