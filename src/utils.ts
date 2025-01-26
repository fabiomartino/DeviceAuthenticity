/**
 * @file utils.ts
 * @description Utility functions for the DeviceAuthenticity plugin.
 * Provides methods to validate results and determine if a value is an error object.
 */

import type { DeviceAuthenticityError } from './types';

/**
 * Checks if a given value is a `DeviceAuthenticityError` object.
 *
 * A `DeviceAuthenticityError` is identified by the presence of an `error` property
 * in the object. This utility is used to differentiate between valid results and errors.
 *
 * @param value - The value to evaluate.
 * @returns True if the value is an object containing an `error` property, otherwise false.
 *
 * @example
 * ```ts
 * const error = { error: 'Some error occurred' };
 * if (isError(error)) {
 *   console.error('Error:', error.error);
 * } else {
 *   console.log('Valid result:', error);
 * }
 * ```
 */
export function isError(value: unknown): value is DeviceAuthenticityError {
  return typeof value === 'object' && value !== null && 'error' in value;
}

/**
 * Validates a given value to determine if it is a valid result.
 *
 * A valid result is defined as any value that is not identified as a `DeviceAuthenticityError`.
 * This utility complements `isError` by providing the inverse check.
 *
 * @param value - The value to validate.
 * @returns True if the value is valid (not an error), otherwise false.
 *
 * @example
 * ```ts
 * const result = 'Authenticity check passed';
 * if (isValid(result)) {
 *   console.log('Valid result:', result);
 * } else {
 *   console.error('Invalid result:', result);
 * }
 * ```
 */
export function isValid(value: unknown): value is boolean | string {
  return !isError(value);
}
