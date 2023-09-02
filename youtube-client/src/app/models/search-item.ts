import { ISearchItemStatistics } from '../components/search/models/statistics';

type SnippetThumbnail = {
  url: string;
  width: number;
  height: number;
};

export interface ISearchItem {
  kind: string;
  etag: string;
  id: string;
  snippt: {
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
    categoryId: number;
    liveBroadcastContent: string;
    localized: {
      title: string;
      description: string;
      defaultAudioLanguag: string;
    };
    statistics: ISearchItemStatistics;
  };
}
