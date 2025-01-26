/**
 * @file types.ts
 * @description Type definitions for the DeviceAuthenticity plugin, including results, options, and error objects.
 */

/**
 * Result of the device authenticity check.
 */
export interface DeviceAuthenticityResult {
  /**
   * Indicates whether the device is rooted (Android only).
   */
  isRooted?: boolean;

  /**
   * Indicates whether the device is an emulator.
   */
  isEmulator?: boolean;

  /**
   * Indicates whether the app is installed from an unapproved store (Android only).
   */
  isNotInstalledFromAllowedStore?: boolean;

  /**
   * Indicates whether the device is jailbroken (iOS only).
   */
  isJailbroken?: boolean;

  /**
   * APK certificate signature (Android only).
   */
  apkCertSignature?: string;

  /**
   * Indicates whether the APK certificate signature matches an expected value (Android only).
   */
  apkCertSignatureMatch?: boolean;

  /**
   * Indicates the presence of offending executable files (Android only).
   */
  hasOffendingExecutableFiles?: boolean;

  /**
   * Indicates the presence of offending tags (Android only).
   */
  hasOffendingTags?: boolean;

  /**
   * Indicates the presence of offending paths (iOS only).
   */
  hasOffendingPaths?: boolean;

  /**
   * Indicates if private directories are writable (iOS only).
   */
  canWritePrivate?: boolean;

  /**
   * Indicates whether a third-party app store is detected (iOS only).
   */
  hasThirdPartyAppStore?: boolean;

  /**
   * List of detected third-party app store schemas (iOS only).
   */
  detectedThirdPartyAppStoreSchemas?: string[];

  /**
   * List of detected writable private paths (iOS only).
   */
  detectedPrivateWritePaths?: string[];

  /**
   * List of detected offending paths (iOS only).
   */
  detectedOffendingPaths?: string[];

  /**
   * List of failed checks on both Android and iOS.
   */
  failedChecks?: string[];
}

/**
 * Options for configuring the device authenticity check.
 */
export interface DeviceAuthenticityOptions {
  /**
   * List of allowed app stores for validation (Android only).
   * Example: `['com.android.vending', 'com.amazon.venezia']`
   */
  allowedStores?: string[];

  /**
   * Custom APK certificate signature for validation (Android only).
   */
  apkCertSignature?: string;

  /**
   * Override the default root indicator paths (Android only).
   * Use in conjunction with default paths for best results.
   * "/system/app/Superuser.apk",
   * "/sbin/su",
   * "/system/bin/su",
   * "/system/xbin/su",
   * "/data/local/xbin/su",
   * "/data/local/bin/su",
   * "/system/sd/xbin/su",
   * "/system/bin/failsafe/su",
   * "/data/local/su",
   * "/su/bin/su"
   */
  rootIndicatorPaths?: string[];

  /**
   * Override the default root indicator tags (Android only).
   * Example: `['test-keys', 'magisk', 'supersu']`
   * "test-keys",           // Common for many rooted devices
   * "dev-keys",            // Development keys, often seen in custom ROMs
   * "userdebug",           // User-debuggable build, common in rooted devices
   * "engineering",         // Engineering build, may indicate a modified system
   * "release-keys-debug",  // Debug version of release keys
   * "custom",              // Explicitly marked as custom
   * "rooted",              // Explicitly marked as rooted (rare, but possible)
   * "supersu",             // Indicates SuperSU rooting tool
   * "magisk",              // Indicates Magisk rooting framework
   * "lineage",             // LineageOS custom ROM
   * "unofficial"           // Unofficial build, common in custom ROMs
   * If you are planning to extend the list, please do as follow:
   * const completeList = [...DeviceAuthenticityWeb.DEFAULT_ANDROID_ROOT_INDICATOR_TAGS, ...yourList];
   * Then use completeList in the plugin. Otherwise, the default list will be used.
   */
  rootIndicatorTags?: string[];

  /**
   * Override the default jailbreak indicator paths (iOS only).
   * "/Applications/Cydia.app",
   * "/Library/MobileSubstrate/MobileSubstrate.dylib",
   * "/bin/bash",
   * "/usr/sbin/sshd",
   * "/etc/apt",
   * "/private/var/lib/apt/"
   * If you are planning to extend the list, please do as follow:
   * const completeList = [...DeviceAuthenticityWeb.DEFAULT_IOS_JAILBREAK_PATHS, ...yourList];
   * Then use completeList in the plugin. Otherwise, the default list will be used.
   */
  jailbreakIndicatorPaths?: string[];

  /**
   * Override the default forbidden schemas for app stores (iOS only).
   * Example: `['cydia://', 'sileo://']`
   * "cydia://",
   * "sileo://",
   * "zbra://",
   * "filza://",
   * "undecimus://",
   * "activator://"
   */
  offendingAppStoreSchemas?: string[];

  /**
   * Override the default rooted paths for detection (Android only).
   * "/system/app/Superuser.apk",
   * "/sbin/su",
   * "/system/bin/su",
   * "/system/xbin/su",
   * "/data/local/xbin/su",
   * "/data/local/bin/su",
   * "/system/sd/xbin/su",
   * "/system/bin/failsafe/su",
   * "/data/local/su",
   * "/su/bin/su"
   * If you are planning to extend the list, please do as follow:
   * const completeList = [...DeviceAuthenticityWeb.DEFAULT_ANDROID_ROOTED_PATHS, ...yourList];
   * Then use completeList in the plugin. Otherwise, the default list will be used.
   */
  androidRootedPaths?: string[];
}

/**
 * Error object returned when a check fails.
 */
export interface DeviceAuthenticityError {
  /**
   * A human-readable error message describing the issue.
   */
  error: string;
}

/**
 * Options for configuring jailbreak detection (iOS only).
 */
export interface DeviceAuthenticityJailbreakOptions {
  /**
   * Custom paths to check for jailbreak indicators.
   */
  jailbreakIndicatorPaths?: string[];

  /**
   * Custom schemas to detect third-party app stores.
   */
  forbiddenAppStoreSchemas?: string[];
}

/**
 * Options for configuring root detection (Android only).
 */
export interface DeviceAuthenticityRootedOptions {
  /**
   * Custom paths to check for root indicators.
   */
  rootIndicatorPaths?: string[];

  /**
   * Custom tags to check for root indicators.
   */
  rootIndicatorTags?: string[];

  /**
   * Custom file paths to check for root indicators.
   */
  rootIndicatorFiles?: string[];
}

/**
 * Options for checking if the app is installed from an allowed store (Android only).
 */
export interface DeviceAuthenticityInstalledFromAllowedStoreOptions {
  /**
   * List of allowed store package names.
   */
  allowedStores?: string[];
}

/**
 * Options for checking the APK certificate signature (Android only).
 */
export interface DeviceAuthenticityCheckApkCertSignatureOptions {
  /**
   * The expected APK certificate signature for validation.
   */
  expectedApkSignature: string;
}

/**
 * Options for checking offending tags (Android only).
 */
export interface DeviceAuthenticityCheckTagsOptions {
  /**
   * List of tags to check against for root indicators.
   */
  rootIndicatorTags: string[];
}

/**
 * Options for checking offending paths (iOS only).
 */
export interface DeviceAuthenticityCheckPathsOptions {
  /**
   * List of paths to check for jailbreak indicators.
   */
  jailbreakIndicatorPaths: string[];
}

/**
 * Options for checking offending executable files (Android only).
 */
export interface DeviceAuthenticityCheckExecutableFilesOptions {
  /**
   * List of file paths to check for root indicators.
   */
  rootIndicatorFiles: string[];
}
