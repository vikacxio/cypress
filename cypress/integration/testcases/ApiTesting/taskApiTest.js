/*import Login from "../../../POM/Login";
const excelFilePath = "cypress\\LoginDetailsDebtor.xlsx";
const sheetName = "Sheet1";
describe('Testing API Endpoints Using Cypress', () => {

  it('Book demo', () => {
    cy.visit('/')
    const sn = new Login();
   
      cy.task("generateJSONFromExcel", { excelFilePath, sheetName }).then(
        (user) => {
          sn.fillEmail(user[0].email);
          sn.fillPassward(user[0].password);
        })
      sn.submit();
      cy.get('#tasks > .icon').click({force:true})
      //cy.xpath("//*[@id='root']/header/nav/ul/li[4]/a/i").click({force:true});
     // cy.get('.meetings-cards-wrap > :nth-child(1)').click({force:true})
    //cy.get(':nth-child(2) > #demo').click()
  })*/

  /* it('Test GET Request', () => {
         cy.request('http://localhost:3000/api/posts/1')
              .then((response) => {
                     expect(response.body).to.have.property('code', 200);
         })
   })*/

  /*it('Test POST Request', () => {
    cy.request({
      method: ‘POST’,
      url: ‘http://localhost:3000/api/posts’,
        body: {
      'id': 2,
      'title': 'Automation'
    }
        }).then((response) => {
      expect(response.body).has.property('title', 'Automation');
    })
})*/
 /*it('Test PUT Request', () => {
    cy.request({
      method: ‘PUT’,
      url: ‘http://localhost:3000/api/posts/2’,
        body: {
      'id': 2,
      'title': 'Test Automation'
    }
                    }).then((response) => {
      expect(response.body).has.property(“title”, “ Test Automation”);
    })          
              })
  it('Test DELETE Request', () => {
    cy.request({
      method: ‘DELETE’,
      url: ‘http://localhost:3000/api/post/2’
                          }).then((response) => {
        expect(response.body).to.be.empty;
      })
  })*/
 // it('POST-Meeting module', () => {
 /*  user =
    [ {"bookingDate":"2021-06-26T04:57:21.855Z",
     "endTime":{"timeHours":" 16","timeMinutes":"00"},
     "startTime":{"timeHours":"15","timeMinutes":"00 "},
     "demoId":"NA","email":"testg@1234.com","userName":"Gauri",
     "phoneNumber":"6765467888","demoRequest":"demo"}]
 
   cy.request('POST','http://65.1.192.243:8103/cva/bookADemo',user).then((response)=>{
       expect(response.status).equal(200)
       expect(response.body.email).equal(user.email)
       expect(response.body.bookingDate).equal(user.bookingDate)
        })*/

      //  it('POST-Create user',()=>{
          /* var user = {
                "company": "ALKA%20INDIA%20LIMITED",
                "category": "Report",
                "subject": "vika",
                "query": "jkdkghakds",
            }
    /*
            cy.request('POST','http://65.1.192.243:8103/cvaFrontend/createTaskUser?company=ALKA%20INDIA%20LIMITED&category=Report&subject=vika&query=jkdkghakds',user).then((response)=>{
                expect(response.status).equal(200)
              //  expect(response.headers.company).equal(user.company)
                expect(response.headers.category).equal(user.category)
                expect(response.headers.subject).equal(user.subject)
                expect(response.headers.query).equal(user.query)
               
            })
            cy.request('POST','http://65.1.192.243:8103/cvaFrontend/createTaskUser?company=ALKA%20INDIA%20LIMITED&category=Report&subject=vika&query=jkdkghakds',user).its('headers').should('include',{subject:'vika'})
        })*/
    
    


       /* cy.request('POST','http://65.1.192.243:8103/cvaFrontend/createTaskUser?company=ALKA%20INDIA%20LIMITED&category=Report&subject=vika&query=jkdkghakds')
        .its('headers')
        .then((responseHeaders) => {
          expect(responseHeaders.company).equal(user.company)
        })
    })*/
  /*  cy.request({
      method: 'POST',
      url: 'http://65.1.192.243:8103/cvaFrontend/createTaskUser?company=ALKA%20INDIA%20LIMITED&category=Report&subject=vika&query=jkdkghakds',
      qs:{
        "company": "ALKA%20INDIA%20LIMITED",
        "category": "Report",
        "subject": "vika",
        "query": "jkdkghakds",
      },
      headers:{
          "Content-Type": "application/json"

      }
    }).then(function (response) {
      expect(response.status).equal(200)
     // expect(response.body.data[0]).to.include({"company": "ALKA%20INDIA%20LIMITED"})
     cy.log(response.body.data)
        //expect(response.qs.company).to.eq("ALKA%20INDIA%20LIMITED")
        //expect(response.body).not.be.null
    // cy.log(response.qs)
    //expect(response.body).to.have.property("companyName", "ALKA INDIA LIMITED")
     // cy.log(JSON.stringify(response.qs))

    })
 // })
})
})*/








var token;
describe('Debtor Tasks', function () {
     
  it('CVA_API_TC-17-01: Task for solvendo token authorization',()=>{
      cy.request({
        method: 'POST',
        url:'http://65.1.192.243:8103/cvaRegistration/login',
       
        headers:{
          'content-type':'application/json'
        },
        body:{
          "password": "c55da45b53dcf70e9c6b0fad929cacf86663b6538593dd078ff4963aaf8b6a59",
          "userPhoneNumber": "solvendoDemo3@solvendo.io"
        },
      
      }).then(function(response){
          expect(response.status).equal(200)
          const respBody = response.body;
          token = respBody['token']
      
    })
    }) 

    it('CVA_API_TC-17-02: Task for solvendo api testing with valid query parameters', () => {
      cy.request({
       url: 'http://65.1.192.243:8103/cvaFrontend/createTaskUser',
       method: 'POST',
       headers: {
         authorization : token
       },
       qs: {
        company: 'BALRAMPUR CHINI MILLS LTD',
        category: 'Add Companies',
        subject: 'xyz',
        query:'abc'
       }
      })
      
      .its('body')
      .should('contain', {
        "success":true
      })
     })


     it('CVA_API_TC-17-03: Task for solvendo api testing with invalid query parameters', () => {
      cy.request({
       url: 'http://65.1.192.243:8103/cvaFrontend/createTaskUser',
       method: 'POST',
       headers: {
         authorization : token
       },
       qs: {
        company: 'BALRAMPUR CHINI MILLS PVT LTD',
        category: 'Add Companies',
        subject: 'xyz',
        query:'abc'
       }
      })
      
      .its('body')
      .should('contain', {
        "success":false
      })
     })

}) 












