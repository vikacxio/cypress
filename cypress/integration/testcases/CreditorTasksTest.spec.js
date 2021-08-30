import info from '../../fixtures/creditorlogindata.json'
import info1 from '../../fixtures/creditortasksdata.json'
import Login from '../POM/Login'
import CreditorTasks from '../POM/CreditorTasks'
describe('Task for Solvendo Creditor', function () {
  const dt = new CreditorTasks()
  const sn = new Login()
  beforeEach(() => {
    sn.visit()
    sn.fillEmail(info.email)
    sn.fillPassward(info.password)
    sn.submit()
  })

  it('CVA_A_TC-17: Verify the Title and URL after click on the tasks icon', function () {

    dt.clickOnTasks()
    dt.titleVerification()
    sn.clickOnLogout()
  })
  it('CVA_A_TC-17-01: Verify that the  Send button should be disabled without Entering Query', function () {

    dt.clickOnTasks()
    dt.enterSubject(info1.subject)
    dt.selectCategoury()
    dt.selectUploadData()
    dt.clickOnSendDisabled()

  })
  it('CVA_A_TC-17-02: Verify that the  Send button should be disabled without Selecting Company', function () {

    dt.clickOnTasks()
    dt.enterSubject(info1.subject)
    dt.selectCategoury()
    dt.selectUploadData()
    dt.enterQuery(info1.query)
    dt.clickOnSendDisabled()

  })
  it('CVA_A_TC-17-03: Verify that the Send button should be disabled without Entering Query,Subject and selecting company.', function () {

    dt.clickOnTasks()
    dt.selectCategoury()
    dt.selectUploadData()
    dt.clickOnSendDisabled()

  })
  it('CVA_A_TC-17-04: Verify that the Send button should be disabled without Selecting company, Selecting Category ,Entering Query and Subject.', function () {

    dt.clickOnTasks()
    dt.clickOnSendDisabled()

  })

  it('CVA_A_TC-17-05:Verify creditor is able to give request by clicking on send button  after selecting company, selecting category as Upload data ,Subject and by Entering Query', function () {

    dt.clickOnTasks()
    dt.enterSubject(info1.subject)
    dt.selectCompany()
    dt.selectCategoury()
    dt.selectUploadData()
    dt.enterQuery(info1.query)
    dt.clickOnSend()
    dt.exitButtonn()

  })
  it('CVA_A_TC-17-06:Verify creditor is able to give request by clicking on send button  after selecting company, selecting category as Templates ,Subject and by Entering Query', function () {

    dt.clickOnTasks()
    dt.enterSubject(info1.subject)
    dt.selectCompany()
    dt.selectCategoury()
    dt.selectTemplates()
    dt.enterQuery(info1.query)
    dt.clickOnSend()
    dt.exitButtonn()


  })
  it('CVA_A_TC-17-07:Verify creditor is able to give request by clicking on send button  after selecting company, selecting category as Add Companies ,Subject and by Entering Query', function () {

    dt.clickOnTasks()
    dt.enterSubject(info1.subject)
    dt.selectCompany()
    dt.selectCategoury()
    dt.selectAddCompanies()
    dt.enterQuery(info1.query)
    dt.clickOnSend()
    dt.exitButtonn()

  })
  it('CVA_A_TC-17-08: Verify creditor is able to give request by clicking on send button  after selecting company, selecting category as Report ,Subject and by Entering Query', function () {

    dt.clickOnTasks()
    dt.enterSubject(info1.subject)
    dt.selectCompany()
    dt.selectCategoury()
    dt.selectReport()
    dt.enterQuery(info1.query)
    dt.clickOnSend()
    dt.exitButtonn()

  })
  it('CVA_A_TC-17-09: Verify creditor is able to give request by clicking on send button  after selecting company, selecting category as Expert Related Queries ,Subject and by Entering Query ', function () {

    dt.clickOnTasks()
    dt.enterSubject(info1.subject)
    dt.selectCompany()
    dt.selectCategoury()
    dt.selectExpertReatedQueries()
    dt.enterQuery(info1.query)
    dt.clickOnSend()
    dt.exitButtonn()

  })
  it('CVA_A_TC-17-10: Verify that creditor on click of view all in task slider is able to redirect to the task for solvendo page which should show all created tasks.', function () {
    dt.clickOnTasks()
    dt.clickOnViewAllTasks()
    dt.allTasks()

  })
  it('CVA_A_TC-17-11: Verify creditor is able to give a request by filling all the details and by attaching a file in Entering Query field. ', function () {
    dt.clickOnTasks()
    dt.enterSubject(info1.subject)
    dt.selectCompany()
    dt.selectCategoury()
    dt.selectExpertReatedQueries()
    dt.enterQuery(info1.query)
    dt.uploadFile()
    dt.clickOnSend()

  })
  it('CVA_A_TC-17-12: Verify that on click of View All,by selecting filter icon and selecting particular industry, creditor able to see all the tasks having selected industry  ', function () {
    dt.clickOnTasks()
    dt.clickOnViewAllTasks()
    dt.filter()
    dt.checkFilter()
    sn.clickOnLogout()
  })
  it('CVA_A_TC-17-13: Verify that on click of View All,by selecting Remind me later icon creditor is able to see all the tasks in which remind me later selected in tasks  ', function () {
    dt.clickOnTasks()
    dt.clickOnViewAllTasks()
    dt.remindme()
    dt.checkRemindme()
    sn.clickOnLogout()
  })
  it('CVA_A_TC-17-14: Verify that on click of View All,by selecting Add to Priority icon creditor is able to see all the tasks in which are added to priority  ', function () {
    dt.clickOnTasks()
    dt.clickOnViewAllTasks()
    dt.priority()
    dt.checkPriority()
    sn.clickOnLogout()
  })
  it.skip('CVA_A_TC-17-15: Verify that on click of View All,by selecting Add to Priority icon and Remind me later icon creditor is able to see all the tasks in which are added to priority and  in remind me later ', function () {
    dt.clickOnTasks()
    dt.clickOnViewAllTasks()
    dt.priority()
    dt.remindme()
    dt.checkPriority()
    dt.checkRemindme()
    sn.clickOnLogout()
  })
  it.skip('CVA_A_TC-17-16: Verify on click of sort icon and by selecting ascending creditor is able to see all the tasks in ascending order', function () {
    dt.clickOnTasks()
    dt.clickOnViewAllTasks()
    dt.sortAscending()
    sn.clickOnLogout()
  })
  it.skip('CVA_A_TC-17-17: Verify on click of sort icon and by selecting descending creditor is able to see all the tasks in descending order', function () {
    dt.clickOnTasks()
    dt.clickOnViewAllTasks()
    dt.sortDescending
    sn.clickOnLogout()
  })
  it('CVA_A_TC-17-18: Verify that onclick of view all print icon should be visible to ceditor', function () {
    dt.clickOnTasks()
    dt.clickOnViewAllTasks()
    dt.clickOnPrint()
    sn.clickOnLogout()
  })
  it('CVA_A_TC-17-19: Verify that on click of draft a new task button task window/screen should be visible to creditor', function () {
    dt.clickOnTasks()
    dt.enterSubject(info1.subject)
    dt.selectCompany()
    dt.selectCategoury()
    dt.selectExpertReatedQueries()
    dt.enterQuery(info1.query)
    dt.clickOnSend()
    dt.draftANewTask()
  })
  it('CVA_A_TC-17-20: Verify that after click on draft a new task send button should be disabled', function () {
    dt.clickOnTasks()
    dt.enterSubject(info1.subject)
    dt.selectCompany()
    dt.selectCategoury()
    dt.selectExpertReatedQueries()
    dt.enterQuery(info1.query)
    dt.clickOnSend()
    dt.draftANewTask()
    dt.clickOnSendDisabled()
  })
  it('CVA_A_TC-17-21: Verify that creditor is able to draft a new task by filling all the details', function () {
    dt.clickOnTasks()
    dt.enterSubject(info1.subject)
    dt.selectCompany()
    dt.selectCategoury()
    dt.selectExpertReatedQueries()
    dt.enterQuery(info1.query)
    dt.clickOnSend()
    dt.draftANewTask()
    dt.enterSubject('draft task')
    dt.selectCompany()
    dt.selectCategoury()
    dt.selectUploadData()
    dt.enterQueryDarft('creditor task')
    dt.clickOnSend()
    dt.exitButtonn()
  })
  it.skip('CVA_A_TC-17-22: Verify whether the creditor is able to get all the tasks by clicking on the All.', function () {
    dt.clickOnTasks()
    dt.clickOnViewAllTasks()
    dt.all()
    sn.clickOnLogout()
  })
  it.skip('CVA_A_TC-17-23: Verify whether the creditor is able to get the latest tasks by clicking on the Latest.', function () {
    dt.clickOnTasks()
    dt.clickOnViewAllTasks()
    dt.latest()
    sn.clickOnLogout()
  })
  it.skip('CVA_A_TC-17-24: Verify whether the creditor is able to get This week tasks by clicking on the this Week.', function () {
    dt.clickOnTasks()
    dt.clickOnViewAllTasks()
    dt.thisWeek()
    sn.clickOnLogout()
  })
  it.skip('CVA_A_TC-17-25:  Verify whether the creditor is able to get this month tasks by clicking on the this month.', function () {
    dt.clickOnTasks()
    dt.clickOnViewAllTasks()
    dt.thisMonth()
  })
  it('CVA_A_TC-17-26:  Verify whether the creditor is able to close task box by click on close icon.', function () {
    dt.clickOnTasks()
    dt.closeButton()
  })
  it(" CVA_A_TC-17-27: Verify whether the creditor is able to search tasks of company by entering company name in search box", function () {
    dt.clickOnTasks()
    dt.clickOnViewAllTasks()
    dt.searchCompany()
    sn.clickOnLogout()
  })
  
})