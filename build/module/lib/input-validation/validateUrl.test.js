/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { validateUrl, ValidateUrlErrorType } from "./validateUrl";
var mockValidateUrl = jest.fn(validateUrl);
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
        expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.empty);
    });
    it("returns error string 'exceedLengthLimit' when given valid url but exceeds default length (2000)", function () {
        mockValidateUrl(
        // tslint:disable-next-line
        "https://accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyteaccelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyteaccelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyteaccelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyteaccelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyteaccelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyteaccelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyteaccelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbytee");
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.exceedLengthLimit);
    });
    it("returns error string 'invalidFormat' when given valid localhost url format without protocol", function () {
        mockValidateUrl("localhost:3000/player");
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given valid localhost IP url format without protocol", function () {
        mockValidateUrl("127.0.0.1:3000/player");
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given url that potentially do insecure URL redirects", function () {
        mockValidateUrl("http://www.target.site?#redirect=www.fake-target.site");
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given url that potentially do command injection", function () {
        mockValidateUrl("http://sensitive/something.php?dir=;cat /etc/passwd");
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given custom protocol", function () {
        mockValidateUrl("example-protocol://example.net/something");
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given only custom protocol", function () {
        mockValidateUrl("example-protocol://");
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given [] symbol on authority", function () {
        mockValidateUrl("ldap://[2001:db8::7]/c=GB?objectClass?one");
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given custom protocol without double slash symbol '//'", function () {
        mockValidateUrl("urn:oasis:names:specification:docbook:dtd:xml:4.1.2");
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
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
        expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
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
        expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given string without protocol, it is allow custom protocol", function () {
        mockValidateUrl("ordinary-string", { allowCustomProtocol: true });
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given domain without protocol, it is allow custom protocol", function () {
        mockValidateUrl("example.com", { allowCustomProtocol: true });
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given ip without protocol, it is allow custom protocol", function () {
        mockValidateUrl("1.1.1.1", { allowCustomProtocol: true });
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given double colon symbol '::', it is allow custom protocol", function () {
        mockValidateUrl("2606:4700:4700::1111", { allowCustomProtocol: true });
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string 'invalidFormat' when given email format without protocol, it is allow custom protocol", function () {
        mockValidateUrl("koi@pond.com", { allowCustomProtocol: true });
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given tel format without protocol, it is allow custom protocol", function () {
        mockValidateUrl("+60 800 1000 2000", { allowCustomProtocol: true });
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string 'invalidFormat' when given tel format with dash separator without protocol, it is allow custom protocol", function () {
        mockValidateUrl("+1-816-555-1212", { allowCustomProtocol: true });
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given url format with an unsafe character (comma)", function () {
        mockValidateUrl("http://goo,gle");
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
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
        expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given news scheme with an unsafe character (comma)", function () {
        mockValidateUrl("news:google}com");
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given url format with three or more consecutive punctuations", function () {
        mockValidateUrl("https://comp.infosystems.net..//servers.unix");
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
    });
    it("returns null when given news scheme with three or more consecutive punctuations, but they're URL-encoded", function () {
        mockValidateUrl("news:comp.infosystems.www.%26%3F%3Eservers.unix");
        expect(mockValidateUrl).toHaveBeenCalledTimes(1);
        expect(mockValidateUrl).toHaveReturnedWith(null);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVVcmwudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZVVybC50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsV0FBVyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxFLElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDN0MsU0FBUyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNyQyxRQUFRLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXRDLFFBQVEsQ0FBQyxvQ0FBb0MsRUFBRTtJQUM3QyxFQUFFLENBQUMsb0ZBQW9GLEVBQUU7UUFDdkYsZUFBZSxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMEVBQTBFLEVBQUU7UUFDN0UsZUFBZSxDQUFDLHVDQUF1QyxDQUFDLENBQUM7UUFDekQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxrRUFBa0UsRUFBRTtRQUNyRSxlQUFlLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUNoRCxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMscUJB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