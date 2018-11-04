function domainType(domains: string[]): string[] {
  const domainTypes = [];
  for (let domain of domains) {
    const singleDomain = domain.split('.');
    for (let str of singleDomain) {
      if (str === 'org') {
        domainTypes.push('organization');
      } else if (str === 'com') {
        domainTypes.push('commercial');
      } else if (str === 'net') {
        domainTypes.push('network');
      } else if (str === 'info') {
        domainTypes.push('information');
      }
    }
  }

  return domainTypes;
}

console.log(
  domainType(['en.wiki.org', 'codefights.com', 'happy.net', 'code.info'])
);
