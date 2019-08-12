# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
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
- Added validateTemplateSlug
- Added validateTopic
- Added validateUrl
- Added validateUuidV4WithoutHyphen
- Added validateAlpha
- Adding isRequired option for some validate function
- Adding isAllValid method, to check whether all value in validation is valid or not
- Exposed commonValidationErrorType
- Added invalidValue in commonValidationErrorType
- Added validation excluded numbers in validateNumeric
- Fixed validatePermissionResource regex to allow `*` as variable
- Change some validate functions that has `invalidOption` error, to throw error on `invalidOption` instead of returning it.
