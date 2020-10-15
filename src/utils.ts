import { payloadId } from 'rpc-payload-id';

import {
  getError,
  getErrorByCode,
  isReservedErrorCode,
  isServerErrorCode,
} from './error';
import { INTERNAL_ERROR, SERVER_ERROR } from './constants';
import {
  ErrorResponse,
  JsonRpcError,
  JsonRpcRequest,
  JsonRpcResult,
} from './types';

export function formatJsonRpcRequest(
  method: string,
  params: any
): JsonRpcRequest {
  return {
    id: payloadId(),
    jsonrpc: '2.0',
    method,
    params,
  };
}

export function formatJsonRpcResult(id: number, result: any): JsonRpcResult {
  return {
    id,
    jsonrpc: '2.0',
    result,
  };
}

export function formatJsonRpcError(
  id: number,
  error?: string | ErrorResponse
): JsonRpcError {
  return {
    id,
    jsonrpc: '2.0',
    error: formatErrorMessage(error),
  };
}

export function formatErrorMessage(
  error?: string | ErrorResponse
): ErrorResponse {
  if (typeof error === 'undefined') {
    return getError(INTERNAL_ERROR);
  }
  if (typeof error === 'string') {
    error = {
      ...getError(SERVER_ERROR),
      message: error,
    };
  }
  if (isReservedErrorCode(error.code)) {
    error = getErrorByCode(error.code);
  }
  if (!isServerErrorCode(error.code)) {
    throw new Error('Error code is not in server code range');
  }
  return error;
}
