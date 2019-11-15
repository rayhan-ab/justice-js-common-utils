# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
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
- Added validateAlpha
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
