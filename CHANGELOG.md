# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [1.3.2]
### Fix
- Typo in IAM error translation `serviceError.10136`

## [1.3.1]
### Added
- Added GDPR wrong password error translation

## [1.3.0]
### Added
- Added validateBase64

## [1.2.4]
### Changed
- Order numbers validation length to have minimum 17 length

## [1.2.3]
### Fixed
- Username regex pattern

## [1.2.2]
### Fixed
- Match display name validation with the backend validation

## [1.1.0]
### Added
- Support multi language
- Support zh-CN language

## [1.0.1]
### Fixed
- Ecommerce error translation not showed on Admin Portal

## [1.0.0]
### Added
- Added validateKubelessName
- Added validateStatisticCode
- Added ecommerce service error translation
- Added validateComplexPasswordAsObject
- Added Validation class
- Added validateAlphanumeric
- Added validateComplexPassword
- Added validateCpuSize
- Added validateDisplayName
- Added validateDockerImage
- Added validateEmail
- Added validateLength
- Added validateMemorySize
- Added validateNotEmpty
- Added validateNumeric
- Added validateOrderNumber
- Added validatePath
- Added validatePermissionResource
- Added validatePersonName
- Added validateTag
- Added validateSku
- Added validateTemplateSlug
- Added validateTopic
- Added validateUrl
- Added validateUuidV4WithoutHyphen
- Added validateAlpha, with option to check lowercase or uppercase only
- Added validateSecretKey
- Adding isRequired option for some validate function
- Adding isAllValid method, to check whether all value in validation is valid or not
- Exposed commonValidationErrorType
- Added invalidValue in commonValidationErrorType
- Added validation excluded numbers in validateNumeric
- Fixed validatePermissionResource regex to allow `*` as variable
- Fixed validatePermissionResource regex to allow alphanumeric as variable
- Fixed validateDisplayName regex to not allow double white space as separator
- Fixed validatePersonName regex to not allow double white space as separator
- Change some validate functions that has `invalidOption` error, to throw error on `invalidOption` instead of returning it.
- Update regex for UUID
- Added Justice service error translator library
- Added translateServiceErrorForAdmin on Justice service error translator library, add some translations
- Fixed validateSKU regex
- Added validateChannelName
- Changed validateChannelName separator from "_" to "-"
- Added validateBadWords with multiple localization support
- Fix validate display name when text to be validated longer than 27 char with space at the end
- Add allowUnicode param on ValidateDisplayName to support multi language character (eg: Russian, Japanese, Arabic, etc)
- Add strictSpecialCharacters param on ValidateDisplayName to allow or disable DisplayName can contain (',. -) at the mid of the text
- Add support displayName allowUnicode for language with non-spacing mark (eg: Tamil, Thai, etc)
- Added param matchingMode on validateBadWord matching to be match instead of contain
- Added more english bad words dictionary
- Added kubeless handler input validation
- Fixed validateBadWords bug when using uppercase and repeated character
- Export validateChannelName in index file of input-validation
- Added PSN redirect uri support
- Added max length parameter in display name validation
