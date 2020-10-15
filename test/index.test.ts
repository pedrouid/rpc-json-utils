import isEqual from 'lodash.isequal';

import {
  formatJsonRpcRequest,
  formatJsonRpcResult,
  formatJsonRpcError,
} from '../src';

function compare(a: any, b: any) {
  if (typeof a !== typeof b) return false;
  return isEqual(a, b);
}

describe('rpc-json-utils', () => {
  it('formatJsonRpcRequest', () => {
    const method = 'test_method';
    const params = { something: true };
    const result = formatJsonRpcRequest(method, params);
    const expected = {
      id: result.id,
      jsonrpc: '2.0',
      method,
      params,
    };
    expect(compare(result, expected)).toBeTruthy();
  });
  it('formatJsonRpcResult', () => {
    const id = 1;
    const value = true;
    const result = formatJsonRpcResult(id, value);
    const expected = {
      id,
      jsonrpc: '2.0',
      result: value,
    };
    expect(compare(result, expected)).toBeTruthy();
  });
  it('formatJsonRpcError', () => {
    const id = 1;
    const message = 'Something went wrong';
    const result = formatJsonRpcError(id, message);
    const expected = {
      id,
      jsonrpc: '2.0',
      error: { code: -32000, message },
    };
    expect(compare(result, expected)).toBeTruthy();
  });
});
