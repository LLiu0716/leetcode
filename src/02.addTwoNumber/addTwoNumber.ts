/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(readonly val?: number | null, readonly next?: ListNode | null) {}
 * }
 */
export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number | null, next?: ListNode | null) {
    this.val = val !== undefined ? val : 0
    this.next = next !== undefined ? next : null
  }
}

/**
 * 两数相加, 由于 js 里没有 ListNode 这个类型, 不做单元测试
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @returns {ListNode}
 */
export function addTwoNumber(l1: ListNode, l2: ListNode): ListNode {
  // let head = null
  // let tail = null
  // let carry = 0
  // while (l1 || l2) {
  //   const n1 = l1?.val || 0
  //   const n2 = l2?.val || 0
  //   const sum = n1 + n2 + carry
  //   if (!head) {
  //     head = tail = new ListNode(sum % 10)
  //   } else {
  //     tail.next = new ListNode(sum % 10)
  //     tail = tail.next
  //   }
  //   l1 = l1?.next || null
  //   l2 = l2?.next || null
  //   carry = Math.floor(sum / 10)
  // }
  // if (carry > 0) {
  //   tail.next = new ListNode(carry)
  // }
  // return head
  return add(l1, l2, 0)
}

function add(l1: ListNode, l2: ListNode, carry = 0) {
  if (!l1 && !l2 && carry == 0) return null
  let num = carry
  num += (l1?.val || 0) + (l2?.val || 0)
  l1 = l1?.next || null
  l2 = l2?.next || null
  const node = new ListNode(num % 10)
  node.next = add(l1, l2, Math.floor(num / 10))
  return node
}
