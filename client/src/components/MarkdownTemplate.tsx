import React from 'react';
import MarkdownLite from './Chat/Messages/Content/MarkdownLite';
import { markdownExamples } from '~/utils/markdownExamples';

export type MarkdownTemplateProps = {
  keyword: string;
};

export default function MarkdownTemplate({ keyword }: MarkdownTemplateProps) {
  const snippet = markdownExamples[keyword];
  const content = snippet ?? 'Content not available';
  return <MarkdownLite content={content} />;
}
