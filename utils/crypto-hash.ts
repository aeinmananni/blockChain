import crypto from 'crypto';

export const CRYPTO_HASH_HANDLER = (...args: unknown[]): string => {
  const hash = crypto.createHash('sha256');
  const result = args.reduce((a, b) => {
    return a + String(b);
  }, 0);
  hash.update(result as string);
  return hash.digest('hex');
};
