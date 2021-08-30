// ***********************************************************
// This example plugins/index.js can be used to load plugins


// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//const { initPlugin } = require("cypress-plugin-snapshots/plugin");


// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
//const readXlsx = require('./read-xlsx')

/*module.exports = (on, config) => {
  on('task', {
    'readXlsx': readXlsx.read
  })
}*/
/**
 * @type {Cypress.PluginConfig}
 * 
 */
 const { initPlugin } = require("cypress-plugin-snapshots/plugin");
 //let percyHealthCheck = require("@percy/cypress/task");
 const xlsx = require("xlsx");
 module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  initPlugin(on, config);
  on("task", {

    generateJSONFromExcel: generateJSONFromExcel,
   
  });
  return config;
};


 function generateJSONFromExcel(agrs) {
  const wb = xlsx.readFile(agrs.excelFilePath);
  const ws = wb.Sheets[agrs.sheetName];
  return xlsx.utils.sheet_to_json(ws, { raw: false });
}
// eslint-disable-next-line no-unused-vars
/*module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}*/


// eslint-disable-next-line no-unused-vars
//module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
//}



require('@applitools/eyes-cypress')(module);
