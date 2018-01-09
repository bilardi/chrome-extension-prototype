/**
 * Test helper of the javascript code of the sample chrome extension
 *
 * This is a basic unit test of Jasmine. There is a test for each function.
 * If the functions contained conditions, there would be more tests for each public function.
 *
 * @license MIT
 * @author Alessandra Bilardi <alessandra.bilardi@gmail.com>
 * @see https://github.com/bilardi/chrome-extension-prototype for details
 */

describe("popup methods", function() {
  describe("when getCurrentTabUrl is called", function(){
    it("should be able to call chrome tabs query method", function() {
      spyOn(chrome.tabs, 'query');
      getCurrentTabUrl((url) => {});
      expect(chrome.tabs.query).toHaveBeenCalled();
    });
  });
  describe("when changeBackgroundColor is called", function(){
    it("should be able to call chrome tabs executeScript method", function() {
      spyOn(chrome.tabs, 'executeScript');
      changeBackgroundColor('test');
      expect(chrome.tabs.executeScript).toHaveBeenCalled();
    });
  });
  describe("when saveBackgroundColor is called", function(){
    it("should be able to call chrome storage sync method with specific parameters", function() {
      spyOn(chrome.storage.sync, 'set');
      saveBackgroundColor('test', 'url');
      expect(chrome.storage.sync.set).toHaveBeenCalled();
      expect(chrome.storage.sync.set).toHaveBeenCalledWith({'test':'url'});
    });
  });
  describe("when getSavedBackgroundColor is called", function(){
    it("should be able to call chrome storage sync method", function() {
      spyOn(chrome.storage.sync, 'get');
      getSavedBackgroundColor('test', (url) => {});
      expect(chrome.storage.sync.get).toHaveBeenCalled();
    });
  });
});
