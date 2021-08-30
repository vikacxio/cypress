var token
describe('CVA_API_TC-24 -> API Validation for Debtor Notifications page  ', function () {

    Cypress.config('baseUrl','http://65.1.192.243:8103')
     
    it('CVA_API_TC-24-01 -> POST /cvaRegistration/login -> Login Of the User',()=>{
        cy.request({
          method: 'POST',
          url:'/cvaRegistration/login',
         
          headers:{
            'content-type':'application/json'
          },
          body:{
            "password":"9e53246d7a8e55d7583534e123bbf30837f2bf85b8394a05f1c368e64b5e6f6a",
            "userPhoneNumber": "karthikselvaraj844@gmail.com"
          },
        
        }).then(function(response){

            const respBody = response.body;
            token = respBody['token']

            expect(response.status).equal(200)
            expect(response.body).to.have.property('success',true)
        })
    })

    //ALL Notification
    it('CVA_API_TC-24-02 -> POST-/cvaFrontendHomePage/getAllNotificationForFrontend -> Get All Notification For Frontend',()=>{
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

    //Latest Notification
    it('CVA_API_TC-24-03 -> POST-/cvaFrontendHomePage/getAllNotificationForFrontend -> Get All Notification For Frontend',()=>{
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
            cy.log(JSON.stringify(response.body))
        })
    })

    // This week Notifications
    it('CVA_API_TC-24-04 -> POST-/cvaFrontendHomePage/getAllNotificationForFrontend -> Get All Notification For Frontend',()=>{
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
            //cy.log(response.body)
            cy.log(JSON.stringify(response.body))
        })
    })

    //This month notification
    it('CVA_API_TC-24-05 -> POST-/cvaFrontendHomePage/getAllNotificationForFrontend -> Get All Notification For Frontend',()=>{
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
            //cy.log(response.body)
            cy.log(JSON.stringify(response.body))
        })
    })
    
     //set remind me later
     it('CVA_API_TC-24-06 ->  GET-/cvaFrontendHomePage/addNotificationAsSaveForLaterForGivenCompany -> Add Notification As a save for later for given company',()=>{
      cy.request({
         method: 'GET',
          url: '/cvaFrontendHomePage/addNotificationAsSaveForLaterForGivenCompany',
      qs:{
        notificationId: "NOTIFICATION_42169",
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

  //set remind me later on header
  it('CVA_API_TC-24-07 -> POST-/cvaFrontendHomePage/getAllNotificationForFrontend -> Get All Notification For Frontend',()=>{
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
  it('CVA_API_TC-24-08 ->  GET-/cvaFrontendHomePage/addNotificationAsFavoriteForGivenCompany -> Add Notification As a favorite for given company',()=>{
    cy.request({
       method: 'GET',
        url: '/cvaFrontendHomePage/addNotificationAsFavoriteForGivenCompany',
      qs:{
      notificationId: "NOTIFICATION_42168",
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
  it('CVA_API_TC-24-09 -> POST-/cvaFrontendHomePage/getAllNotificationForFrontend->Validate the Notifications page shows which are added to ADD TO PRIORITY Notifications',()=>{
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

  //set both remind me later and add to priority in header
  it('CVA_API_TC-24-10 -> POST-/cvaFrontendHomePage/getAllNotificationForFrontend->Validate the Notifications page shows which are added to ADD TO PRIORITY and REMIND ME LATER Notifications',()=>{
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

  //Sort-> Ascending
  it('CVA_API_TC-24-11 ->/cvaFrontendHomePage/getAllNotificationForFrontend-> POST-Validate the Notifications page shows all Notifications in ASCENDING ORDER',()=>{
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

  //Sort-> Descending
  it('CVA_API_TC-24-12 -> POST-/cvaFrontendHomePage/getAllNotificationForFrontend->Validate the Notifications page shows all Notifications in DESCENDING ORDER',()=>{
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


})
