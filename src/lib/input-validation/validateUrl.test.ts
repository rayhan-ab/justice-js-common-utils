/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validateUrl, ValidateUrlErrorType } from "./validateUrl";

const mockValidateUrl = jest.fn(validateUrl);
afterEach(mockValidateUrl.mockClear);
afterAll(mockValidateUrl.mockRestore);

describe("validateUrl returns correct output", () => {
  it("returns empty error string when given empty string, but it is not a required field", () => {
    mockValidateUrl("", { isRequired: false });
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(null);
  });

  it("returns empty error string when given valid url format with query params", () => {
    mockValidateUrl("https://accelbyte.io?queryParam=value");
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(null);
  });

  it("returns empty error string when given valid localhost url format", () => {
    mockValidateUrl("http://localhost:3000/player");
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(null);
  });

  it("returns empty error string when given valid localhost IP url format", () => {
    mockValidateUrl("http://127.0.0.1:3000/player");
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(null);
  });

  it("returns empty error string when given PSN orbis url format", () => {
    mockValidateUrl("orbis://games");
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(null);
  });

  it("returns null when given mailto scheme", () => {
    mockValidateUrl("mailto:John.Doe@example.com");
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(null);
  });

  it("returns null when given news scheme", () => {
    mockValidateUrl("news:comp.infosystems.www.servers.unix");
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(null);
  });

  it("returns null when given tel scheme", () => {
    mockValidateUrl("tel:+1-816-555-1212");
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(null);
  });

  it("returns null when given ftp scheme", () => {
    mockValidateUrl("ftp://ftp.is.co.za/rfc/rfc1808.txt");
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(null);
  });

  it("returns error string 'empty' when given empty string", () => {
    mockValidateUrl("");
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.empty);
  });

  it("returns error string 'exceedLengthLimit' when given valid url but exceeds default length (2000)", () => {
    mockValidateUrl(
      // tslint:disable-next-line
      "https://accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyteaccelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyteaccelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyteaccelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyteaccelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyteaccelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyteaccelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyteaccelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbyte.accelbytee"
    );
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.exceedLengthLimit);
  });

  it("returns error string 'invalidFormat' when given valid localhost url format without protocol", () => {
    mockValidateUrl("localhost:3000/player");
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given valid localhost IP url format without protocol", () => {
    mockValidateUrl("127.0.0.1:3000/player");
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given url that potentially do insecure URL redirects", () => {
    mockValidateUrl("http://www.target.site?#redirect=www.fake-target.site");
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given url that potentially do command injection", () => {
    mockValidateUrl("http://sensitive/something.php?dir=;cat /etc/passwd");
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given custom protocol", () => {
    mockValidateUrl("example-protocol://example.net/something");
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given only custom protocol", () => {
    mockValidateUrl("example-protocol://");
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given [] symbol on authority", () => {
    mockValidateUrl("ldap://[2001:db8::7]/c=GB?objectClass?one");
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given custom protocol without double slash symbol '//'", () => {
    mockValidateUrl("urn:oasis:names:specification:docbook:dtd:xml:4.1.2");
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
  });

  it("returns null when given custom protocol, but it is allow custom protocol", () => {
    mockValidateUrl("example-protocol://example.net/something", { allowCustomProtocol: true });
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(null);
  });

  it("returns null when given only custom protocol, it is allow custom protocol", () => {
    mockValidateUrl("example-protocol://", { allowCustomProtocol: true });
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(null);
  });

  // tslint:disable-next-line
  it("returns error string 'invalidFormat' when given not allowed symbol on custom protocol, it is allow custom protocol", () => {
    mockValidateUrl("example|protocol=string_string*://example.net/something", { allowCustomProtocol: true });
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
  });

  it("returns null when given ftp scheme, it is allow custom protocol", () => {
    mockValidateUrl("ftp://ftp.is.co.za/rfc/rfc1808.txt", { allowCustomProtocol: true });
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(null);
  });

  it("returns null when given [] symbol on authority, it is allow custom protocol", () => {
    mockValidateUrl("ldap://[2001:db8::7]/c=GB?objectClass?one", { allowCustomProtocol: true });
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(null);
  });

  it("returns null when given mailto scheme, it is allow custom protocol", () => {
    mockValidateUrl("mailto:John.Doe@example.com", { allowCustomProtocol: true });
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(null);
  });

  it("returns null when given news scheme, it is allow custom protocol", () => {
    mockValidateUrl("news:comp.infosystems.www.servers.unix", { allowCustomProtocol: true });
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(null);
  });

  it("returns null when given tel scheme, it is allow custom protocol", () => {
    mockValidateUrl("tel:+1-816-555-1212", { allowCustomProtocol: true });
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(null);
  });

  it("returns null when given custom protocol without double slash symbol '//', it is allow custom protocol", () => {
    mockValidateUrl("urn:oasis:names:specification:docbook:dtd:xml:4.1.2", { allowCustomProtocol: true });
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(null);
  });

  it("returns error string 'invalidFormat' when only given path, it is allow custom protocol", () => {
    mockValidateUrl("/lead-the-way", { allowCustomProtocol: true });
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given string without protocol, it is allow custom protocol", () => {
    mockValidateUrl("ordinary-string", { allowCustomProtocol: true });
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given domain without protocol, it is allow custom protocol", () => {
    mockValidateUrl("example.com", { allowCustomProtocol: true });
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given ip without protocol, it is allow custom protocol", () => {
    mockValidateUrl("1.1.1.1", { allowCustomProtocol: true });
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given double colon symbol '::', it is allow custom protocol", () => {
    mockValidateUrl("2606:4700:4700::1111", { allowCustomProtocol: true });
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
  });

  // tslint:disable-next-line
  it("returns error string 'invalidFormat' when given email format without protocol, it is allow custom protocol", () => {
    mockValidateUrl("koi@pond.com", { allowCustomProtocol: true });
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given tel format without protocol, it is allow custom protocol", () => {
    mockValidateUrl("+60 800 1000 2000", { allowCustomProtocol: true });
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
  });

  // tslint:disable-next-line
  it("returns error string 'invalidFormat' when given tel format with dash separator without protocol, it is allow custom protocol", () => {
    mockValidateUrl("+1-816-555-1212", { allowCustomProtocol: true });
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given url format with an unsafe character (comma)", () => {
    mockValidateUrl("http://goo,gle");
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
  });

  it("returns null when given url format with an unsafe character (comma) but it's URL-encoded", () => {
    mockValidateUrl("https://dev%2Caccelbyte.net");
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(null);
  });

  // tslint:disable-next-line
  it("returns error string 'invalidFormat' when given custom protocol with some unsafe characters (comma and backtick), it is allow custom protocol", () => {
    mockValidateUrl("example-protocol://comp,infosystem`net", { allowCustomProtocol: true });
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given news scheme with an unsafe character (comma)", () => {
    mockValidateUrl("news:google}com");
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given url format with three or more consecutive punctuations", () => {
    mockValidateUrl("https://comp.infosystems.net..//servers.unix");
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(ValidateUrlErrorType.invalidFormat);
  });

  it("returns null when given news scheme with three or more consecutive punctuations, but they're URL-encoded", () => {
    mockValidateUrl("news:comp.infosystems.www.%26%3F%3Eservers.unix");
    expect(mockValidateUrl).toHaveBeenCalledTimes(1);
    expect(mockValidateUrl).toHaveReturnedWith(null);
  });
});
