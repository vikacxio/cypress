var token
describe('CVA_API_TC-25 -> API Validation for Creditor Notifications page', function () {

  Cypress.config('baseUrl','http://65.1.192.243:8103')
     
  it('CVA_API_TC-25-01 ->POST- /cvaRegistration/login ->Login Of the User',()=>{
    cy.request({
     method: 'POST',
      url:'/cvaRegistration/login',
      headers:{
        'content-type':'application/json'
      },
      body:{
            "password": "c55da45b53dcf70e9c6b0fad929cacf86663b6538593dd078ff4963aaf8b6a59",
            "userPhoneNumber": "solvendoDemo4@solvendo.io"
      },
        
    }).then(function(response){
        const respBody = response.body;
        token = respBody['token']
        expect(response.status).equal(200)
        expect(response.body).to.have.property('success',true)
      })
  })
    //Get all notifications
    it('CVA_API_TC-25-02 -> POST-/cvaFrontendHomePage/getAllNotificationForFrontend -> Get All Notification For Frontend',()=>{
        cy.request({
           method: 'POST',
            url: '/cvaFrontendHomePage/getAllNotificationForFrontend',
           body:{},
            headers: {
              authorization : token
            },
    }).then((response)=>{
            expect(response.status).equal(200)
            //cy.log(response.body)
            cy.log(JSON.stringify(response.body))
        })
    })
    //Get Notifications related to searched Onboarding company name -> valid
    it('CVA_API_TC-25-03 -> POST-/cvaFrontendHomePage/getAllNotificationForFrontend -> Get All Notification For Frontend',()=>{
        cy.request({
           method: 'POST',
            url: '/cvaFrontendHomePage/getAllNotificationForFrontend',
           body:{
            "companyName":"AARTI DRUGS LIMITED"
            },
            headers: {
              authorization : token
            },
    }).then((response)=>{
            expect(response.status).equal(200)
            //cy.log(response.body)
            cy.log(JSON.stringify(response.body))
        })
    })

    it('CVA_API_TC-25-04 -> POST-/cvaFrontendHomePage/getAllNotificationForFrontend -> Get All Notification For Frontend',()=>{
        cy.request({
           method: 'POST',
            url: '/cvaFrontendHomePage/getAllNotificationForFrontend',
           body:{
            "companyName":"zzzzzzzzzz"
            },
            headers: {
              authorization : token
            },
    }).then((response)=>{
            expect(response.status).equal(200)
            //cy.log(response.body)
            cy.log(JSON.stringify(response.body))
            cy.log(JSON.stringify(response.body.data).includes(Array(0)))
        })
    })

      //search via industry filter
   it('CVA_API_TC-25-05 ->POST- /cvaFrontendHomePage/getAllNotificationForFrontend -> Get All Notification For Frontend',()=>{
      cy.request({
       method: 'POST',
        url: '/cvaFrontendHomePage/getAllNotificationForFrontend',
       body:{
        "industry":"Pharmaceutical"
        },
        headers: {
          authorization : token
        },
      }).then((response)=>{
        expect(response.status).equal(200)
        //cy.log(response.body)
        cy.log(JSON.stringify(response.body))
      })
    })

    //set remind me later
  it('CVA_API_TC-25-06 ->  GET-/cvaFrontendHomePage/addNotificationAsSaveForLaterForGivenCompany -> Add Notification As a save for later for given company',()=>{
    cy.request({
     method: 'GET',
      url: '/cvaFrontendHomePage/addNotificationAsSaveForLaterForGivenCompany',
   qs:{
    notificationId: "NOTIFICATION_40836",
    saveForlater: true
    },
      headers: {
        authorization : token
      },
    }).then((response)=>{
      expect(response.status).equal(200)
      //cy.log(response.body)
      cy.log(JSON.stringify(response.body))
    })
  })

  //set remind me later in header
  it('CVA_API_TC-25-07 ->  POST-/cvaFrontendHomePage/getAllNotificationForFrontend -> Validate the Notifications page shows which are addedto REMIND ME LATER Notifications',()=>{
    cy.request({
       method: 'POST',
        url: '/cvaFrontendHomePage/getAllNotificationForFrontend',
       body:{
        "saveForLater":true
        },
        headers: {
          authorization : token
        },
    }).then((response)=>{
        expect(response.status).equal(200)
        //cy.log(response.body)
        cy.log(JSON.stringify(response.body))
    })
  })

  //set add to priority
it('CVA_API_TC-25-08 ->  GET-/cvaFrontendHomePage/addNotificationAsFavoriteForGivenCompany -> Add Notification As a favorite for given company',()=>{
  cy.request({
     method: 'GET',
      url: '/cvaFrontendHomePage/addNotificationAsFavoriteForGivenCompany',
    qs:{
    notificationId: "NOTIFICATION_40836",
    favorite: true
    },
      headers: {
        authorization : token
      },
    }).then((response)=>{
      expect(response.status).equal(200)
      //cy.log(response.body)
      cy.log(JSON.stringify(response.body))
    })
  })

  //set add to priority on header 
  it('CVA_API_TC-25-09 -> POST-/cvaFrontendHomePage/getAllNotificationForFrontend->Validate the Notifications page shows which are added to ADD TO PRIORITY Notifications',()=>{
    cy.request({
         method: 'POST',
          url: '/cvaFrontendHomePage/getAllNotificationForFrontend',
         body:{
          "favorite":true
          },
          headers: {
            authorization : token
          },
      }).then((response)=>{
          expect(response.status).equal(200)
          //cy.log(response.body)
          cy.log(JSON.stringify(response.body))
    })
  })

  // set add to priority and remind me later
  it('CVA_API_TC-25-10 -> POST-/cvaFrontendHomePage/getAllNotificationForFrontend->Validate the Notifications page shows which are added to ADD TO PRIORITY and REMIND ME LATER Notifications',()=>{
    cy.request({
       method: 'POST',
        url: '/cvaFrontendHomePage/getAllNotificationForFrontend',
       body:{
        "favorite":true,
        "saveForLater":true
        },
        headers: {
          authorization : token
        },
    }).then((response)=>{
        expect(response.status).equal(200)
        //cy.log(response.body)
        cy.log(JSON.stringify(response.body))
    })
  })
  //Ascending sort
  it('CVA_API_TC-25-11 ->/cvaFrontendHomePage/getAllNotificationForFrontend-> POST-Validate the Notifications page shows all Notifications in ASCENDING ORDER',()=>{
    cy.request({
       method: 'POST',
        url: '/cvaFrontendHomePage/getAllNotificationForFrontend',
       body:{
        "sortFilterForNews":"COMPANYNAMEASC"
        },
        headers: {
          authorization : token
        },
    }).then((response)=>{
        expect(response.status).equal(200)
        //cy.log(response.body)
        cy.log(JSON.stringify(response.body))
    })
  })
  //Descending sort
  it('CVA_API_TC-25-12 -> POST-/cvaFrontendHomePage/getAllNotificationForFrontend->Validate the Notifications page shows all Notifications in DESCENDING ORDER',()=>{
    cy.request({
       method: 'POST',
        url: '/cvaFrontendHomePage/getAllNotificationForFrontend',
       body:{
        "sortFilterForNews":"COMPANYNAMEDESC"
        },
        headers: {
          authorization : token
        },
      }).then((response)=>{
        expect(response.status).equal(200)
        expect(response.body).to.not.be.null
        cy.log(JSON.stringify(response.body))
    })
  })
  //Latest Notifications
  it('CVA_API_TC-25-13 -> POST-/cvaFrontendHomePage/getAllNotificationForFrontend->Validate the Notifications page shows LATEST Notifications',()=>{
    cy.request({
       method: 'POST',
        url: '/cvaFrontendHomePage/getAllNotificationForFrontend',
       body:{
        "daysFilter":1
        },
        headers: {
          authorization : token
        },
      }).then((response)=>{
        expect(response.status).equal(200)
        //cy.log(response.body)
        //cy.log(JSON.stringify(response.body).includes("ACRYSIL LIMITED"))
        cy.log(JSON.stringify(response.body))
    })
  })
  //This week Notifications
  it('CVA_API_TC-25-14 -> POST-/cvaFrontendHomePage/getAllNotificationForFrontend->Validate the Notifications page shows THIS WEEK Notifications',()=>{
    cy.request({
       method: 'POST',
        url: '/cvaFrontendHomePage/getAllNotificationForFrontend',
       body:{
        "daysFilter":7
        },
        headers: {
          authorization : token
        },
      }).then((response)=>{
        expect(response.status).equal(200)
        cy.log(response.body)
        cy.log(JSON.stringify(response.body))
    })
  })
  //This month Notifications
  it('CVA_API_TC-25-15 -> POST-/cvaFrontendHomePage/getAllNotificationForFrontend->Validate the Notifications page shows THIS MONTH Notifications',()=>{
    cy.request({
       method: 'POST',
        url: '/cvaFrontendHomePage/getAllNotificationForFrontend',
       body:{
        "daysFilter":30
        },
        headers: {
          authorization : token
        },
      }).then((response)=>{
        expect(response.status).equal(200)
        cy.log(response.body)
        cy.log(JSON.stringify(response.body))
    })
  })

})
