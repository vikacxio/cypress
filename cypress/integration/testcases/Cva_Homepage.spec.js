import Login from "../../POM/Login";
import homepage from "../../POM/POM_testcases/Cva_HomepagePOM"

describe("Cva-Homepage", function () {
  const sn = new Login();
  const hp = new homepage();
  beforeEach(() => {
    sn.visit();
  });

  it("CVA_A_TC-26-01: Verify the Solvendo url, Solvendo logo and the title of the home page and click of book a demo button on the home page on landing screen is able to redirect to the book a demo and can able to request for a demo. ", function () {
    hp.pageLogo();


  });

  //1.Verify on click of book a demo button in landing is screen is able to redirect to the book a demo and can able to request for  a demo


  it("CVA_A_TC-26-02: Verify whether the  user is able to redirect to the service page by clicking on 'Service' in menu bar and service is display all the components, Images and text without any Breakage.", function () {
    hp.servicePage();
  });
  it("CVA_A_TC-26-03: Verify whether the user is able to the open  book a demo popup by clicking on Demo on the home page menu bar.", function () {
    hp.demo()
  });
  it("CVA_A_TC-26-04: Verify  whether the user is able to redirect to the about us page by clicking  on 'About Us'in menu bar and service is display all the components, Images and text without any Breakage.", function () {
hp.aboutUs()
  });
  it("CVA_A_TC-26-05: Verify the user is able  to  redirect to the contact us by click of 'Contact Us' in menu bar ", function () {
    hp.contactUs()
  });

  it("CVA_A_TC-26-06: Verify whether  the user is able to  redirect to the FAQ page an are able get to the Frequently Asked Questions  by clicking on FAQ in  Menu bar. ", function () {
    hp.faqs()
  });
  it("CVA_A_TC-26-07: Verify whether  the user is able to  search from the home page. ", function () {
    hp.searchButton()
    
  });

 
  it("CVA_A_TC-26-08: Verify Whether  the user is able to redirect to the Australia country page by selecting Australia from Region dropdown and are to display the pages without any break.", function () {
   hp.aus()
  });
  it("CVA_A_TC-26-09: Verify Whether the user is able to redirect to the Hong Kong country page by selecting Hong Kong from Region dropdown and are to display the pages without any break.", function () {
hp.hongkong()
  });
  it("CVA_A_TC-26-10: Verify whether the user is able to redirect to the Singapore country page by selecting Singapore from Region dropdown and are to display the pages without any break.", function () {
hp.singapore()
  });

  it("CVA_A_TC-26-11: Verify whether the user is able to redirect to the UAE country page by selecting UAE from Region dropdown.and are to display the pages without any break.", function () {
hp.Uae()
  });

  it("CVA_A_TC-26-12: Verify whether the user is able to redirect to the United Kingdom country page by selecting uk from Region dropdown and are to display the pages without any break.", function () {
hp.uk()
  });
  it("CVA_A_TC-26-13: Verify whether the user is able to redirect to the USA country page by selecting USA from Region dropdown and are to display the pages without any break", function () {
   hp.usa()
  });



  //services
  it("CVA_A_TC-26-14: Verifying th 'ARE U' Section is able to display all the components and on click of each card is displaying as per requirement", function () {
   hp.areU()
  });

  it("CVA_A_TC-26-15: Verify the user is able to see the 'Our Secret Souce'' is sable to display the images and text without any breakage. ", function () {
   hp.SecretSource()
  });
  it("CVA_A_TC-26-16: Verify the user is able to display all the image and text in  the 'Platform Section'in home page and verify on clicking of 'click here' link in data privacy and policy is able to redirect to the legal page. ", function () {
 hp.platformSection()
  });

  it("CVA_A_TC-26-17: Verify the user is able to display all the Booka demo button and text in  the 'Book a demo Section'and on click of it is able to display booka demo screen.", function () {
  hp.bookaDemo()
  });
  
  it("CVA_A_TC-26-18: Verify the user is able to click on my account of the home page and verify the functionality of the search button in the home page and selecting location of Australia from search dropdown.", function () {
  hp.myAccountAus()
  });
  it("CVA_A_TC-26-19: Verify the user is able to click on my account of the home page and verify the functionality of the search button in the home page and selecting location of Hong Kong from search dropdown.", function () {
  hp.myAccountHong()
  });
  it("CVA_A_TC-26-20: Verify the user is able to click on my account of the home page and verify the functionality of the search button in the home page and selecting location of Singapore from search dropdown.", function () {
  hp.myAccountSingapore()
  });
  it("CVA_A_TC-26-21: Verify the user is able to click on my account of the home page and verify the functionality of the search button in the home page and selecting location of Hong Kong from search dropdown UAE.", function () {
  hp.myAccountUAE()
  });
  it("CVA_A_TC-26-22: Verify the user is able to click on my account of the home page and verify the functionality of the search button in the home page and selecting location of UK from search dropdown.", function () {
  hp.myAccountUK()
  });
  it("CVA_A_TC-26-23: Verify the user is able to click on my account of the home page and verify the functionality of the search button in the USA and selecting location of Hong Kong from search dropdown.", function () {
  hp.myAccountUSA()
  });

  
});
