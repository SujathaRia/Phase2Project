@AddToCart
Feature: This feature tests the "Add to cart" functionality of the Swag Labs application.

  Background: 
    Given user has launched the application
    When user enters username as "standard_user"
    And user enters password as "secret_sauce"
    And user clicks on Login button
    Then user should successfully land on home page

  Scenario: To select the items and add them to the "Add to cart" page
    When user adds the following items to the cart
      | item                  |
      | Sauce Labs Backpack   |
      | Sauce Labs Bike Light |
    And user clicks on Add To Cart link
    Then Add to cart page should contain the added items
      | item                  |
      | Sauce Labs Backpack   |
      | Sauce Labs Bike Light |
