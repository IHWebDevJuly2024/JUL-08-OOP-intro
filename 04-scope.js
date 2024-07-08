// this is the global object. In the browser is the DOM (Document Object Model)
console.log(this);

// That's why we have access to things like this:
prompt();

// But prompt is not available when we use it in node