"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeDefs = exports.resolvers = void 0;

var _loadFiles = require("@graphql-tools/load-files");

var _merge = require("@graphql-tools/merge");

var loadTypeDefs = (0, _loadFiles.loadFilesSync)("".concat(__dirname, "/**/*.typeDefs.js"));
var typeDefs = (0, _merge.mergeTypeDefs)(loadTypeDefs);
exports.typeDefs = typeDefs;
var loadResolvers = (0, _loadFiles.loadFilesSync)("".concat(__dirname, "/**/*.resolvers.js"));
var resolvers = (0, _merge.mergeResolvers)(loadResolvers); // const schema = makeExecutableSchema({ typeDefs, resolvers });
// export default schema;

exports.resolvers = resolvers;