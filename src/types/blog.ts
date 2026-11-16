export interface BlogAuthor {
  name: string;
  role: string;
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedDate: string;
  readTime: string;
  imageKey: string;
  originalImageUrl: string;
  author: BlogAuthor;
  tags: string[];
  content: {
    introduction: string;
    sections: {
      heading: string;
      paragraphs: string[];
      listItems?: string[];
    }[];
    conclusion: string;
  };
  metaTitle: string;
  metaDescription: string;
}

