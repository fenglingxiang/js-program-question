// 思路： 通过join方法将需要复制的字符串当成拼接符实现拼接，复制n次就是n个拼接符，那么内容就是n+1个空字符串

function repeatStr(str, count) {
  return new Array(count + 1).join(str);
}