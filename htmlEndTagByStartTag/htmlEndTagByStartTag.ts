function htmlEndTagByStartTag(startTag: string): string {
  const startTagSplit = startTag.split(' ');
  const splitTag = startTagSplit[0].toString().split('');
  let endTag = '</';

  for (let i = 1; i < splitTag.length; i++) {
    endTag += splitTag[i];
  }

  endTag = endTag[endTag.length - 1] === '>' ? endTag : (endTag += '>');
  //   endTag = endTag.replace('/<', '/');

  return endTag;
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'));
