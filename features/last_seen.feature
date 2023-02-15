Feature: Check last viewed products
  In order to improve the selection of the products for ordering
  As a website user
  I need to see history of last viewed products

  Scenario: Searching for a last viewed product
    Given I am on "/product/chernie-bryuki-na-podtyazhkah-4481"
    Then I am on "/product/malinoviy-odnobortniy-zhaket-5257"
    Then I should see "брюки на подтяжках" in element ".js-productCarousel"