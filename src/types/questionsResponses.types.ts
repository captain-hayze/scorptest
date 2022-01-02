export interface UserReturned {
  id: string;
  username: string;
  full_name: string;
  profile_picture: string;
  followed: boolean;
}

export interface postFetchReturned {
  id: string;
  description: string;
  owner: UserReturned;
  image: string;
  created_at: Date;
  liked: boolean;
}

export interface listOfPostSingle {
  id: number;
  description: string;
  image: string;
  created_at: number;
}
