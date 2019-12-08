export function makeAsyncActions(actionName) {
  const prefix = actionName;
  return {
    INDEX : prefix,
    REQUEST : prefix + '_REQUEST',
    PENDING : prefix + '_PENDING',
    SUCCESS : prefix + '_SUCCESS',
    FAILURE : prefix + '_FAILURE',
  }
}

export function rmmbrace(value){
  // var regExp = /[\{\}']+/g;
  return value.replace(/[\{\}']+/g,'')
}

export function regPassword(value){
  var regExp = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

  // var regExp = /^[A-Za-z0-9]{6,12}$/;
  return regExp.test(value) 
}

export function regEmail(value){
  var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return regExp.test(value)
}

export function regLength(len,value,bool){
  try{
    value = value.toString().trim();
  }catch(e){
    console.log(e,'error');
  }
  var regExp = bool ? new RegExp(`^.{${len},${len}}$`) : new RegExp(`^.{1,${len}}$`);
    return regExp.test(value)
}

const st = typeof localStorage === 'object' ? localStorage : {};
export const keys = {
  user: '__$$_user__$$__',
  token:'__$$_user_$$__token'
};

export const storage= {
  set(key, value) {
    st[key] = JSON.stringify(value);
  },
  get(key) {
    if (!st[key]) return null;
    const value = st[key];
    try {
      const parsed = JSON.parse(value);
      return parsed;
    } catch (e) {
      return value;
    }
  },
  remove(key) {
    delete st[key];
  },
  clear() {
    if (st.clear) {
      st.clear();
    }
  },
};

class Cookie {
  set(name, value, exp = 1) {
    // set(변수이름, 변수값, 기간);
    var date = new Date();
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
 
  }
  get(name) {
    // get(변수이름)
    var x, y;
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      x = cookies[i].substr(0, cookies[i].indexOf('='));
      y = cookies[i].substr(cookies[i].indexOf('=') + 1);
      x = x.replace(/^\s+|\s+$/g, ''); // 앞과 뒤의 공백 제거하기
      if (x === name) {
        return unescape(y) // unescape로 디코딩 후 값 리턴
      }
    }
  }
  remove(name) {
    // deleteCookie(변수이름)
    document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
  }
  clear() {

  }
}
export const cookie = new Cookie()

export function disableDragSelect(target){
  try{
    if(target){
      target.setAttribute('onselectstart','return false')
      target.setAttribute('oncontextmenu','return false');
      target.setAttribute('ondragstart','return false');
    }
  }catch(e){
    console.log(e);
  }
}

export const getScrollTop = () => {
  if (!document.body) return 0;
  const scrollTop = document.documentElement
    ? document.documentElement.scrollTop || document.body.scrollTop
    : document.body.scrollTop;
  return scrollTop;
};

export const getScrollBottom = () => {
  if (!document.body) return 0;
  const { scrollHeight } = document.body;
  const { innerHeight } = window;
  const scrollTop = getScrollTop();
  return scrollHeight - innerHeight - scrollTop;
};

export const preventStickBottom = () => {
  const scrollBottom = getScrollBottom();
  if (scrollBottom !== 0) return;
  if (document.documentElement) {
    document.documentElement.scrollTop -= 1;
  } else {
    if (!document.body) return;
    document.body.scrollTop -= 1;
  }
};

export function numRangeMap(start,end){
  return function(num){
    return (num >= start && num <= end)
  }
}