/**
 * @file index.ts
 * @description Entry point for the DeviceAuthenticity plugin.
 * This file defines the plugin's registration and export mechanisms.
 */

import { registerPlugin } from '@capacitor/core';

import type { DeviceAuthenticityPlugin } from './definitions';
import type { DeviceAuthenticityError, DeviceAuthenticityOptions } from './types';
import { isError } from './utils';

/**
 * Registers the `DeviceAuthenticity` plugin.
 *
 * - The plugin name `DeviceAuthenticity` is used to bridge native code with JavaScript.
 * - The web implementation is dynamically imported to optimize load times and performance for web environments.
 */
const DeviceAuthenticity = registerPlugin<DeviceAuthenticityPlugin>('DeviceAuthenticity', {
  /**
   * Dynamic import of the web implementation.
   * This is used only when running in a web environment.
   *
   * @returns A promise that resolves to an instance of the `DeviceAuthenticityWeb` class.
   */
  web: () => import('./web').then((m) => new m.DeviceAuthenticityWeb()),
});

// Export definitions and utility functions for external usage
export * from './definitions';
export { DeviceAuthenticity, isError, DeviceAuthenticityError, DeviceAuthenticityOptions };
