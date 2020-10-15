export interface JsonRpcRequest {
  id: number;
  jsonrpc: string;
  method: string;
  params: any;
}

export interface JsonRpcResult {
  id: number;
  jsonrpc: string;
  result: any;
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
