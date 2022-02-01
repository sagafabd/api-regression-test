const { matchers } = require('jest-json-schema');

expect.extend(matchers);

jest.setTimeout(10000);
