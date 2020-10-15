# rpc-json-utils [![npm version](https://badge.fury.io/js/rpc-json-utils.svg)](https://badge.fury.io/js/rpc-json-utils)

JSON-RPC Utils

## API

```typescript
interface JsonRpcRequest {
  id: number;
  jsonrpc: string;
  method: string;
  params: any;
}

interface JsonRpcResult {
  id: number;
  jsonrpc: string;
  result: any;
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

function formatJsonRpcRequest(method: string, params: any): JsonRpcRequest;

function formatJsonRpcResult(id: number, result: any): JsonRpcResult;

function formatJsonRpcError(
  id: number,
  error?: string | ErrorResponse
): JsonRpcError;

function formatErrorMessage(error?: string | ErrorResponse): ErrorResponse;
```
