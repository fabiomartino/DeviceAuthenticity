/**
 * @file web.ts
 * @description Web implementation of the DeviceAuthenticity plugin.
 * This implementation is limited due to the constraints of the web platform.
 */

import { CapacitorException, ExceptionCode, WebPlugin } from '@capacitor/core';

import type { DeviceAuthenticityPlugin } from './definitions';
import type { DeviceAuthenticityError, DeviceAuthenticityResult } from './types';
import { isError } from './utils';

/**
 * Web implementation of the DeviceAuthenticityPlugin interface.
 *
 * Due to the limitations of the web platform, most methods in this implementation
 * are not supported and return an error indicating their unavailability.
 */
export class DeviceAuthenticityWeb extends WebPlugin implements DeviceAuthenticityPlugin {
  /**
   * Default indicators for rooted Android devices.
   * These tags are often associated with non-standard or compromised Android builds.
   */
  static DEFAULT_ANDROID_ROOT_INDICATOR_TAGS = [
    'test-keys',
    'dev-keys',
    'userdebug',
    'engineering',
    'release-keys-debug',
    'custom',
    'rooted',
    'supersu',
    'magisk',
    'lineage',
    'unofficial',
  ];

  /**
   * Default paths indicating a jailbroken iOS device.
   * These paths are associated with tools or modifications used in jailbreaking.
   */
  static DEFAULT_IOS_JAILBREAK_PATHS = [
    '/Applications/Cydia.app',
    '/Applications/Sileo.app',
    '/Applications/Zebra.app',
    '/Applications/Installer.app',
    '/Applications/Unc0ver.app',
    '/Applications/Checkra1n.app',
    '/Library/MobileSubstrate/MobileSubstrate.dylib',
    '/usr/sbin/sshd',
    '/usr/bin/sshd',
    '/usr/libexec/sftp-server',
    '/etc/apt',
    '/private/var/lib/apt/',
    '/private/var/mobile/Library/Cydia/',
    '/private/var/stash',
    '/private/var/db/stash',
    '/private/var/jailbreak',
    '/var/mobile/Library/SBSettings/Themes',
  ];

  /**
   * Default paths associated with rooted Android devices.
   * These paths are often present in compromised systems with elevated privileges.
   */
  static DEFAULT_ANDROID_ROOTED_PATHS = [
    '/system/app/Superuser.apk',
    '/sbin/su',
    '/system/bin/su',
    '/system/xbin/su',
    '/data/local/xbin/su',
    '/data/local/bin/su',
    '/system/sd/xbin/su',
    '/system/bin/failsafe/su',
    '/data/local/su',
    '/su/bin/su',
  ];

  /**
   * Checks the overall authenticity of the device.
   *
   * This method is not supported on the web platform and will always return an error.
   * @returns An error indicating that the method is unavailable.
   */
  async checkAuthenticity(): Promise<DeviceAuthenticityResult | DeviceAuthenticityError> {
    // Always throw an error since the feature is unavailable in this context.
    throw this.createUnavailableError();
  }

  /**
   * Determines if the current device is running as an emulator.
   *
   * Not supported on the web platform.
   * @returns An error indicating that the method is unavailable.
   */
  async isEmulator(): Promise<{ isEmulator: boolean } | DeviceAuthenticityError> {
    // Always throw an error since the feature is unavailable in this context.
    throw this.createUnavailableError();
  }

  /**
   * Determines if the current iOS device is jailbroken.
   *
   * Not supported on the web platform.
   * @returns An error indicating that the method is unavailable.
   */
  async isJailbroken(): Promise<{ isJailbroken: boolean } | DeviceAuthenticityError> {
    // Always throw an error since the feature is unavailable in this context.
    throw this.createUnavailableError();
  }

  /**
   * Determines if the current Android device is rooted.
   *
   * Not supported on the web platform.
   * @returns An error indicating that the method is unavailable.
   */
  async isRooted(): Promise<{ isRooted: boolean } | DeviceAuthenticityError> {
    // Always throw an error since the feature is unavailable in this context.
    throw this.createUnavailableError();
  }

  /**
   * Verifies if the app was not installed from an approved store.
   *
   * Not supported on the web platform.
   * @returns An error indicating that the method is unavailable.
   */
  async isNotInstalledFromAllowedStore(): Promise<
    { isNotInstalledFromAllowedStore: boolean } | DeviceAuthenticityError
  > {
    // Always throw an error since the feature is unavailable in this context.
    throw this.createUnavailableError();
  }

  /**
   * Retrieves the APK certificate signature for the installed application.
   *
   * Not supported on the web platform.
   * @returns An error indicating that the method is unavailable.
   */
  async getApkCertSignature(): Promise<{ apkCertSignature: string } | DeviceAuthenticityError> {
    // Always throw an error since the feature is unavailable in this context.
    throw this.createUnavailableError();
  }

  /**
   * Checks if the APK certificate signature matches the expected value.
   *
   * Not supported on the web platform.
   * @returns An error indicating that the method is unavailable.
   */
  async checkApkCertSignature(): Promise<{ apkCertSignatureMatches: boolean } | DeviceAuthenticityError> {
    // Always throw an error since the feature is unavailable in this context.
    throw this.createUnavailableError();
  }

  /**
   * Analyzes the device for offending system tags that may indicate a rooted environment.
   *
   * Not supported on the web platform.
   * @returns An error indicating that the method is unavailable.
   */
  async checkTags(): Promise<{ hasOffendingTags: boolean } | DeviceAuthenticityError> {
    // Always throw an error since the feature is unavailable in this context.
    throw this.createUnavailableError();
  }

  /**
   * Checks the device for paths associated with jailbreaking or rooting.
   *
   * Not supported on the web platform.
   * @returns An error indicating that the method is unavailable.
   */
  async checkPaths(): Promise<{ hasOffendingPaths: boolean } | DeviceAuthenticityError> {
    // Always throw an error since the feature is unavailable in this context.
    throw this.createUnavailableError();
  }

  /**
   * Examines executable files on the device for indicators of rooting.
   *
   * Not supported on the web platform.
   * @returns An error indicating that the method is unavailable.
   */
  async checkExecutableFiles(): Promise<{ hasOffendingExecutableFiles: boolean } | DeviceAuthenticityError> {
    // Always throw an error since the feature is unavailable in this context.
    throw this.createUnavailableError();
  }

  /**
   * Checks if the device has any third-party app stores installed (iOS only).
   *
   * Not supported on the web platform.
   * @returns An error indicating that the method is unavailable.
   */
  async hasThirdPartyAppStore(): Promise<{ hasThirdPartyAppStore: boolean } | DeviceAuthenticityError> {
    // Always throw an error since the feature is unavailable in this context.
    throw this.createUnavailableError();
  }

  /**
   * Determines if private directories are writable on the device (iOS only).
   *
   * Not supported on the web platform.
   * @returns An error indicating that the method is unavailable.
   */
  async checkPrivateWrite(): Promise<{ canWritePrivate: boolean } | DeviceAuthenticityError> {
    // Always throw an error since the feature is unavailable in this context.
    throw this.createUnavailableError();
  }

  /**
   * Validates if the given value is a valid result (boolean or string).
   *
   * @param value - The value to validate.
   * @returns True if the value is valid, false otherwise.
   */
  isValid = (value: unknown): value is boolean | string => !isError(value);

  /**
   * Determines if the given value represents a DeviceAuthenticityError.
   *
   * @param value - The value to validate.
   * @returns True if the value is a DeviceAuthenticityError, false otherwise.
   */
  isError = isError;

  /**
   * Creates a standardized exception for unavailable methods.
   *
   * This utility method centralizes the creation of exceptions for functionality that is not supported
   * on the current platform, ensuring consistency in error reporting.
   *
   * @returns {CapacitorException} An exception with the code `Unavailable` and a descriptive message.
   */
  private createUnavailableError(): CapacitorException {
    return new CapacitorException('This plugin method is not implemented on this platform.', ExceptionCode.Unavailable);
  }
}
