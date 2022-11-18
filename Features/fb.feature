Feature: login feature file

  @login
  Scenario: user able to successufully login to the fb application
    Given user is in login page
    When user enters the phonenumber"8919223453"
    And user enters password"Vinod#23"
    And user clicks the login button
    Then user able to login successfully
@logout
 Scenario: user should be able to successfully loggedout
 
 When user clicks accept alert
 And user clicks the profile 
 And user clicks the logout button
 Then user able to loggedout successfully
 
 
     