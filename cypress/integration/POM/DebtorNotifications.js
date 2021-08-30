///<reference types="cypress-xpath" />
import info1 from '../../fixtures/notificationdata.json'

class DebtorNotifications {
    clickOnNotifications() {
        cy.xpath('//i[@class="icon  notifications"]').click({ force: true })
    }
    clickOnViewAll() {
        cy.xpath('//a[text()="View All"]').click({ force: true })
    }
    titleandUrlVerification() {
        cy.wait(2000)
        cy.xpath('//span[@class="section-title ml-2"]').should('have.text', 'Notifications')
        cy.url().should('eq', 'http://cva-india-test.s3-website.ap-south-1.amazonaws.com/dashboard/debtor')
    }
    closeBox() {
        cy.xpath('//a[@class="actions-wrap-close"]').click({ force: true })
    }
    all() {
        cy.xpath('//a[text()="All"]').click({ force: true })
    }
    latest() {
        cy.xpath('//a[text()="Latest"]').click({ force: true })
    }
    thisWeek() {
        cy.xpath('//a[text()="This Week"]').click({ force: true })
    }
    thisMonth() {
        cy.xpath('//a[text()="This Month"]').click({ force: true })
    }

    remindme() {
        cy.xpath('//a[@data-title="Remind me later"]').click({ force: true })
    }
    checkRemindme() {
        cy.wait(2000)
        cy.xpath('//i[@class="icon toolbar-remind active"]').should('be.visible')
        cy.xpath('//i[@class="icon toolbar-remind "]').should('not.exist')

    }
    priority() {
        cy.xpath('//a[@data-title="Add to Priority"]').click({ force: true })
    }
    checkPriority() {
        cy.wait(2000)
        cy.xpath('//i[@class="icon toolbar-priority active"]').should('be.visible')
        cy.xpath('//i[@class="icon toolbar-priority "]').should('not.exist')
    }
    checkRemainderandPriority() {
        cy.xpath('//i[@class="icon toolbar-remind active"]').should('be.visible')

        cy.xpath('//i[@class="icon toolbar-priority "]').should('be.visible')

    }
    addReminder() {
        cy.xpath('//i[@class="icon toolbar-remind "]')
            .each(($el, index, $list) => {
                var rm = $el.attr('class')
                cy.log(rm)
                if (rm == 'icon toolbar-remind ') {
                    cy.wait(4000)
                    $el.click({ force: true })

                }
                else {
                    cy.log('Hi')
                }

            })
    }
    addToPriority() {
        cy.xpath('//i[@class="icon toolbar-priority "]')
            .each(($el, index, $list) => {
                var prior = $el.attr('class')
                cy.log(prior)
                if (prior == 'icon toolbar-priority ')
                    $el.click({ force: true })

            })
    }
    filter() {
        cy.reload()
        cy.xpath('//a[@data-title="Filter"]').click({ force: true })
        cy.xpath('//div[@class="dd-menu-scroll AllNotifications_ddMenuScroll__5uTco"]/a')
            .each(($el, index, $list) => {
                var industries = $el.attr('name')
                if (industries == info1.industryname) {
                    cy.wrap($el).click({ force: true })
                }
            })


    }
    checkFilter() {
        cy.xpath('//div[@class="all-item all_news_item"]')
            .each(($el, index, $list) => {
                var names = $el.text()
                cy.log(names)
                //cy.xpath('//div[@class="icons_company_wrap"]/div/i').should('exist')
            })
    }
    sortAscending() {
        cy.xpath('//a[@data-title="Sort"]').click({ force: true })
        cy.xpath('//i[@class="icon sort-ascending"]').click({ force: true })
    }
    sortDescending() {
        cy.xpath('//a[@data-title="Sort"]').click({ force: true })
        cy.xpath('//i[@class="icon sort-descending"]').click({ force: true })
    }
    clickOnPrint() {
        cy.xpath('//a[@data-title="Print"]').should('exist')
    }
    viewCard() {
        cy.xpath('//*[@id="actionContainer"]/div/div[1]/div[1]/div[4]/a').click({ multiple: true })
        cy.contains('All').should('exist')
    }
    dateandTime() {
        var d = new Date();
        var month = new Array();
        month[0] = "JAN";
        month[1] = "FEB";
        month[2] = "MAR";
        month[3] = "APR";
        month[4] = "MAY";
        month[5] = "JUN";
        month[6] = "JUL";
        month[7] = "AUG";
        month[8] = "SEP";
        month[9] = "OCT";
        month[10] = "NOV";
        month[11] = "DEC";
        var n = month[d.getMonth()];
        var today = new Date()
        var date = today.getDate() + ' ' + n;
        cy.log(date)
        var yr = today.getFullYear()

        var syr = yr.toString()
        var dateyr = date + "' " + syr.substr(2, 4)
        cy.log(dateyr)
        cy.xpath('//div[@class="date-time"]')
            .each(($el, index, $list) => {
                var date = $el.text()
                cy.log(date)
                
                expect

            })
    }
    checkLatest() {
        var d = new Date();
        var month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";
        var n = month[d.getMonth()];
        var today = new Date()
        var date = n + ' ' + today.getDate();
        cy.log(date)

        // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds
        cy.xpath('//div[@class="date-time"]')
            .each(($el, index, $list) => {
                var late = $el.text()
                cy.log(late)
                if (prior == 'icon toolbar-priority ')
                    $el.click({ force: true })

            })
    }
}
export default DebtorNotifications