import {
  JsonRpcError,
  JsonRpcPayload,
  JsonRpcRequest,
  JsonRpcResponse,
  JsonRpcResult,
} from './types';

export function isJsonRpcRequest<T>(
  payload: JsonRpcPayload
): payload is JsonRpcRequest<T> {
  return 'method' in payload;
}

export function isJsonRpcResponse(
  payload: JsonRpcPayload
): payload is JsonRpcResponse {
  return !isJsonRpcRequest(payload);
}

export function isJsonRpcResult(
  payload: JsonRpcPayload
): payload is JsonRpcResult {
  return 'result' in payload;
}

export function isJsonRpcError(
  payload: JsonRpcPayload
): payload is JsonRpcError {
  return 'error' in payload;
}
