"use strict";
/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var validateUrl_1 = require("./validateUrl");
var mockValidateUrl = jest.fn(validateUrl_1.validateUrl);
afterEach(mockValidateUrl.mockClear);
afterAll(mockValidateUrl.mockRestore);
describe("validateUrl returns correct output", function () {
    it("returns empty error string when given empty string, but it is not a required field", function () {
        mockValidateUrl("", { isRequired: false });
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(null);
    });
    it("returns empty error string when given valid url format with query params", function () {
        mockValidateUrl("https://accelbyte.io?queryParam=value");
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(null);
    });
    it("returns empty error string when given valid localhost url format", function () {
        mockValidateUrl("http://localhost:3000/player");
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(null);
    });
    it("returns empty error string when given valid localhost IP url format", function () {
        mockValidateUrl("http://127.0.0.1:3000/player");
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(null);
    });
    it("returns empty error string when given PSN orbis url format", function () {
        mockValidateUrl("orbis://games");
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(null);
    });
    it("returns null when given mailto scheme", function () {
        mockValidateUrl("mailto:John.Doe@example.com");
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(null);
    });
    it("returns null when given news scheme", function () {
        mockValidateUrl("news:comp.infosystems.www.servers.unix");
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(null);
    });
    it("returns null when given tel scheme", function () {
        mockValidateUrl("tel:+1-816-555-1212");
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(null);
    });
    it("returns null when given ftp scheme", function () {
        mockValidateUrl("ftp://ftp.is.co.za/rfc/rfc1808.txt");
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(null);
    });
    it("returns error string 'empty' when given empty string", function () {
        mockValidateUrl("");
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(validateUrl_1.ValidateUrlErrorType.empty);
    });
    it("returns error string 'exceedLengthLimit' when given valid url but exceeds default length (2000)", function () {
        mockValidateUrl(
        // tslint:disable-next-line
        "https://accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyteaccelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyteaccelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyteaccelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyteaccelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyteaccelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyteaccelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyteaccelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbytee");
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(validateUrl_1.ValidateUrlErrorType.exceedLengthLimit);
    });
    it("returns error string 'invalidFormat' when given valid localhost url format without protocol", function () {
        mockValidateUrl("localhost:3000/player");
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(validateUrl_1.ValidateUrlErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given valid localhost IP url format without protocol", function () {
        mockValidateUrl("127.0.0.1:3000/player");
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(validateUrl_1.ValidateUrlErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given url that potentially do insecure URL redirects", function () {
        mockValidateUrl("http://www.target.site?#redirect=www.fake-target.site");
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(validateUrl_1.ValidateUrlErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given url that potentially do command injection", function () {
        mockValidateUrl("http://sensitive/something.php?dir=;cat /etc/passwd");
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(validateUrl_1.ValidateUrlErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given custom protocol", function () {
        mockValidateUrl("example-protocol://example.net/something");
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(validateUrl_1.ValidateUrlErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given only custom protocol", function () {
        mockValidateUrl("example-protocol://");
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(validateUrl_1.ValidateUrlErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given [] symbol on authority", function () {
        mockValidateUrl("ldap://[2001:db8::7]/c=GB?objectClass?one");
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(validateUrl_1.ValidateUrlErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given custom protocol without double slash symbol '//'", function () {
        mockValidateUrl("urn:oasis:names:specification:docbook:dtd:xml:4.1.2");
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(validateUrl_1.ValidateUrlErrorType.invalidFormat);
    });
    it("returns null when given custom protocol, but it is allow custom protocol", function () {
        mockValidateUrl("example-protocol://example.net/something", { allowCustomProtocol: true });
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(null);
    });
    it("returns null when given only custom protocol, it is allow custom protocol", function () {
        mockValidateUrl("example-protocol://", { allowCustomProtocol: true });
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(null);
    });
    // tslint:disable-next-line
    it("returns error string 'invalidFormat' when given not allowed symbol on custom protocol, it is allow custom protocol", function () {
        mockValidateUrl("example|protocol=string_string*://example.net/something", { allowCustomProtocol: true });
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(validateUrl_1.ValidateUrlErrorType.invalidFormat);
    });
    it("returns null when given ftp scheme, it is allow custom protocol", function () {
        mockValidateUrl("ftp://ftp.is.co.za/rfc/rfc1808.txt", { allowCustomProtocol: true });
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(null);
    });
    it("returns null when given [] symbol on authority, it is allow custom protocol", function () {
        mockValidateUrl("ldap://[2001:db8::7]/c=GB?objectClass?one", { allowCustomProtocol: true });
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(null);
    });
    it("returns null when given mailto scheme, it is allow custom protocol", function () {
        mockValidateUrl("mailto:John.Doe@example.com", { allowCustomProtocol: true });
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(null);
    });
    it("returns null when given news scheme, it is allow custom protocol", function () {
        mockValidateUrl("news:comp.infosystems.www.servers.unix", { allowCustomProtocol: true });
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(null);
    });
    it("returns null when given tel scheme, it is allow custom protocol", function () {
        mockValidateUrl("tel:+1-816-555-1212", { allowCustomProtocol: true });
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(null);
    });
    it("returns null when given custom protocol without double slash symbol '//', it is allow custom protocol", function () {
        mockValidateUrl("urn:oasis:names:specification:docbook:dtd:xml:4.1.2", { allowCustomProtocol: true });
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(null);
    });
    it("returns error string 'invalidFormat' when only given path, it is allow custom protocol", function () {
        mockValidateUrl("/lead-the-way", { allowCustomProtocol: true });
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(validateUrl_1.ValidateUrlErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given string without protocol, it is allow custom protocol", function () {
        mockValidateUrl("ordinary-string", { allowCustomProtocol: true });
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(validateUrl_1.ValidateUrlErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given domain without protocol, it is allow custom protocol", function () {
        mockValidateUrl("example.com", { allowCustomProtocol: true });
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(validateUrl_1.ValidateUrlErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given ip without protocol, it is allow custom protocol", function () {
        mockValidateUrl("1.1.1.1", { allowCustomProtocol: true });
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(validateUrl_1.ValidateUrlErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given double colon symbol '::', it is allow custom protocol", function () {
        mockValidateUrl("2606:4700:4700::1111", { allowCustomProtocol: true });
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(validateUrl_1.ValidateUrlErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string 'invalidFormat' when given email format without protocol, it is allow custom protocol", function () {
        mockValidateUrl("koi@pond.com", { allowCustomProtocol: true });
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(validateUrl_1.ValidateUrlErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given tel format without protocol, it is allow custom protocol", function () {
        mockValidateUrl("+60 800 1000 2000", { allowCustomProtocol: true });
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(validateUrl_1.ValidateUrlErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string 'invalidFormat' when given tel format with dash separator without protocol, it is allow custom protocol", function () {
        mockValidateUrl("+1-816-555-1212", { allowCustomProtocol: true });
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(validateUrl_1.ValidateUrlErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given url format with an unsafe character (comma)", function () {
        mockValidateUrl("http://goo,gle");
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(validateUrl_1.ValidateUrlErrorType.invalidFormat);
    });
    it("returns null when given url format with an unsafe character (comma) but it's URL-encoded", function () {
        mockValidateUrl("https://dev%2Caccelbyte.net");
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(null);
    });
    // tslint:disable-next-line
    it("returns error string 'invalidFormat' when given custom protocol with some unsafe characters (comma and backtick), it is allow custom protocol", function () {
        mockValidateUrl("example-protocol://comp,infosystem`net", { allowCustomProtocol: true });
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(validateUrl_1.ValidateUrlErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given news scheme with an unsafe character (comma)", function () {
        mockValidateUrl("news:google}com");
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(validateUrl_1.ValidateUrlErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given url format with three or more consecutive punctuations", function () {
        mockValidateUrl("https://comp.infosystems.net..//servers.unix");
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(validateUrl_1.ValidateUrlErrorType.invalidFormat);
    });
    it("returns null when given news scheme with three or more consecutive punctuations, but they're URL-encoded", function () {
        mockValidateUrl("news:comp.infosystems.www.%26%3F%3Eservers.unix");
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(null);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVVcmwudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZVVybC50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOztBQUVILDZDQUFrRTtBQUVsRSxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLHlCQUFXLENBQUMsQ0FBQztBQUM3QyxTQUFTLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3JDLFFBQVEsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFdEMsUUFBUSxDQUFDLG9DQUFvQyxFQUFFO0lBQzdDLEVBQUUsQ0FBQyxvRkFBb0YsRUFBRTtRQUN2RixlQUFlLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDM0MsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywwRUFBMEUsRUFBRTtRQUM3RSxlQUFlLENBQUMsdUNBQXVDLENBQUMsQ0FBQztRQUN6RCxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25ELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGtFQUFrRSxFQUFFO1FBQ3JFLGVBQWUsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCxNQUFNLENB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