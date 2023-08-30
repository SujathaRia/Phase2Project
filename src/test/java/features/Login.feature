@Login
Feature: This feature will be used to test the login functionality of Swag Labs application

  Background: 
    Given user has launched the application

  Scenario: To verify the successful login scenario with valid credentials as parameters
    When user enters username as "standard_user"
    And user enters password as "secret_sauce"
    And user clicks on Login button
    Then user should successfully land on home page

  Scenario Outline: To verify the unsuccessful login scenario with invalid credentials using Scenario Outline
    When user enters username as "<UserName>"
    And user enters password as "<Password>"
    And user clicks on Login button
    Then user should get error message as "<Error>"

    Examples: 
      | UserName        | Password     | Error                                                                     |
      | standard_user   |        12345 | Epic sadface: Username and password do not match any user in this service |
      | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out.                       |
