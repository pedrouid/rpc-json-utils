import isEqual from 'lodash.isequal';

import {
  formatJsonRpcRequest,
  formatJsonRpcResult,
  formatJsonRpcError,
  formatErrorMessage,
  isJsonRpcRequest,
  isJsonRpcResponse,
  isJsonRpcResult,
  isJsonRpcError,
} from '../src';

function compare(a: any, b: any) {
  if (typeof a !== typeof b) return false;
  return isEqual(a, b);
}

const TEST_ID = 1;
const TEST_METHOD = 'test_method';
const TEST_PARAMS = { something: true };
const TEST_RESULT = { whatever: true };
const TEST_ERROR_MESSAGE = 'Something went wrong';
const TEST_ERROR = { code: -32000, message: TEST_ERROR_MESSAGE };
const TEST_JSONRPC_REQUEST = {
  id: TEST_ID,
  jsonrpc: '2.0',
  method: TEST_METHOD,
  params: TEST_PARAMS,
};
const TEST_JSONRPC_RESULT = {
  id: TEST_ID,
  jsonrpc: '2.0',
  result: TEST_RESULT,
};
const TEST_JSONRPC_ERROR = {
  id: TEST_ID,
  jsonrpc: '2.0',
  error: TEST_ERROR,
};
describe('rpc-json-utils', () => {
  // ---------- Formatters ----------------------------------------------- //

  it('formatJsonRpcRequest', () => {
    const result = formatJsonRpcRequest(TEST_METHOD, TEST_PARAMS, TEST_ID);
    const expected = TEST_JSONRPC_REQUEST;
    expect(compare(result, expected)).toBeTruthy();
  });
  it('formatJsonRpcResult', () => {
    const result = formatJsonRpcResult(TEST_ID, TEST_RESULT);
    const expected = TEST_JSONRPC_RESULT;
    expect(compare(result, expected)).toBeTruthy();
  });
  it('formatJsonRpcError', () => {
    const result = formatJsonRpcError(TEST_ID, TEST_ERROR_MESSAGE);
    const expected = TEST_JSONRPC_ERROR;
    expect(compare(result, expected)).toBeTruthy();
  });
  it('formatErrorMessage', () => {
    const message = 'Something went wrong';
    const result = formatErrorMessage(message);
    const expected = TEST_ERROR;
    expect(compare(result, expected)).toBeTruthy();
  });

  // ---------- Validators ----------------------------------------------- //

  it('isJsonRpcRequest', () => {
    expect(isJsonRpcRequest(TEST_JSONRPC_REQUEST)).toBeTruthy();
    expect(isJsonRpcRequest(TEST_JSONRPC_RESULT)).toBeFalsy();
    expect(isJsonRpcRequest(TEST_JSONRPC_ERROR)).toBeFalsy();
  });
  it('isJsonRpcResponse', () => {
    expect(isJsonRpcResponse(TEST_JSONRPC_REQUEST)).toBeFalsy();
    expect(isJsonRpcResponse(TEST_JSONRPC_RESULT)).toBeTruthy();
    expect(isJsonRpcResponse(TEST_JSONRPC_ERROR)).toBeTruthy();
  });
  it('isJsonRpcResult', () => {
    expect(isJsonRpcResult(TEST_JSONRPC_REQUEST)).toBeFalsy();
    expect(isJsonRpcResult(TEST_JSONRPC_RESULT)).toBeTruthy();
    expect(isJsonRpcResult(TEST_JSONRPC_ERROR)).toBeFalsy();
  });
  it('isJsonRpcError', () => {
    expect(isJsonRpcError(TEST_JSONRPC_REQUEST)).toBeFalsy();
    expect(isJsonRpcError(TEST_JSONRPC_RESULT)).toBeFalsy();
    expect(isJsonRpcError(TEST_JSONRPC_ERROR)).toBeTruthy();
  });
});
