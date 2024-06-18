// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
    verbose: true,
    testEnvironment: "node",
    setupFilesAfterEnv: ["<rootDir>/__tests__/setupTests.js"],
    clearMocks: true,
    testMatch: [
        "**/**/*.test.js"
        ]    
  };
  
  
module.exports = config;


