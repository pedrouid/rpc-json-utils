export interface JsonRpcRequest<T = any> {
  id: number;
  jsonrpc: string;
  method: string;
  params: T;
}

export interface JsonRpcResult<T = any> {
  id: number;
  jsonrpc: string;
  result: T;
}

export interface JsonRpcError {
  id: number;
  jsonrpc: string;
  error: ErrorResponse;
}

export interface ErrorResponse {
  code: number;
  message: string;
}

export type JsonRpcResponse<T = any> = JsonRpcResult<T> | JsonRpcError;

export type JsonRpcPayload<P = any, R = any> =
  | JsonRpcRequest<P>
  | JsonRpcResponse<R>;
