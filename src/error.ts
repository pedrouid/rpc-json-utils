import { ErrorResponse } from './types';
import {
  INTERNAL_ERROR,
  INVALID_PARAMS,
  INVALID_REQUEST,
  METHOD_NOT_FOUND,
  PARSE_ERROR,
  SERVER_ERROR,
} from './constants';

const RESERVED_ERROR_CODES = [-32700, -32600, -32601, -32602, -32603];
const SERVER_ERROR_CODE_RANGE = [-32000, -32099];

const STANDARD_ERROR_MAP = {
  [PARSE_ERROR]: { code: -32700, message: 'Parse error' },
  [INVALID_REQUEST]: { code: -32600, message: 'Invalid Request' },
  [METHOD_NOT_FOUND]: { code: -32601, message: 'Method not found' },
  [INVALID_PARAMS]: { code: -32602, message: 'Invalid params' },
  [INTERNAL_ERROR]: { code: -32603, message: 'Internal error' },
  [SERVER_ERROR]: { code: -32000, message: 'Server error' },
};

export function isServerErrorCode(code: number): boolean {
  return (
    code <= SERVER_ERROR_CODE_RANGE[0] && code >= SERVER_ERROR_CODE_RANGE[1]
  );
}

export function isReservedErrorCode(code: number): boolean {
  return RESERVED_ERROR_CODES.includes(code);
}

export function getError(type: string): ErrorResponse {
  if (!Object.keys(STANDARD_ERROR_MAP).includes(type)) {
    return STANDARD_ERROR_MAP[INTERNAL_ERROR];
  }
  return STANDARD_ERROR_MAP[type];
}

export function getErrorByCode(code: number): ErrorResponse {
  const match = Object.values(STANDARD_ERROR_MAP).find(e => e.code === code);
  if (!match) {
    return STANDARD_ERROR_MAP[INTERNAL_ERROR];
  }
  return match;
}
