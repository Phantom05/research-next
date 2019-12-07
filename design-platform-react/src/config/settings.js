export let LocalMode = false;
export const NODE_ENV = process.env.NODE_ENV;
export const DevMode = (NODE_ENV  === 'development');
export const ProdMode = (NODE_ENV === 'production');
export const apiAddress = (DevMode) 
? 'http://127.0.0.1:9999' 
: (ProdMode) 
? 'http://127.0.0.1:23879'
: null;
export const wsAddress =  (DevMode) 
? LocalMode ? 'ws://192.168.99.15:13879':'ws://127.0.0.1:8082'
: (ProdMode) 
? LocalMode ? 'ws://127.0.0.1:13879':'ws://127.0.0.1:13879'
: null;


// IOF : ws://192.168.99.15:13879
// IOA : ws://192.168.99.30:23879
// IOA : real: 30,  test: 50 