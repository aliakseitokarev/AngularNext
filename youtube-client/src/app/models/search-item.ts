import { ISearchItemStatistics } from './statistics';

type SnippetThumbnail = {
  url: string;
  width: number;
  height: number;
};

interface ISearchItemSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: SnippetThumbnail;
    medium: SnippetThumbnail;
    high: SnippetThumbnail;
    standard: SnippetThumbnail;
    maxres: SnippetThumbnail;
  };
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  defaultLanguage?: string;
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage: string;
}

export interface ISearchItem {
  kind: string;
  etag: string;
  id: string;
  snippet: ISearchItemSnippet;
  statistics: ISearchItemStatistics;
}
