export function fromArray(arr) {
  let next = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    next = { val: arr[i], next: next };
  }
  return next;
}

export function toArray(object) {
  let res = [];
  while (object != null) {
    let element = object.val;
    object = object.next;
    res.push(element);
  }

  return res;
}

export function contains(list, element) {
  while (list != null) {
    if (list.val === element) {
      return true;
    }
    list = list.next;
  }
  return false;
}

function containsMethod(element) {
  list = this;
  while (list != null) {
    if (list.val === element) {
      return true;
    }
    list = list.next;
  }
  return false;
}

// let list = {
//   val: this.val,
//   next: this.next,
//   contains: containsMethod,
// };
// list.contains(element);
