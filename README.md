# rpc-json-utils [![npm version](https://badge.fury.io/js/rpc-json-utils.svg)](https://badge.fury.io/js/rpc-json-utils)

JSON-RPC Utils

## API

```typescript
// ---------- Typings ----------------------------------------------- //

interface JsonRpcRequest<T = any> {
  id: number;
  jsonrpc: string;
  method: string;
  params: T;
}

interface JsonRpcResult<T = any> {
  id: number;
  jsonrpc: string;
  result: T;
}

interface JsonRpcError {
  id: number;
  jsonrpc: string;
  error: ErrorResponse;
}

interface ErrorResponse {
  code: number;
  message: string;
}

type JsonRpcResponse<T = any> = JsonRpcResult<T> | JsonRpcError;

type JsonRpcPayload<P = any, R = any> = JsonRpcRequest<P> | JsonRpcResponse<R>;

// ---------- Formatters ----------------------------------------------- //

function formatJsonRpcRequest<T = any>(
  method: string,
  params: T,
  id?: number
): JsonRpcRequest<T>;

function formatJsonRpcResult<T = any>(id: number, result: T): JsonRpcResult<T>;

function formatJsonRpcError(
  id: number,
  error?: string | ErrorResponse
): JsonRpcError;

function formatErrorMessage(error?: string | ErrorResponse): ErrorResponse;

// ---------- Validators ----------------------------------------------- //

function isJsonRpcRequest<T = any>(
  payload: JsonRpcPayload
): payload is JsonRpcRequest<T>;

function isJsonRpcResponse<T = any>(
  payload: JsonRpcPayload
): payload is JsonRpcResponse<T>;

function isJsonRpcResult<T = any>(
  payload: JsonRpcPayload
): payload is JsonRpcResult<T>;

function isJsonRpcError(payload: JsonRpcPayload): payload is JsonRpcError;
```
