var pickFiles = require('broccoli-static-compiler')
var mergeTrees = require('broccoli-merge-trees')
var jsHintTree = require('broccoli-jshint')
var filterReact = require('broccoli-react')

var _ = require('underscore')

function jsHint(jsTree) {
  jsHintTree(jsTree , {
    logError: function (message) {
      this._errors.push(chalk.red(message) + '\n')
    }
  })

  return jsTree
}

function index(masterTree) {
  var indexTree = pickFiles('app', {
    srcDir: '/',
    destDir: '',
    files: ['*.html']
  })

  return mergeTrees(
    [masterTree, indexTree],
    { overwrite: true }
  )
}

function createJsTree() {
  var jsTree = pickFiles('./app', {
    srcDir: '/',
    destDir: '',
    files: [
      '**/*.jsx',
      '**/*.js'
    ]
  })

  return filterReact(jsTree, { extensions: ['jsx'] })
}

var buildTree = _.compose(jsHint, createJsTree)

buildTree = _.compose(
  index,
  buildTree
)

module.exports = buildTree()
