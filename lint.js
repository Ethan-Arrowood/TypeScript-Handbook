var markdownlint = require("markdownlint");
var glob = require("glob");

var options = {
  files: glob.sync("**/*.md", {ignore: "node_modules/**/*"}),
  config: {
    MD001: false, // Header levels should only increment by one level at a time
    MD002: false, // First header should be a h1 header
    MD003: false, // Header style
    MD004: "asterisk", // Unordered list style
    MD005: true, // Inconsistent indentation for list items at the same level
    MD006: true, // Consider starting bulleted lists at the beginning of the line
    MD007: 4, // Unordered list indentation
    MD009: true, // Trailing spaces
    MD010: true, // Hard tabs
    MD011: true, // Reversed link syntax
    MD012: false, // Multiple consecutive blank lines
    MD013: false, // Line length
    MD014: false, // Dollar signs used before commands without showing output
    MD018: true, // No space after hash on atx style header
    MD019: true, // Multiple spaces after hash on atx style header
    MD020: false, // No space inside hashes on closed atx style header
    MD021: false, // Multiple spaces inside hashes on closed atx style header
    MD022: true, // Headers should be surrounded by blank lines
    MD023: true, // Headers must start at the beginning of the line
    MD024: false, // Multiple headers with the same content
    MD025: false, // Multiple top level headers in the same document
    MD026: false, // Trailing punctuation in header
    MD027: false, // Multiple spaces after blockquote symbol
    MD028: false, // Blank line inside blockquote
    MD029: false, // Ordered list item prefix
    MD030: false, // Spaces after list markers
    MD031: false, // Fenced code blocks should be surrounded by blank lines
    MD032: false, // Lists should be surrounded by blank lines
    MD033: false, // Inline HTML
    MD034: false, // Bare URL used
    MD035: false, // Horizontal rule style
    MD036: false, // Emphasis used instead of a header
    MD037: false, // Spaces inside emphasis markers
    MD038: false, // Spaces inside code span elements
    MD039: false, // Spaces inside link text
    MD040: false, // Fenced code blocks should have a language specified
    MD041: false, // First line in file should be a top level header
  }
};
 
var result = markdownlint.sync(options);
console.log(result.toString());

var exitCode = 0;
Object.keys(result).forEach(function (file) {
    var fileResults = result[file];
    Object.keys(fileResults).forEach(function (rule) {
        var ruleResults = fileResults[rule];
        exitCode += ruleResults.length;
    });
});

process.exit(exitCode);
