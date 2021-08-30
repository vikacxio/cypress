
import Login from "../../POM/Login";
//import Details from "../../POM/page";
//const Login = require("../../../../automation-scrapping/Login");
//const info =require("../../../fixtures/LoginDetails.json")import info from '../../fixtures/logindata.json'
//import info from '../../../fixtures/LoginDetails.json'
import notification from '../../POM/POM_testcases/NotificationCreditorPOM'

const excelFilePath ="cypress\\logindetails.xlsx";
const sheetName = "login";

describe("Notification Creditor", function() {
	const sn = new Login()
    const nf = new notification()
  beforeEach(() => {
    sn.visit()
    cy.task("generateJSONFromExcel", { excelFilePath, sheetName }).then(
      (user) => {
        sn.fillEmail(user[0].email);
        sn.fillPassward(user[0].password);
      })
    sn.submit()
    cy.get('#notifications > div > .icon').click({force:true});
    cy.get('.show-all').click({force:true});
  })
	it("CVA_A_TC-25-01: Verify whether the user clicks on notification icon is able to open the notification slider and verify the Url and the Title of the page", function() {
		
        nf.notificationUrl()

     
        

        //*[@id="root"]/div/div/div/div/div/div/p/b                       //for searched company 

    })
    it("CVA_A_TC-25-02: Verify whether the user is able to search a company name and the searched company has the notifications.",function(){
     nf.notificationSearch()
    })



    it("CVA_A_TC-25-03: Verify whether the user is able to filter the notifiactions by selecting the industry from  industry dropdown",function(){
             nf.indFilter()
        //*[@id="root"]/div/div/div/div/div/i[contains(@class, 'icon  chemicals')]

})

it("CVA_A_TC-24-04: Verify that on onclick of remind me icon is able to display the  remind me later selected in notifications  page",function(){
nf.remindMe()
})


it("CVA_A_TC-25-05: Verify  that after clicking on Priority icon creditor is able to display all the notifications in which are added to priority  ",function(){
nf.priorityIcon()
    
})

it("CVA_A_TC-25-06: Verify the user is able to filter the company in ascending or descending order by clicking on sort button ",function(){
   nf.compSort()
})


it.skip("CVA_A_TC-25-07: Verify whether the user is able to get all the notifications by clicking on the all.",function(){
  nf.allNotification()
})
it.skip("CVA_A_TC-25-08: Verify whether the user is able to get the latest notifications by clicking on the latest.",function(){
nf.allNotification()
})
it.skip("CVA_A_TC-25-09: Verify whether the user is able to get This week notifications by clicking on the this week.",function(){
nf.thisweekNotification()
})
it.skip("CVA_A_TC-25-10: Verify whether the user is able to get this month notifications by clicking on the this month.",function(){
 nf.thismonthNotification()
})



})