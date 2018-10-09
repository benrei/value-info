function info(value) {
  let obj;
  if(typeof value === 'undefined'){
    obj = {
      type: 'undefined',
      value: value
    }
  }else if(typeof value === 'string'){
    obj = {
      type: 'String',
      length: Object.keys(value).length,
      value: value
    }
  }else if(Array.isArray(value)){
    obj = {
      type: 'Array',
      length: value.length,
    }
  }else if(value && typeof value === 'object'){
    obj = {
      type: 'Object',
      length: Object.keys(value).length,
    }
  }else if(typeof value === 'object'){
    obj = {
      type: 'Object null',
      value: value
    }
  }else if(typeof value === 'boolean'){
    obj = {
      type: 'Boolean',
      value: value
    }
  }else if(typeof value === 'number'){
    obj = {
      type: 'Number',
      value: value
    }
  }else if(typeof value === 'symbol'){
    obj = {
      type: 'Symbol',
      value: value
    }
  }else if(typeof value === 'function'){
    obj = {
      type: 'Function',
      value: value
    }
  }
  return obj;
}
module.exports = info;