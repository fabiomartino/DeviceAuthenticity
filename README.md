# capacitor-device-authenticity

### Verify the authenticity of your Ionic Capacitor app

The `capacitor-device-authenticity` plugin offers methods to check if a device is jailbroken, rooted, running in an emulator, or if the app is installed from unauthorized sources. It is designed to help developers enhance the security posture of their applications.

---

## Disclaimer

This software is provided under the MIT License. It is offered "as is," without any express or implied warranties, including but not limited to the implied warranties of merchantability and fitness for a particular purpose. By using this software, you agree to the following:

1. **Limitations of Jailbreak/Root Detection**  
   - The methods implemented in this plugin are not foolproof. They may fail to detect certain cases of jailbroken/rooted devices or unauthorized app store installations.
   - This plugin is not a substitute for a comprehensive security strategy in production environments.

2. **Educational and Informational Purposes Only**  
   - The code is intended for developers seeking to learn or build basic device authenticity checks. It should not be solely relied upon for production-grade security measures.

3. **Compliance and Responsibility**  
   - Developers and users of this plugin are responsible for ensuring compliance with all relevant laws, regulations, and platform policies. Unauthorized modifications of devices or violations of platform terms of service are not encouraged or endorsed.

4. **Privacy Considerations**  
   - The use of this software may have implications for user privacy and device autonomy. Always disclose its use in your app's privacy policy if required by regulations.

By using this plugin, you acknowledge and accept these terms.

---

## Development Status

🚨 **Important:**  
This plugin is still under development and is not ready for production use.  
The author has not yet verified whether the methods provided may trigger security warnings or cause app store rejections.

---

[![HitCount](https://hits.dwyl.com/mchl18/capacitor-device-authenticity.svg)](https://hits.dwyl.com/mchl18/capacitor-device-authenticity)


[![https://nodei.co/npm/capacitor-device-authenticity.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/capacitor-device-authenticity.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/capacitor-device-authenticity)

## Installation

Install the plugin using your preferred package manager:

### With npm:

```bash
npm install capacitor-device-authenticity
```

### With yarn:

```bash
yarn add capacitor-device-authenticity
```

### Sync native files:

```bash
npx cap sync
```

## API

<docgen-index>

* [`checkAuthenticity(...)`](#checkauthenticity)
* [`isEmulator()`](#isemulator)
* [`isJailbroken(...)`](#isjailbroken)
* [`isRooted(...)`](#isrooted)
* [`isNotInstalledFromAllowedStore(...)`](#isnotinstalledfromallowedstore)
* [`getApkCertSignature()`](#getapkcertsignature)
* [`checkApkCertSignature(...)`](#checkapkcertsignature)
* [`checkTags(...)`](#checktags)
* [`checkPaths(...)`](#checkpaths)
* [`checkExecutableFiles(...)`](#checkexecutablefiles)
* [`checkPrivateWrite()`](#checkprivatewrite)
* [`hasThirdPartyAppStore()`](#hasthirdpartyappstore)
* [`isError(...)`](#iserror)
* [`isValid(...)`](#isvalid)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

Plugin interface for DeviceAuthenticity.
Provides methods to check device integrity and authenticity on Android and iOS platforms.

### checkAuthenticity(...)

```typescript
checkAuthenticity(options?: DeviceAuthenticityOptions | undefined) => Promise<DeviceAuthenticityResult | DeviceAuthenticityError>
```

Checks the overall authenticity of the device.

This method performs a comprehensive analysis of device authenticity,
including emulator detection, rooting or jailbreaking status, and store installation verification.

| Param         | Type                                                                            | Description                                          |
| ------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------- |
| **`options`** | <code><a href="#deviceauthenticityoptions">DeviceAuthenticityOptions</a></code> | - Optional configuration for the authenticity check. |

**Returns:** <code>Promise&lt;<a href="#deviceauthenticityresult">DeviceAuthenticityResult</a> | <a href="#deviceauthenticityerror">DeviceAuthenticityError</a>&gt;</code>

**Since:** 0.0.3

--------------------


### isEmulator()

```typescript
isEmulator() => Promise<{ isEmulator: boolean; } | DeviceAuthenticityError>
```

Determines if the current device is running as an emulator.

This method helps identify whether the app is running in a simulated environment,
which may indicate a non-authentic setup.

**Returns:** <code>Promise&lt;<a href="#deviceauthenticityerror">DeviceAuthenticityError</a> | { isEmulator: boolean; }&gt;</code>

**Since:** 0.0.4

--------------------


### isJailbroken(...)

```typescript
isJailbroken(options?: DeviceAuthenticityJailbreakOptions | undefined) => Promise<{ isJailbroken: boolean; } | DeviceAuthenticityError>
```

Determines if the current iOS device is jailbroken.

This method checks for common indicators of a jailbroken environment,
such as modified system paths or unauthorized app store schemas.

| Param         | Type                                                                                              | Description                                       |
| ------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| **`options`** | <code><a href="#deviceauthenticityjailbreakoptions">DeviceAuthenticityJailbreakOptions</a></code> | - Optional configuration for jailbreak detection. |

**Returns:** <code>Promise&lt;<a href="#deviceauthenticityerror">DeviceAuthenticityError</a> | { isJailbroken: boolean; }&gt;</code>

**Since:** 0.0.4

--------------------


### isRooted(...)

```typescript
isRooted(options?: DeviceAuthenticityRootedOptions | undefined) => Promise<{ isRooted: boolean; } | DeviceAuthenticityError>
```

Determines if the current Android device is rooted.

This method identifies common indicators of rooting, such as modified files or system tags.

| Param         | Type                                                                                        | Description                                  |
| ------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------- |
| **`options`** | <code><a href="#deviceauthenticityrootedoptions">DeviceAuthenticityRootedOptions</a></code> | - Optional configuration for root detection. |

**Returns:** <code>Promise&lt;<a href="#deviceauthenticityerror">DeviceAuthenticityError</a> | { isRooted: boolean; }&gt;</code>

**Since:** 0.0.4

--------------------


### isNotInstalledFromAllowedStore(...)

```typescript
isNotInstalledFromAllowedStore(options?: DeviceAuthenticityInstalledFromAllowedStoreOptions | undefined) => Promise<{ isNotInstalledFromAllowedStore: boolean; } | DeviceAuthenticityError>
```

Verifies if the app was not installed from an approved store.

This check can help ensure the app's distribution complies with security policies.

| Param         | Type                                                                                                                              | Description                                            |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| **`options`** | <code><a href="#deviceauthenticityinstalledfromallowedstoreoptions">DeviceAuthenticityInstalledFromAllowedStoreOptions</a></code> | - Configuration specifying the list of allowed stores. |

**Returns:** <code>Promise&lt;<a href="#deviceauthenticityerror">DeviceAuthenticityError</a> | { isNotInstalledFromAllowedStore: boolean; }&gt;</code>

**Since:** 0.0.4

--------------------


### getApkCertSignature()

```typescript
getApkCertSignature() => Promise<{ apkCertSignature: string; } | DeviceAuthenticityError>
```

Retrieves the APK certificate signature for the installed application.

This method can be used for verifying the application's authenticity by comparing
the signature with an expected value.

**Returns:** <code>Promise&lt;<a href="#deviceauthenticityerror">DeviceAuthenticityError</a> | { apkCertSignature: string; }&gt;</code>

**Since:** 0.0.4

--------------------


### checkApkCertSignature(...)

```typescript
checkApkCertSignature(options?: DeviceAuthenticityCheckApkCertSignatureOptions | undefined) => Promise<{ apkCertSignatureMatches: boolean; } | DeviceAuthenticityError>
```

Checks if the APK certificate signature matches the expected value.

| Param         | Type                                                                                                                      | Description                                            |
| ------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| **`options`** | <code><a href="#deviceauthenticitycheckapkcertsignatureoptions">DeviceAuthenticityCheckApkCertSignatureOptions</a></code> | - Configuration specifying the expected APK signature. |

**Returns:** <code>Promise&lt;<a href="#deviceauthenticityerror">DeviceAuthenticityError</a> | { apkCertSignatureMatches: boolean; }&gt;</code>

**Since:** 0.0.4

--------------------


### checkTags(...)

```typescript
checkTags(options?: DeviceAuthenticityCheckTagsOptions | undefined) => Promise<{ hasOffendingTags: boolean; } | DeviceAuthenticityError>
```

Analyzes the device for offending system tags that may indicate a rooted environment.

| Param         | Type                                                                                              | Description                                   |
| ------------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| **`options`** | <code><a href="#deviceauthenticitychecktagsoptions">DeviceAuthenticityCheckTagsOptions</a></code> | - Configuration specifying the tags to check. |

**Returns:** <code>Promise&lt;<a href="#deviceauthenticityerror">DeviceAuthenticityError</a> | { hasOffendingTags: boolean; }&gt;</code>

**Since:** 0.0.4

--------------------


### checkPaths(...)

```typescript
checkPaths(options?: DeviceAuthenticityCheckPathsOptions | undefined) => Promise<{ hasOffendingPaths: boolean; } | DeviceAuthenticityError>
```

Checks the device for paths associated with jailbreaking or rooting.

| Param         | Type                                                                                                | Description                                    |
| ------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| **`options`** | <code><a href="#deviceauthenticitycheckpathsoptions">DeviceAuthenticityCheckPathsOptions</a></code> | - Configuration specifying the paths to check. |

**Returns:** <code>Promise&lt;<a href="#deviceauthenticityerror">DeviceAuthenticityError</a> | { hasOffendingPaths: boolean; }&gt;</code>

**Since:** 0.0.4

--------------------


### checkExecutableFiles(...)

```typescript
checkExecutableFiles(options?: DeviceAuthenticityCheckExecutableFilesOptions | undefined) => Promise<{ hasOffendingExecutableFiles: boolean; } | DeviceAuthenticityError>
```

Examines executable files on the device for indicators of rooting.

| Param         | Type                                                                                                                    | Description                                    |
| ------------- | ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| **`options`** | <code><a href="#deviceauthenticitycheckexecutablefilesoptions">DeviceAuthenticityCheckExecutableFilesOptions</a></code> | - Configuration specifying the files to check. |

**Returns:** <code>Promise&lt;<a href="#deviceauthenticityerror">DeviceAuthenticityError</a> | { hasOffendingExecutableFiles: boolean; }&gt;</code>

**Since:** 0.0.4

--------------------


### checkPrivateWrite()

```typescript
checkPrivateWrite() => Promise<{ canWritePrivate: boolean; } | DeviceAuthenticityError>
```

Determines if private directories are writable on the device (iOS only).

**Returns:** <code>Promise&lt;<a href="#deviceauthenticityerror">DeviceAuthenticityError</a> | { canWritePrivate: boolean; }&gt;</code>

**Since:** 0.0.5

--------------------


### hasThirdPartyAppStore()

```typescript
hasThirdPartyAppStore() => Promise<{ hasThirdPartyAppStore: boolean; } | DeviceAuthenticityError>
```

Checks if the device has any third-party app stores installed (iOS only).

**Returns:** <code>Promise&lt;<a href="#deviceauthenticityerror">DeviceAuthenticityError</a> | { hasThirdPartyAppStore: boolean; }&gt;</code>

**Since:** 0.0.5

--------------------


### isError(...)

```typescript
isError(value: unknown) => value is DeviceAuthenticityError
```

Determines if the given value represents a <a href="#deviceauthenticityerror">DeviceAuthenticityError</a>.

| Param       | Type                 | Description              |
| ----------- | -------------------- | ------------------------ |
| **`value`** | <code>unknown</code> | - The value to validate. |

**Returns:** <code>boolean</code>

**Since:** 0.0.4

--------------------


### isValid(...)

```typescript
isValid(value: unknown) => value is string | boolean
```

Validates if the given value is a valid result (boolean or string).

| Param       | Type                 | Description              |
| ----------- | -------------------- | ------------------------ |
| **`value`** | <code>unknown</code> | - The value to validate. |

**Returns:** <code>boolean</code>

**Since:** 0.0.4

--------------------


### Interfaces


#### DeviceAuthenticityResult

Result of the device authenticity check.

| Prop                                    | Type                  | Description                                                                               |
| --------------------------------------- | --------------------- | ----------------------------------------------------------------------------------------- |
| **`isRooted`**                          | <code>boolean</code>  | Indicates whether the device is rooted (Android only).                                    |
| **`isEmulator`**                        | <code>boolean</code>  | Indicates whether the device is an emulator.                                              |
| **`isNotInstalledFromAllowedStore`**    | <code>boolean</code>  | Indicates whether the app is installed from an unapproved store (Android only).           |
| **`isJailbroken`**                      | <code>boolean</code>  | Indicates whether the device is jailbroken (iOS only).                                    |
| **`apkCertSignature`**                  | <code>string</code>   | APK certificate signature (Android only).                                                 |
| **`apkCertSignatureMatch`**             | <code>boolean</code>  | Indicates whether the APK certificate signature matches an expected value (Android only). |
| **`hasOffendingExecutableFiles`**       | <code>boolean</code>  | Indicates the presence of offending executable files (Android only).                      |
| **`hasOffendingTags`**                  | <code>boolean</code>  | Indicates the presence of offending tags (Android only).                                  |
| **`hasOffendingPaths`**                 | <code>boolean</code>  | Indicates the presence of offending paths (iOS only).                                     |
| **`canWritePrivate`**                   | <code>boolean</code>  | Indicates if private directories are writable (iOS only).                                 |
| **`hasThirdPartyAppStore`**             | <code>boolean</code>  | Indicates whether a third-party app store is detected (iOS only).                         |
| **`detectedThirdPartyAppStoreSchemas`** | <code>string[]</code> | List of detected third-party app store schemas (iOS only).                                |
| **`detectedPrivateWritePaths`**         | <code>string[]</code> | List of detected writable private paths (iOS only).                                       |
| **`detectedOffendingPaths`**            | <code>string[]</code> | List of detected offending paths (iOS only).                                              |
| **`failedChecks`**                      | <code>string[]</code> | List of failed checks on both Android and iOS.                                            |


#### DeviceAuthenticityError

Error object returned when a check fails.

| Prop        | Type                | Description                                          |
| ----------- | ------------------- | ---------------------------------------------------- |
| **`error`** | <code>string</code> | A human-readable error message describing the issue. |


#### DeviceAuthenticityOptions

Options for configuring the device authenticity check.

| Prop                           | Type                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------ | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`allowedStores`**            | <code>string[]</code> | List of allowed app stores for validation (Android only). Example: `['com.android.vending', 'com.amazon.venezia']`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **`apkCertSignature`**         | <code>string</code>   | Custom APK certificate signature for validation (Android only).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **`rootIndicatorPaths`**       | <code>string[]</code> | Override the default root indicator paths (Android only). Use in conjunction with default paths for best results. "/system/app/Superuser.apk", "/sbin/su", "/system/bin/su", "/system/xbin/su", "/data/local/xbin/su", "/data/local/bin/su", "/system/sd/xbin/su", "/system/bin/failsafe/su", "/data/local/su", "/su/bin/su"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **`rootIndicatorTags`**        | <code>string[]</code> | Override the default root indicator tags (Android only). Example: `['test-keys', 'magisk', 'supersu']` "test-keys", // Common for many rooted devices "dev-keys", // Development keys, often seen in custom ROMs "userdebug", // User-debuggable build, common in rooted devices "engineering", // Engineering build, may indicate a modified system "release-keys-debug", // Debug version of release keys "custom", // Explicitly marked as custom "rooted", // Explicitly marked as rooted (rare, but possible) "supersu", // Indicates SuperSU rooting tool "magisk", // Indicates Magisk rooting framework "lineage", // LineageOS custom ROM "unofficial" // Unofficial build, common in custom ROMs If you are planning to extend the list, please do as follow: const completeList = [...DeviceAuthenticityWeb.DEFAULT_ANDROID_ROOT_INDICATOR_TAGS, ...yourList]; Then use completeList in the plugin. Otherwise, the default list will be used. |
| **`jailbreakIndicatorPaths`**  | <code>string[]</code> | Override the default jailbreak indicator paths (iOS only). "/Applications/Cydia.app", "/Library/MobileSubstrate/MobileSubstrate.dylib", "/bin/bash", "/usr/sbin/sshd", "/etc/apt", "/private/var/lib/apt/" If you are planning to extend the list, please do as follow: const completeList = [...DeviceAuthenticityWeb.DEFAULT_IOS_JAILBREAK_PATHS, ...yourList]; Then use completeList in the plugin. Otherwise, the default list will be used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **`offendingAppStoreSchemas`** | <code>string[]</code> | Override the default forbidden schemas for app stores (iOS only). Example: `['cydia://', 'sileo://']` "cydia://", "sileo://", "zbra://", "filza://", "undecimus://", "activator://"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **`androidRootedPaths`**       | <code>string[]</code> | Override the default rooted paths for detection (Android only). "/system/app/Superuser.apk", "/sbin/su", "/system/bin/su", "/system/xbin/su", "/data/local/xbin/su", "/data/local/bin/su", "/system/sd/xbin/su", "/system/bin/failsafe/su", "/data/local/su", "/su/bin/su" If you are planning to extend the list, please do as follow: const completeList = [...DeviceAuthenticityWeb.DEFAULT_ANDROID_ROOTED_PATHS, ...yourList]; Then use completeList in the plugin. Otherwise, the default list will be used.                                                                                                                                                                                                                                                                                                                                                                                                                                        |


#### DeviceAuthenticityJailbreakOptions

Options for configuring jailbreak detection (iOS only).

| Prop                           | Type                  | Description                                      |
| ------------------------------ | --------------------- | ------------------------------------------------ |
| **`jailbreakIndicatorPaths`**  | <code>string[]</code> | Custom paths to check for jailbreak indicators.  |
| **`forbiddenAppStoreSchemas`** | <code>string[]</code> | Custom schemas to detect third-party app stores. |


#### DeviceAuthenticityRootedOptions

Options for configuring root detection (Android only).

| Prop                     | Type                  | Description                                     |
| ------------------------ | --------------------- | ----------------------------------------------- |
| **`rootIndicatorPaths`** | <code>string[]</code> | Custom paths to check for root indicators.      |
| **`rootIndicatorTags`**  | <code>string[]</code> | Custom tags to check for root indicators.       |
| **`rootIndicatorFiles`** | <code>string[]</code> | Custom file paths to check for root indicators. |


#### DeviceAuthenticityInstalledFromAllowedStoreOptions

Options for checking if the app is installed from an allowed store (Android only).

| Prop                | Type                  | Description                          |
| ------------------- | --------------------- | ------------------------------------ |
| **`allowedStores`** | <code>string[]</code> | List of allowed store package names. |


#### DeviceAuthenticityCheckApkCertSignatureOptions

Options for checking the APK certificate signature (Android only).

| Prop                       | Type                | Description                                            |
| -------------------------- | ------------------- | ------------------------------------------------------ |
| **`expectedApkSignature`** | <code>string</code> | The expected APK certificate signature for validation. |


#### DeviceAuthenticityCheckTagsOptions

Options for checking offending tags (Android only).

| Prop                    | Type                  | Description                                        |
| ----------------------- | --------------------- | -------------------------------------------------- |
| **`rootIndicatorTags`** | <code>string[]</code> | List of tags to check against for root indicators. |


#### DeviceAuthenticityCheckPathsOptions

Options for checking offending paths (iOS only).

| Prop                          | Type                  | Description                                      |
| ----------------------------- | --------------------- | ------------------------------------------------ |
| **`jailbreakIndicatorPaths`** | <code>string[]</code> | List of paths to check for jailbreak indicators. |


#### DeviceAuthenticityCheckExecutableFilesOptions

Options for checking offending executable files (Android only).

| Prop                     | Type                  | Description                                      |
| ------------------------ | --------------------- | ------------------------------------------------ |
| **`rootIndicatorFiles`** | <code>string[]</code> | List of file paths to check for root indicators. |

</docgen-api>

### Type checking:

In order to check a value we need to use the type guards `isValid` and `isError` along with a cast to boolean if it is not an error.

```typescript
const result = await DeviceAuthenticityWeb.checkTags();
if (!isError(result)) {
  const hasSuspiciousTags: boolean = result;
} else {
  const error: DeviceAuthenticityError = result;
}
```

### Example usage:

(will try and simplify this)

```typescript
import { DeviceAuthenticity, isError } from 'capacitor-device-authenticity';

  // only available on ios and android
  if (Capacitor.getPlatform() !== 'web') {
    const authenticityResult = await DeviceAuthenticity.checkAuthenticity();
    if (!isError(authenticityResult) && authenticityResult?.failedChecks?.length > 0) {
      alert(
        'Could not verify your device. Failed checks: ' +
          failedChecks.join(', ')
      );
      App.exitApp();
    } else {
      alert('Could not verify your device. Error: ' + authenticityResult?.error);
    }
  }
```

### TODO

- [ ] pass overrides in both plugins
