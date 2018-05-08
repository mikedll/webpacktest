

var niceImport = import('components/another-lib.js').then(whacky => {
  console.log(whacky.default());
});

export default niceImport;



