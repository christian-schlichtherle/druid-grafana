# Changelog

## 1.9.0

### Features

- **SQL code completion.** The SQL query editor (panel, Explore and the variable editor) now suggests
  SQL keywords, Druid SQL functions, datasources after `FROM`, the columns of the referenced
  datasource with their types, Grafana template variables and the global variables this plugin
  supports (`$__from`, `$__to`, `$__interval`, ...).
- **Inline help.** Suggestions carry documentation, hovering a function shows its signature and
  description, and parameter hints appear while typing `FUNC(`. The function catalog is generated from
  the Apache Druid documentation, so hovers state which Druid version they describe.
- **Format query.** A `{}` button reformats the query, keeping Grafana template variables intact. The
  editor can also be expanded and collapsed.

### Changes

- The SQL query runs on blur or <kbd>Cmd/Ctrl</kbd>+<kbd>Enter</kbd> instead of on every keystroke, so
  half-typed statements are no longer sent to Druid.
- `Sql` is preselected for new queries.
- Errors from Druid now report what actually went wrong (for example
  `druid returned HTTP 400: Object 'nope' not found (line [1], column [15])`) instead of a bare
  `druidException`.
- Deterministic HTTP 4xx responses from Druid are no longer retried; 5xx, 429 and transport errors
  still are.
- Table and column metadata is served by two new backend resource endpoints (`metadata/tables`,
  `metadata/columns`) which reuse the datasource's configured authentication (basic auth, mTLS,
  skip-TLS).
- The native-JSON and JavaScript editors are unchanged.
- Development environment: Apache Druid 37.0.0 and Grafana 12.3.0 (the previous 12.0.2 pin could not
  load the plugin frontend, which requires Grafana >= 12.3.0).

## 1.0.0 (Unreleased)

Initial release.
