$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/AddToCart.feature");
formatter.feature({
  "name": "This feature tests the \"Add to cart\" functionality of the Swag Labs application.",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@AddToCart"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user has launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.user_has_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username as \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.user_enters_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password as \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.user_enters_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should successfully land on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.user_should_successfully_land_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To select the items and add them to the \"Add to cart\" page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AddToCart"
    }
  ]
});
formatter.step({
  "name": "user adds the following items to the cart",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.AddToCartStepDefs.user_adds_the_following_items_to_the_cart(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Add To Cart link",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.AddToCartStepDefs.user_clicks_on_Add_To_Cart_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add to cart page should contain the added items",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.AddToCartStepDefs.Add_to_cart_page_should_contain_the_added_items(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "This feature will be used to test the login functionality of Swag Labs application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user has launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.user_has_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify the successful login scenario with valid credentials as parameters",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "user enters username as \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.user_enters_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password as \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.user_enters_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should successfully land on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.user_should_successfully_land_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To verify the unsuccessful login scenario with invalid credentials using Scenario Outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enters username as \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters password as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "user should get error message as \"\u003cError\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "Error"
      ]
    },
    {
      "cells": [
        "standard_user",
        "12345",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    },
    {
      "cells": [
        "locked_out_user",
        "secret_sauce",
        "Epic sadface: Sorry, this user has been locked out."
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user has launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.user_has_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify the unsuccessful login scenario with invalid credentials using Scenario Outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "user enters username as \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.user_enters_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password as \"12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.user_enters_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should get error message as \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.user_should_get_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user has launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.user_has_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify the unsuccessful login scenario with invalid credentials using Scenario Outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "user enters username as \"locked_out_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.user_enters_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password as \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.user_enters_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should get error message as \"Epic sadface: Sorry, this user has been locked out.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.user_should_get_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});