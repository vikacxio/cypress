var token
describe('CVA_API_TC-22 ->API Validation for Creditor News page', function () {

    Cypress.config('baseUrl','http://65.1.192.243:8103')
     
    it('CVA_API_TC-22-01 ->POST- /cvaRegistration/login ->Login Of the User',()=>{
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
    //All News
    it('CVA_API_TC-22-02 -> POST-/cvaFrontendHomePage/getAllNews->Validate the News page request',()=>{
        cy.request({
           method: 'POST',
            url: '/cvaFrontendHomePage/getAllNews',
           body:
           {"size":10,"page":1
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
    // Get News For a given company
    it('CVA_API_TC-22-03 -> POST- /cvaFrontendHomePage/getNewsForGivenCompany -> Get News For a given company',()=>{
        cy.request({
           method: 'POST',
            url: '/cvaFrontendHomePage/getAllNews',
           body:{
             "companyName":"AANCHAL ISPAT LIMITED",
             "size":10,
             "page":1
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
    //get news for a given industry
    it('CVA_API_TC-22-04 -> POST-/cvaFrontendHomePage/getAllNews-> Validate the News page shows a particular Industry related news',()=>{
        cy.request({
           method: 'POST',
            url: '/cvaFrontendHomePage/getAllNews',
           body:{
            industry: "Chemicals",
             size: 10, 
             page: 1
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
    // Add News As a Add to Priority for given company
    it('CVA_API_TC-22-05 ->GET -> /cvaFrontendHomePage/addNewsAsFavoriteForGivenCompany -> Add News As a favorite for given company',()=>{
        cy.request({
           method: 'GET',
            url: '/cvaFrontendHomePage/addNewsAsFavoriteForGivenCompany',
          qs:{
            newsId: "NEWS_ID34530",
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
    //set Add to priority in header 
    it('CVA_API_TC-22-06 -> POST-/cvaFrontendHomePage/getAllNews->Validate the News page shows which are added to ADD TO PRIORITY News',()=>{
        cy.request({
           method: 'POST',
            url: '/cvaFrontendHomePage/getAllNews',
           body:{
             "favorite":true,
             "size":10,
             "page":1},
            headers: {
              authorization : token
            },
        }).then((response)=>{
            expect(response.status).equal(200)
            //cy.log(response.body)
            cy.log(JSON.stringify(response.body))
            })
    })
    //Add News As a Remind me later for given company
    it('CVA_API_TC-22-07 -> GET- /cvaFrontendHomePage/addNewsAsSaveForLaterForGivenCompany -> Add News As a save For later for given company',()=>{
        cy.request({
           method: 'GET',
            url: '/cvaFrontendHomePage/addNewsAsSaveForLaterForGivenCompany',
            qs:{
              newsId: "NEWS_ID34529",
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
    //set Remind me Later in header
    it('CVA_API_TC-22-08 -> POST-/cvaFrontendHomePage/getAllNews-> Validate the News page shows which are added to REMIND ME LATER news',()=>{
        cy.request({
           method: 'POST',
            url: '/cvaFrontendHomePage/getAllNews',
           body:{
            "saveForLater":true,
            "size":10,
            "page":1
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
    //set both Add to Priority and Remind me Later  in header
    it('CVA_API_TC-22-09 -> POST-/cvaFrontendHomePage/getAllNews-> Validate the News page shows which are added to ADD TO PRIORITY and REMIND ME LATER News',()=>{
        cy.request({
           method: 'POST',
            url: '/cvaFrontendHomePage/getAllNews',
           body:{
             "favorite": true,
             "saveForLater": true,
              "size": 10,
               "page": 1},
            headers: {
              authorization : token
            },
        }).then((response)=>{
            expect(response.status).equal(200)
            //cy.log(response.body)
            cy.log(JSON.stringify(response.body))
            })
    })
    //Ascending Order
    it('CVA_API_TC-22-10-> POST-/cvaFrontendHomePage/getAllNews ->Validate the News page shows all Notifications in ASCENDING ORDER',()=>{
        cy.request({
           method: 'POST',
            url: '/cvaFrontendHomePage/getAllNews',
           body:{
             "sortFilterForNews": "COMPANYNAMEASC", 
             "size": 10, 
             "page": 1},
            headers: {
              authorization : token
            },
        }).then((response)=>{
            expect(response.status).equal(200)
            //cy.log(response.body)
            cy.log(JSON.stringify(response.body))
            })
    })
    //Descending Order
    it('CVA_API_TC-22-11 -> POST-/cvaFrontendHomePage/getAllNews ->Validate the News page shows all News in DESCENDING ORDER',()=>{
        cy.request({
           method: 'POST',
            url: '/cvaFrontendHomePage/getAllNews',
           body:{
             "sortFilterForNews": "COMPANYNAMEDESC", 
             "size": 10, 
             "page": 1
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
    //Latest News
    it('CVA_API_TC-22-12 -> POST-/cvaFrontendHomePage/getAllNews->Validate the News page shows LATEST News',()=>{
        cy.request({
           method: 'POST',
            url: '/cvaFrontendHomePage/getAllNews',
            body:{
              "daysFilter":1,
              "size":10,
               "page":1
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
    //This Week News
    it('CVA_API_TC-22-13 -> POST-/cvaFrontendHomePage/getAllNews ->Validate the News page shows THIS WEEK News',()=>{
        cy.request({
           method: 'POST',
            url: '/cvaFrontendHomePage/getAllNews',
            body:{
              "daysFilter":7,
              "size":10,
               "page":1
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
    //This Month News
    it('CVA_API_TC-22-14 -> POST-/cvaFrontendHomePage/getAllNews -> Validate the News page shows THIS MONTH News',()=>{
        cy.request({
           method: 'POST',
            url: '/cvaFrontendHomePage/getAllNews',
           body:{
             "daysFilter":30,
             "size":10,
             "page":1
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
