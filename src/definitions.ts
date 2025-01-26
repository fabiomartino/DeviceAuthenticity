import type {
  DeviceAuthenticityError,
  DeviceAuthenticityOptions,
  DeviceAuthenticityResult,
  DeviceAuthenticityJailbreakOptions,
  DeviceAuthenticityRootedOptions,
  DeviceAuthenticityInstalledFromAllowedStoreOptions,
  DeviceAuthenticityCheckApkCertSignatureOptions,
  DeviceAuthenticityCheckTagsOptions,
  DeviceAuthenticityCheckPathsOptions,
  DeviceAuthenticityCheckExecutableFilesOptions,
} from './types';

/**
 * Plugin interface for DeviceAuthenticity.
 * Provides methods to check device integrity and authenticity on Android and iOS platforms.
 */
export interface DeviceAuthenticityPlugin {
  /**
   * Checks the overall authenticity of the device.
   *
   * This method performs a comprehensive analysis of device authenticity,
   * including emulator detection, rooting or jailbreaking status, and store installation verification.
   *
   * @param options - Optional configuration for the authenticity check.
   * @returns A promise resolving to the authenticity result or an error.
   *
   * @example
   * ```ts
   * const result = await DeviceAuthenticity.checkAuthenticity();
   * if (DeviceAuthenticity.isValid(result)) {
   *   console.log('Authenticity check passed');
   * } else {
   *   console.error('Authenticity check failed:', result.error);
   * }
   * ```
   * @since 0.0.3
   */
  checkAuthenticity(options?: DeviceAuthenticityOptions): Promise<DeviceAuthenticityResult | DeviceAuthenticityError>;

  /**
   * Determines if the current device is running as an emulator.
   *
   * This method helps identify whether the app is running in a simulated environment,
   * which may indicate a non-authentic setup.
   *
   * @returns A promise resolving to an object containing `isEmulator` or an error.
   * @platform Android, iOS
   * @since 0.0.4
   */
  isEmulator(): Promise<{ isEmulator: boolean } | DeviceAuthenticityError>;

  /**
   * Determines if the current iOS device is jailbroken.
   *
   * This method checks for common indicators of a jailbroken environment,
   * such as modified system paths or unauthorized app store schemas.
   *
   * @param options - Optional configuration for jailbreak detection.
   * @returns A promise resolving to an object containing `isJailbroken` or an error.
   * @platform iOS
   * @since 0.0.4
   */
  isJailbroken(
    options?: DeviceAuthenticityJailbreakOptions,
  ): Promise<{ isJailbroken: boolean } | DeviceAuthenticityError>;

  /**
   * Determines if the current Android device is rooted.
   *
   * This method identifies common indicators of rooting, such as modified files or system tags.
   *
   * @param options - Optional configuration for root detection.
   * @returns A promise resolving to an object containing `isRooted` or an error.
   * @platform Android
   * @since 0.0.4
   */
  isRooted(options?: DeviceAuthenticityRootedOptions): Promise<{ isRooted: boolean } | DeviceAuthenticityError>;

  /**
   * Verifies if the app was not installed from an approved store.
   *
   * This check can help ensure the app's distribution complies with security policies.
   *
   * @param options - Configuration specifying the list of allowed stores.
   * @returns A promise resolving to an object containing `isNotInstalledFromAllowedStore` or an error.
   * @platform Android
   * @since 0.0.4
   */
  isNotInstalledFromAllowedStore(
    options?: DeviceAuthenticityInstalledFromAllowedStoreOptions,
  ): Promise<{ isNotInstalledFromAllowedStore: boolean } | DeviceAuthenticityError>;

  /**
   * Retrieves the APK certificate signature for the installed application.
   *
   * This method can be used for verifying the application's authenticity by comparing
   * the signature with an expected value.
   *
   * @returns A promise resolving to an object containing `apkCertSignature` or an error.
   * @platform Android
   * @since 0.0.4
   */
  getApkCertSignature(): Promise<{ apkCertSignature: string } | DeviceAuthenticityError>;

  /**
   * Checks if the APK certificate signature matches the expected value.
   *
   * @param options - Configuration specifying the expected APK signature.
   * @returns A promise resolving to an object containing `apkCertSignatureMatches` or an error.
   * @platform Android
   * @since 0.0.4
   */
  checkApkCertSignature(
    options?: DeviceAuthenticityCheckApkCertSignatureOptions,
  ): Promise<{ apkCertSignatureMatches: boolean } | DeviceAuthenticityError>;

  /**
   * Analyzes the device for offending system tags that may indicate a rooted environment.
   *
   * @param options - Configuration specifying the tags to check.
   * @returns A promise resolving to an object containing `hasOffendingTags` or an error.
   * @platform Android
   * @since 0.0.4
   */
  checkTags(
    options?: DeviceAuthenticityCheckTagsOptions,
  ): Promise<{ hasOffendingTags: boolean } | DeviceAuthenticityError>;

  /**
   * Checks the device for paths associated with jailbreaking or rooting.
   *
   * @param options - Configuration specifying the paths to check.
   * @returns A promise resolving to an object containing `hasOffendingPaths` or an error.
   * @platform Android, iOS
   * @since 0.0.4
   */
  checkPaths(
    options?: DeviceAuthenticityCheckPathsOptions,
  ): Promise<{ hasOffendingPaths: boolean } | DeviceAuthenticityError>;

  /**
   * Examines executable files on the device for indicators of rooting.
   *
   * @param options - Configuration specifying the files to check.
   * @returns A promise resolving to an object containing `hasOffendingExecutableFiles` or an error.
   * @platform Android
   * @since 0.0.4
   */
  checkExecutableFiles(
    options?: DeviceAuthenticityCheckExecutableFilesOptions,
  ): Promise<{ hasOffendingExecutableFiles: boolean } | DeviceAuthenticityError>;

  /**
   * Determines if private directories are writable on the device (iOS only).
   *
   * @returns A promise resolving to an object containing `canWritePrivate` or an error.
   * @platform iOS
   * @since 0.0.5
   */
  checkPrivateWrite(): Promise<{ canWritePrivate: boolean } | DeviceAuthenticityError>;

  /**
   * Checks if the device has any third-party app stores installed (iOS only).
   *
   * @returns A promise resolving to an object containing `hasThirdPartyAppStore` or an error.
   * @platform iOS
   * @since 0.0.5
   */
  hasThirdPartyAppStore(): Promise<{ hasThirdPartyAppStore: boolean } | DeviceAuthenticityError>;

  /**
   * Determines if the given value represents a DeviceAuthenticityError.
   *
   * @param value - The value to validate.
   * @returns True if the value is a DeviceAuthenticityError, false otherwise.
   * @since 0.0.4
   */
  isError(value: unknown): value is DeviceAuthenticityError;

  /**
   * Validates if the given value is a valid result (boolean or string).
   *
   * @param value - The value to validate.
   * @returns True if the value is valid, false otherwise.
   * @since 0.0.4
   */
  isValid(value: unknown): value is boolean | string;
}
