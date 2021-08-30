import info from '../../fixtures/logindata.json'
import info1 from '../../fixtures/taskdatadebtor.json'
import Login from '../POM/Login'
import DebtorTasks from '../POM/DebtorTasks'
describe('Task for Solvendo Debtor', function () {
  const dt = new DebtorTasks()
  const sn = new Login()
  beforeEach(() => {
    sn.visit()
    sn.fillEmail(info.email)
    sn.fillPassward(info.password)
    sn.submit()
  })

  it('CVA_A_TC-11: Verifying the Title and URL after clicking on the tasks icon', function () {

    dt.clickOnTasks()
    dt.titleVerification()
    sn.clickOnLogout()
  })
  it('CVA_A_TC-11-01: Verify that the  Send button should be disabled without Entering Query', function () {

    dt.clickOnTasks()
    dt.enterSubject(info1.subject)
    dt.selectCategoury()
    dt.selectUploadData()
    dt.clickOnSendDisabled()
    sn.clickOnLogout()
  })
  it('CVA_A_TC-11-02: Verify that the Send button should be disabled without Entering Query and Subject.', function () {

    dt.clickOnTasks()
    dt.selectCategoury()
    dt.selectUploadData()
    dt.clickOnSendDisabled()
    sn.clickOnLogout()
  })
  it('CVA_A_TC-11-03: Verify that the Send button should be disabled without Selecting Category ,Entering Query and Subject.', function () {

    dt.clickOnTasks()
    dt.clickOnSendDisabled()
    sn.clickOnLogout()
  })

  it('CVA_A_TC-11-04:Verify debtor is able to give request by clicking on send button  after selecting category as Upload data ,Subject and by Entering Query', function () {

    dt.clickOnTasks()
    dt.enterSubject(info1.subject)
    dt.selectCategoury()
    dt.selectUploadData()
    dt.enterQuery(info1.query)
    dt.clickOnSend()
    dt.exitButtonn()
    sn.clickOnLogout()
  })
  it('CVA_A_TC-11-05:Verify debtor is able to give request by clicking on send button  after selecting category as Templates ,Subject and by Entering Query', function () {

    dt.clickOnTasks()
    dt.enterSubject(info1.subject)
    dt.selectCategoury()
    dt.selectTemplates()
    dt.enterQuery(info1.query)
    dt.clickOnSend()
    dt.exitButtonn()
    sn.clickOnLogout()

  })
  it('CVA_A_TC-11-06:Verify debtor is able to give request by clicking on send button  after selecting category as Add Companies ,Subject and by Entering Query', function () {

    dt.clickOnTasks()
    dt.enterSubject(info1.subject)
    dt.selectCategoury()
    dt.selectAddCompanies()
    dt.enterQuery(info1.query)
    dt.clickOnSend()
    dt.exitButtonn()
    sn.clickOnLogout()
  })
  it('CVA_A_TC-11-07:Verify debtor is able to give request by clicking on send button  after selecting category as Report ,Subject and by Entering Query', function () {

    dt.clickOnTasks()
    dt.enterSubject(info1.subject)
    dt.selectCategoury()
    dt.selectReport()
    dt.enterQuery(info1.query)
    dt.clickOnSend()
    dt.exitButtonn()
    sn.clickOnLogout()
  })
  it('CVA_A_TC-11-08:Verify debtor is able to give request by clicking on send button  after selecting category as Expert Related Queries ,Subject and by Entering Query ', function () {

    dt.clickOnTasks()
    dt.enterSubject(info1.subject)
    dt.selectCategoury()
    dt.selectExpertReatedQueries()
    dt.enterQuery(info1.query)
    dt.clickOnSend()
    dt.exitButtonn()
    sn.clickOnLogout()
  })
  it('CVA_A_TC-11-09: Verify that debtor on click of view all in task slider is able to redirect to the task for solvendo page which should show all created tasks.', function () {
    dt.clickOnTasks()
    dt.clickOnViewAllTasks()
    dt.allTasks()
    sn.clickOnLogout()
  })
  it('CVA_A_TC-11-10: Verify debtor is able to give a request by filling all the details and by attaching a file in Entering Query field. ', function () {
    dt.clickOnTasks()
    dt.enterSubject(info1.subject)
    dt.selectCategoury()
    dt.selectExpertReatedQueries()
    dt.enterQuery(info1.query)
    dt.uploadFile()
    dt.clickOnSend()
    sn.clickOnLogout()
  })
  it('CVA_A_TC-11-11: Verifying debtor after selecting Remind me later icon is able to see all the tasks in which remind me later selected in tasks page  ', function () {
    dt.clickOnTasks()
    dt.clickOnViewAllTasks()
    dt.remindme()
    dt.checkRemindme()
    sn.clickOnLogout()
  })
  it('CVA_A_TC-11-12: Verifying debtor after selecting Add to Priority icon debtor is able to see all the tasks in which are added to priority   ', function () {
    dt.clickOnTasks()
    dt.clickOnViewAllTasks()
    dt.priority()
    dt.checkPriority()
    sn.clickOnLogout()
  })
  it.skip('CVA_A_TC-11-13: Verifying debtor after selecting Add to Priority icon and Remind me later icon debtor is able to see all the tasks in which are added to priority and  in remind me later  ', function () {
    dt.clickOnTasks()
    dt.clickOnViewAllTasks()
    dt.priority()
    dt.remindme()
    dt.checkPriority()
    dt.checkRemindme()
    sn.clickOnLogout()
  })
  it.skip('CVA_A_TC-11-14: Verifying on click of sort icon and by selecting ascending debtor is able to see all the tasks in ascending order  ', function () {
    dt.clickOnTasks()
    dt.clickOnViewAllTasks()
    dt.sortAscending()
    sn.clickOnLogout()
  })
  it.skip('CVA_A_TC-11-15: Verifying on click of sort icon and by selecting descending debtor is able to see all the tasks in descending order  ', function () {
    dt.clickOnTasks()
    dt.clickOnViewAllTasks()
    dt.sortDescending()
    sn.clickOnLogout()
  })
  it('CVA_A_TC-11-16: Verify that onclick of view all print icon should be visible to debtor', function () {
    dt.clickOnTasks()
    dt.clickOnViewAllTasks()
    dt.clickOnPrint()
    sn.clickOnLogout()
  })
  it('CVA_A_TC-11-17: Verify that on click of draft a new task button debtor is able to get task query box', function () {
    dt.clickOnTasks()
    dt.enterSubject(info1.subject)
    dt.selectCategoury()
    dt.selectExpertReatedQueries()
    dt.enterQuery(info1.query)
    dt.clickOnSend()
    dt.draftANewTask()
  })
  it('CVA_A_TC-11-18: Verify that send button should be disabled after click on draft a new task', function () {
    dt.clickOnTasks()
    dt.enterSubject(info1.subject)
    dt.selectCategoury()
    dt.selectExpertReatedQueries()
    dt.enterQuery(info1.query)
    dt.clickOnSend()
    cy.wait(2000)
    dt.draftANewTask()
    dt.clickOnSendDisabled()
  })
  it('CVA_A_TC-11-19: Verify that debtor is able to draft a new task after click on draft a new task', function () {
    dt.clickOnTasks()
    dt.enterSubject(info1.subject)
    dt.selectCategoury()
    dt.selectExpertReatedQueries()
    dt.enterQuery(info1.query)
    dt.clickOnSend()
    dt.draftANewTask()
    dt.enterSubject('draft task')
    dt.selectCategoury()
    dt.selectTemplates()
    dt.enterQueryDarft('draft tasks')
    dt.clickOnSend()
    dt.exitButtonn()
  })
  it('CVA_A_TC-11-20: Verify whether the debtor is able to get all the tasks by clicking on the All.', function () {
    dt.clickOnTasks()
    dt.clickOnViewAllTasks()
    dt.all()

  })
  it.skip('CVA_A_TC-11-21: Verify whether the Debtor is able to get the latest tasks by clicking on the Latest.', function () {
    dt.clickOnTasks()
    dt.clickOnViewAllTasks()
    dt.latest()

  })
  it.skip('CVA_A_TC-11-22: Verify whether the Debtor is able to get This week tasks by clicking on the this Week.', function () {
    dt.clickOnTasks()
    dt.clickOnViewAllTasks()
    dt.thisWeek()

  })
  it.skip('CVA_A_TC-11-23:  Verify whether the Debtor is able to get this month tasks by clicking on the this month.', function () {
    dt.clickOnTasks()
    dt.clickOnViewAllTasks()
    dt.thisMonth()
  })
  it('CVA_A_TC-11-24:  Verify whether the debtor is able to close tasks box on click of close icon.', function () {
    dt.clickOnTasks()
    dt.closeButton()
  })

})