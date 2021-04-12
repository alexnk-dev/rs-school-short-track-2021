/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const re = /@[\dA-Z-]+.[A-Z]+/gi;
  const array = re.exec(email);
  return array.toString().replace('@', '');
}

module.exports = getEmailDomain;
