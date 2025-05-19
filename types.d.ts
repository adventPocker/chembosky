type FeaturedFilms = {
  data: {
    id: number;
    documentId: string;
    Title: string;
    Content: string;
    Awards: string;
    Films: string;
    Streaming: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
  meta: {};
};

type Film = {
  id: number;
  attributes: {
    Title: string;
    Year: string;
    slug:string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Image: {
      data: {
        id: number;
        attributes: {
          name: string;
          url: string;
        };
      };
    };
  };
};

type FilmListResponse = {
  data: FilmApiData[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

type UpcomingFilm = {
  id: number;
  attributes: {
    Title: string;
    Catogery: string;
    genere1: string;
    genere2: string;
    durations: string;
    FIlmContent: string;
    ExternalUrl: string;
    createdAt: string;
    updatedAt: string;
    slug: string;
    PageAvailable: boolean;
    publishedAt: string;
    Image: {
      data: {
        id: number;
        attributes: {
          name: string;
          url: string;
        };
      };
    };
    ImgThumb: {
      data: {
        id: number;
        attributes: {
          name: string;
          url: string;
        };
      };
    };
    LeadCrew: LeadCrew[];
    LeadCast: LeadCast[];
  };
}


type UpcomingFilmList = {
  data: UpcomingFilm[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

type FamousTrackImage = {
  id: number;
  documentId: string;
  name: string;
  url: string;
};

type FamousTrackSongThumbImage = {
  id: number;
  documentId: string;
  name: string;
  url: string;
};

type FamousTrackSong = {
  id: number;
  Title: string;
  Singer: string;
  ThumbImage: FamousTrackSongThumbImage;
};

type FamousTrack = {
  id: number;
  documentId: string;
  Heading: string;
  Date: string;
  Content: string;
  ExternalUrl: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Image: FamousTrackImage;
  Songs: FamousTrackSong[];
};

type FamousTrackList = {
  data: FamousTrack[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

// -------------//------

type YoutubeVideo = {
  id: number;
  Title: string;
  MovieName: string;
  YoutubeId: string;
  Image: {
    id: number;
    documentId: string;
    name: string;
    url: string;
  };
};

type FamousVideo = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Heading: string;
  Date: string;
  Content: string;
  ExternalUrl: string;
  Image: {
    id: number;
    documentId: string;
    name: string;
    url: string;
  }[];
  Videos: YoutubeVideo[];
};

type FamousVideoList = {
  data: FamousVideo[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

type FilmsData = {
  id: number;
  attributes: {
    Title: string;
    Year: string;
    Catogery: string;
    genere1: string;
    genere2: string;
    durations: string;
    FIlmContent: string;
    ExternalUrl: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Country: string;
    Language: string;
    ProductionCompany: string;
    Distributed_by: string;
    Sound_MIx: string;
    Aspect_Ratio: string;
    Project_Summary: string;
    slug: null;
    ImgThumb: {
      data: {
        id: number;
        attributes: {
          name: string;
          url: string;
        };
      };
    };
  };
};

type FilimographyList = {
  data: FilmsData[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

// film data set --------------- X ---------------- x ----------------x 

type MovieVideo = {
  id: number;
  Title: string;
  MovieName: string;
  YoutubeId: string;
  ThumbImage: {
    data: {
      id: number;
      attributes: {
        name: string;
        url: string;
      };
    };
  };
};

type Review = {
  id: number;
  Reviewer: string;
  ReviewContent: string;
};

type Awards = {
  id: number;
  AwardTitle: string;
  awardSponsered: string;
  givenFor: string;
};

type TrailerRelease = {
  id: number;
  Date: string;
  HostName: string;
  Digital:boolean; 
  HostImage: {
    data: {
      id: number;
      attributes: {
        name: string;
        url: string;
      };
    };
  };
};

type FilmsSong = {
  id: number;
  Title: string;
  Singer: string;
  ThumbImage: {
    data: {
      id: number;
      attributes: {
        name: string;
        url: string;
      };
    };
  };
  link: {
    id: number;
    Link: string;
  }[];
};

type LeadCast = {
  id: number;
  Name: string;
  Title: string;
  Image: {
    data: {
      id: number;
      attributes: {
        name: string;
        url: string;
      };
    };
  };
};
type Image={
  id: number;
  attributes: {
    name: string;
    url: string;
  };
}

type LeadCrew = {
  id: number;
  Name: string;
  Title: string;
  Image: {
    data: {
      id: number;
      attributes: {
        name: string;
        url: string;
      };
    };
  };
};

type Gallery = {
  id: number;
  Name: string;
  Image: {
    data: {
      id: number;
      attributes: {
        name: string;
        url: string;
      };
    };
  };
};

type DataFilms =  {
  id: number;
  attributes: {
    Title: string;
    Year: string;
    Catogery: string;
    genere1: string;
    genere2: string;
    durations: string;
    FIlmContent: string;
    ExternalUrl: string;
    BannerImages: {
      data: Image[];
    };
    Country: string;
    Language: string;
    ProductionCompany: string;
    Distributed_by: string;
    Sound_MIx: string;
    Aspect_Ratio: string;
    Project_Summary: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    slug: string;
    Review: Review[];
    Awards: Award[];
    Trailer_realeases: TrailerRelease[];
    Songs: FilmsSong[];
    Videos: MovieVideo[];
    LeadCast: LeadCast[];
    LeadCrew: LeadCrew[];
    PressKit: any[];
    Gallery: Gallery[];
  };
}

type FilmApiResponse = {
  data: DataFilms[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

type FilmApiDataBannerImage = {
  id: number;
  documentId: string;
  name: string;
  url: string;
};

type FilmApiDataReview = {
  id: number;
  Reviewer: string;
  ReviewContent: string;
};

type FilmApiDataAward = {
  id: number;
  AwardTitle: string;
  awardSponsered: string;
  givenFor: string;
};

type FilmApiDataTrailerReleaseHostImage = {
  id: number;
  documentId: string;
  name: string;
  url: string;
};

type FilmApiDataTrailerRelease = {
  id: number;
  Date: string;
  HostName: string;
  Digital: any; // null in example, can be changed to appropriate type if known
  HostImage: FilmApiDataTrailerReleaseHostImage;
};

type FilmApiDataSongThumbImage = {
  id: number;
  documentId: string;
  name: string;
  url: string;
};

type FilmApiDataSong = {
  id: number;
  Title: string;
  Singer: string;
  link: string;
  ThumbImage: FilmApiDataSongThumbImage;
};

type FilmApiDataMovieVideoImage = {
  id: number;
  documentId: string;
  name: string;
  url: string;
};

type FilmApiDataMovieVideo = {
  id: number;
  Title: string;
  MovieName: string;
  YoutubeId: string;
  Image: FilmApiDataMovieVideoImage;
};

type FilmApiDataLeadCastImage = {
  id: number;
  documentId: string;
  name: string;
  url: string;
};

type FilmApiDataLeadCast = {
  id: number;
  Name: string;
  Title: string;
  Image: FilmApiDataLeadCastImage;
};

type FilmApiDataLeadCrewImage = {
  id: number;
  documentId: string;
  name: string;
  url: string;
};

type FilmApiDataLeadCrew = {
  id: number;
  Name: string;
  Title: string;
  Image: FilmApiDataLeadCrewImage;
};

type FilmApiData = {
  id: number;
  documentId: string;
  Title: string;
  Year: string;
  Catogery: string;
  genere1: string;
  genere2: string;
  durations: string;
  FIlmContent: string;
  ExternalUrl: string;
  Country: string;
  Language: string;
  ProductionCompany: string;
  Distributed_by: string;
  Sound_MIx: string;
  Aspect_Ratio: string;
  Project_Summary: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  ImgThumb: FilmApiDataBannerImage;
  BannerImages: FilmApiDataBannerImage[];
  Review: FilmApiDataReview[];
  Awards: FilmApiDataAward[];
  Trailer_realeases: FilmApiDataTrailerRelease[];
  Songs: FilmApiDataSong[];
  MovieVideo: FilmApiDataMovieVideo[];
  LeadCast: FilmApiDataLeadCast[];
  LeadCrew: FilmApiDataLeadCrew[];
  PressKit: any[];
  Gallery: FilmApiDataGalleryImage[];
};

type FilmApiDataGalleryImage = {
  id: number;
  documentId: string;
  name: string;
  url: string;
};


type FilmApiDataResponse = {
  data: FilmApiData[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};
