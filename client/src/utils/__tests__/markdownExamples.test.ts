import { getMarkdownSnippet } from '../markdownExamples';

describe('getMarkdownSnippet', () => {
  it('returns snippet for known keyword', () => {
    expect(getMarkdownSnippet('bold')).toBe('**Bold Text**');
  });

  it('returns undefined for unknown keyword', () => {
    expect(getMarkdownSnippet('unknown-key')).toBeUndefined();
  });
});
